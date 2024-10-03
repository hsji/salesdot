package com.unisales.util;
import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Vector;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.jcraft.jsch.Channel;
import com.jcraft.jsch.ChannelSftp;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.Session;
import com.jcraft.jsch.SftpException;


public class FTPUtil {
	private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());

	private Session session = null;
	private Channel channel = null;
	private ChannelSftp channelSftp = null;

	// SFTP 서버연결
	public void init() {
		//sFTP 구성후..
		String url = "http://mobiletong.tobesoft.com";// /*해당 서버의 url, ip주소*/;
		String user = "devPack";//*아이디*/;
		String password = "!devPack"; //비밀번호*/;
		int port =84;// /*포트번호*/

		System.out.println(url);
		// JSch 객체 생성
		JSch jsch = new JSch();
		try {
			// 세션객체 생성 ( user , host, port )
			session = jsch.getSession(user, url, port);

			// password 설정
			session.setPassword(password);
			// 세션관련 설정정보 설정
			java.util.Properties config = new java.util.Properties();

			// 호스트 정보 검사하지 않는다.
			config.put("StrictHostKeyChecking", "no");
			session.setConfig(config);

			// 접속
			session.connect();

			// sftp 채널 접속
			channel = session.openChannel("sftp");
			channel.connect();

		} catch (JSchException e) {
			e.printStackTrace();
		}
		channelSftp = (ChannelSftp) channel;

	}

	/**
	 * 해당 경로에 파일 업로드
	 * @param dir 외부서버에 저장할 경로
	 * @param file 외부서버에 저장할 파일이름
	 */
	public void upload(String dir, File file) {
		FileInputStream in = null;

		try { // 파일을 가져와서 inputStream에 넣고 저장경로를 찾아 put
			in = new FileInputStream(file);
			channelSftp.cd(dir);
			channelSftp.put(in, file.getName());
		} catch (SftpException se) {
			se.printStackTrace();
		} catch (FileNotFoundException fe) {
			fe.printStackTrace();
		} finally {
			try {
				in.close();
			} catch (IOException ioe) {
				ioe.printStackTrace();
			}
		}
	}

	/**
	 * 해당 경로의 .gif 확장자의 파일 제거
	 * @param dir 해당파일이 있는 경로
	 * @param file 파일이름
     * @param exr 확장자 ("."을 포함해서 입력해야한다.)
	 */
	public void remove(String dir, String file, String ext) {
		init();
		try {
		Vector<ChannelSftp.LsEntry> fileAndFolderList = channelSftp.ls(dir);

		for (ChannelSftp.LsEntry item : fileAndFolderList) {
			System.out.println(item.getFilename());
			try { 
				channelSftp.rm(dir + "/"+file + ext);
			} catch (SftpException se) {
				se.printStackTrace();
			} finally {
				
			}
		}
		} catch(SftpException e) {
			e.printStackTrace();
		}
		disconnect();
	}

	/**
	 * 외부서버에 있는 파일 로컬에 다운받기
	 * @param localDir해당파일이 있는 경로
	 * @param fileName파일이름
     * @param ext 확장자 ("."을 포함해서 입력해야한다.)
	 */
    public File download(String localDir, String fileName,  String ext) throws Exception{
        byte[] buffer = new byte[1024];
        File newFile = null;
        BufferedInputStream bis;
        init();
        try {
            // Change to output directory
            channelSftp.cd(localDir);

            File file = new File(localDir+"/");
            System.out.println("file.getName()  "+file.getName());
            System.out.println("channelSftp.get(file.getName())  "+channelSftp.get(localDir+"/"+fileName+".gif"));
            
            bis = new BufferedInputStream(channelSftp.get(localDir+"/"+fileName+ext));

            newFile = new File(localDir + File.separator + fileName + ext);

            // Download file
            // 이것도 로컬경로를 담는 매개변수를 추가하여 다운받을 로컬주소를 지정할 수 있다.
            OutputStream os = new FileOutputStream("D://aaa//aa" + ext);
            BufferedOutputStream bos = new BufferedOutputStream(os);
            int readCount;
            while ((readCount = bis.read(buffer)) > 0) {
                bos.write(buffer, 0, readCount);
            }
            bis.close();
            bos.close();
            System.out.println("File downloaded successfully - "+ file.getAbsolutePath());

        } catch (Exception e) {
            e.printStackTrace();
        }
        disconnect();
        return newFile;
    }

	// 파일서버와 세션 종료
	public void disconnect() {
		channelSftp.quit();
		session.disconnect();
	}
	

}
