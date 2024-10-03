package com.unisales.ubidcs.solution.eform.signature;

import java.io.Closeable;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Calendar;
import org.apache.pdfbox.io.IOUtils;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.interactive.digitalsignature.PDSignature;
import org.apache.pdfbox.pdmodel.interactive.digitalsignature.SignatureOptions;

import com.unisales.ubidcs.solution.eform.utils.SigUtils;

import org.apache.pdfbox.Loader;

public class ServerSignature extends ServerSignatureBase {
  public ServerSignature(String licensekey, String serverSignCert, String serverSignPrikey, String certPassword) {
    this.licensekey = licensekey;
    this.serverSignCert = serverSignCert;
    this.serverSignPrikey = serverSignPrikey;
    this.certPassword = certPassword;
  }
  
  public String signDetached(File inFile, File outFile) throws IOException {
    String ret = null;
    if (inFile == null || !inFile.exists())
      throw new FileNotFoundException("Document for signing does not exist"); 
    FileOutputStream fos = null;
    PDDocument doc = null;
    try {
      fos = new FileOutputStream(outFile);
      doc = Loader.loadPDF(inFile);
      ret = signDetached(doc, fos);
    } catch (Exception exception) {
    
    } finally {
      IOUtils.closeQuietly(fos);
      IOUtils.closeQuietly((Closeable)doc);
    } 
    return ret;
  }
  
  public String signDetached(File inFile, OutputStream fos) throws IOException {
    String ret = null;
    if (inFile == null || !inFile.exists())
      throw new FileNotFoundException("Document for signing does not exist"); 
    PDDocument doc = null;
    try {
      doc = Loader.loadPDF(inFile);
      ret = signDetached(doc, fos);
    } catch (Exception exception) {
    
    } finally {
      IOUtils.closeQuietly(fos);
      IOUtils.closeQuietly((Closeable)doc);
    } 
    return ret;
  }
  
  public String signDetached(PDDocument document, OutputStream output) throws IOException {
    int accessPermissions = SigUtils.getMDPPermission(document);
    PDSignature signature = new PDSignature();
    signature.setFilter(PDSignature.FILTER_ADOBE_PPKLITE);
    signature.setSubFilter(PDSignature.SUBFILTER_ADBE_PKCS7_DETACHED);
    signature.setSignDate(Calendar.getInstance());
    if (accessPermissions == 0)
      SigUtils.setMDPPermission(document, signature, 2); 
    SignatureOptions signatureOptions = new SignatureOptions();
    signatureOptions.setPreferredSignatureSize(18944);
    document.addSignature(signature, this, signatureOptions);
    document.saveIncremental(output);
    return this.hashCode;
  }
}
