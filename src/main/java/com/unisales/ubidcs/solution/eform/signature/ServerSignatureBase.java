package com.unisales.ubidcs.solution.eform.signature;

import java.io.IOException;
import java.io.InputStream;
import java.security.MessageDigest;
import org.apache.pdfbox.pdmodel.interactive.digitalsignature.SignatureInterface;

public class ServerSignatureBase implements SignatureInterface {
  protected String licensekey = null;
  
  protected String serverSignCert = null;
  
  protected String serverSignPrikey = null;
  
  protected String certPassword = null;
  
  static byte[] emptyHex = new byte[18944];
  
  protected String hashCode = "";
  
  public byte[] sign(InputStream content) throws IOException {
    byte[] signbyte = null;
    try {
      MessageDigest md = MessageDigest.getInstance("SHA-256");
      byte[] b = new byte[4096];
      int count;
      while ((count = content.read(b)) > 0)
        md.update(b, 0, count); 
    } catch (Exception ex) {
      throw new RuntimeException(ex);
    } finally {}
    return signbyte;
  }
}
