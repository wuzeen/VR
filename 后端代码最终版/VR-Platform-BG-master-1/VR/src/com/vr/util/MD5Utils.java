package com.vr.util;

import java.math.BigInteger;
import java.security.MessageDigest;

public class MD5Utils {
	public static String getMD5(String str) throws Exception {
		if (str == null || str.length() == 0) {
			return null;
		}
		try {
			// ����һ��MD5���ܼ���ժҪ
			MessageDigest md = MessageDigest.getInstance("MD5");
			// ����md5����
			md.update(str.getBytes());
			// digest()���ȷ������md5 hashֵ������ֵΪ8Ϊ�ַ�������Ϊmd5 hashֵ��16λ��hexֵ��ʵ���Ͼ���8λ���ַ�
			// BigInteger������8λ���ַ���ת����16λhexֵ�����ַ�������ʾ���õ��ַ�����ʽ��hashֵ
			return new BigInteger(1, md.digest()).toString(16);
		} catch (Exception e) {
			throw new Exception("MD5���ܳ��ִ���");
		}
	}
	/*public static void main(String args[]) throws Exception{
		System.out.print(getMD5("123536"));
	}*/
}
