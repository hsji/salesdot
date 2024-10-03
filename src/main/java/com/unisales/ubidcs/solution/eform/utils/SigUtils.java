package com.unisales.ubidcs.solution.eform.utils;

import java.io.IOException;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import org.apache.pdfbox.cos.COSArray;
import org.apache.pdfbox.cos.COSBase;
import org.apache.pdfbox.cos.COSDictionary;
import org.apache.pdfbox.cos.COSName;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.common.COSObjectable;
import org.apache.pdfbox.pdmodel.encryption.SecurityProvider;
import org.apache.pdfbox.pdmodel.interactive.digitalsignature.PDSignature;
import org.bouncycastle.asn1.ASN1Object;
import org.bouncycastle.asn1.cms.Attribute;
import org.bouncycastle.asn1.cms.AttributeTable;
import org.bouncycastle.asn1.pkcs.PKCSObjectIdentifiers;
import org.bouncycastle.cert.X509CertificateHolder;
import org.bouncycastle.cert.jcajce.JcaX509CertificateConverter;
import org.bouncycastle.cms.CMSException;
import org.bouncycastle.cms.CMSSignedData;
import org.bouncycastle.cms.SignerInformation;
import org.bouncycastle.cms.SignerInformationVerifier;
import org.bouncycastle.cms.jcajce.JcaSimpleSignerInfoVerifierBuilder;
import org.bouncycastle.operator.OperatorCreationException;
import org.bouncycastle.tsp.TSPException;
import org.bouncycastle.tsp.TimeStampToken;
import org.bouncycastle.util.Selector;
import org.bouncycastle.util.Store;

public class SigUtils {
  public static int getMDPPermission(PDDocument doc) {
    COSBase base = doc.getDocumentCatalog().getCOSObject().getDictionaryObject(COSName.PERMS);
    if (base instanceof COSDictionary) {
      COSDictionary permsDict = (COSDictionary)base;
      base = permsDict.getDictionaryObject(COSName.DOCMDP);
      if (base instanceof COSDictionary) {
        COSDictionary signatureDict = (COSDictionary)base;
        base = signatureDict.getDictionaryObject("Reference");
        if (base instanceof COSArray) {
          COSArray refArray = (COSArray)base;
          for (int i = 0; i < refArray.size(); i++) {
            base = refArray.getObject(i);
            if (base instanceof COSDictionary) {
              COSDictionary sigRefDict = (COSDictionary)base;
              if (COSName.DOCMDP.equals(sigRefDict.getDictionaryObject("TransformMethod"))) {
                base = sigRefDict.getDictionaryObject("TransformParams");
                if (base instanceof COSDictionary) {
                  COSDictionary transformDict = (COSDictionary)base;
                  int accessPermissions = transformDict.getInt(COSName.P, 2);
                  if (accessPermissions < 1 || accessPermissions > 3)
                    accessPermissions = 2; 
                  return accessPermissions;
                } 
              } 
            } 
          } 
        } 
      } 
    } 
    return 0;
  }
  
  public static void setMDPPermission(PDDocument doc, PDSignature signature, int accessPermissions) throws IOException {
    for (PDSignature sig : doc.getSignatureDictionaries()) {
      if (COSName.DOC_TIME_STAMP.equals(sig.getCOSObject().getItem(COSName.TYPE)))
        continue; 
      if (sig.getCOSObject().containsKey(COSName.CONTENTS))
        throw new IOException("DocMDP transform method not allowed if an approval signature exists"); 
    } 
    COSDictionary sigDict = signature.getCOSObject();
    COSDictionary transformParameters = new COSDictionary();
    transformParameters.setItem(COSName.TYPE, (COSBase)COSName.getPDFName("TransformParams"));
    transformParameters.setInt(COSName.P, accessPermissions);
    transformParameters.setName(COSName.V, "1.2");
    transformParameters.setNeedToBeUpdated(true);
    COSDictionary referenceDict = new COSDictionary();
    referenceDict.setItem(COSName.TYPE, (COSBase)COSName.getPDFName("SigRef"));
    referenceDict.setItem("TransformMethod", (COSBase)COSName.DOCMDP);
    referenceDict.setItem("DigestMethod", (COSBase)COSName.getPDFName("SHA1"));
    referenceDict.setItem("TransformParams", (COSBase)transformParameters);
    referenceDict.setNeedToBeUpdated(true);
    COSArray referenceArray = new COSArray();
    referenceArray.add((COSBase)referenceDict);
    sigDict.setItem("Reference", (COSBase)referenceArray);
    referenceArray.setNeedToBeUpdated(true);
    COSDictionary catalogDict = doc.getDocumentCatalog().getCOSObject();
    COSDictionary permsDict = new COSDictionary();
    catalogDict.setItem(COSName.PERMS, (COSBase)permsDict);
    permsDict.setItem(COSName.DOCMDP, (COSObjectable)signature);
    catalogDict.setNeedToBeUpdated(true);
    permsDict.setNeedToBeUpdated(true);
  }
  
  public static TimeStampToken extractTimeStampTokenFromSignerInformation(SignerInformation signerInformation) throws CMSException, IOException, TSPException {
    if (signerInformation.getUnsignedAttributes() == null)
      return null; 
    AttributeTable unsignedAttributes = signerInformation.getUnsignedAttributes();
    Attribute attribute = unsignedAttributes.get(PKCSObjectIdentifiers.id_aa_signatureTimeStampToken);
    if (attribute == null)
      return null; 
    ASN1Object obj = (ASN1Object)attribute.getAttrValues().getObjectAt(0);
    CMSSignedData signedTSTData = new CMSSignedData(obj.getEncoded());
    return new TimeStampToken(signedTSTData);
  }
  
  public static void validateTimestampToken(TimeStampToken timeStampToken) throws TSPException, CertificateException, OperatorCreationException, IOException {
    Collection<X509CertificateHolder> tstMatches = timeStampToken.getCertificates().getMatches((Selector)timeStampToken.getSID());
    X509CertificateHolder certificateHolder = tstMatches.iterator().next();
    SignerInformationVerifier siv = (new JcaSimpleSignerInfoVerifierBuilder()).setProvider(SecurityProvider.getProvider()).build(certificateHolder);
    timeStampToken.validate(siv);
  }
  
  public static void verifyCertificateChain(Store<X509CertificateHolder> certificatesStore, X509Certificate certFromSignedData, Date signDate) throws CertificateException {
    Collection<X509CertificateHolder> certificateHolders = certificatesStore.getMatches(null);
    Set<X509Certificate> additionalCerts = new HashSet();
    JcaX509CertificateConverter certificateConverter = new JcaX509CertificateConverter();
    for (X509CertificateHolder certHolder : certificateHolders) {
      X509Certificate certificate = certificateConverter.getCertificate(certHolder);
      if (!certificate.equals(certFromSignedData))
        additionalCerts.add(certificate); 
    } 
  }
}
