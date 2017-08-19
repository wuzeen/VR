package com.vr.util;

import java.text.NumberFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class ConvertUtil {
public static String DatetoString(Date date,String format)
{
	SimpleDateFormat sdf=new SimpleDateFormat(format);
	return sdf.format(date);
}
public static Date StringtoDate(String time,String format) throws ParseException
{
	SimpleDateFormat sdf=new SimpleDateFormat(format);
	return sdf.parse(format);
}

public static String DoubletoPercentage(double data)
{
	NumberFormat percentFormat =java.text.NumberFormat.getPercentInstance(); 
	percentFormat.setMaximumFractionDigits(2); //最大小数位数 
	percentFormat.setMinimumFractionDigits(2); //最小小数位数 
	percentFormat.setMinimumIntegerDigits(2);
	String result =percentFormat.format(data);
	String[] array=result.split("%");
	System.out.println(array[0]);
	return array[0];
}
}
