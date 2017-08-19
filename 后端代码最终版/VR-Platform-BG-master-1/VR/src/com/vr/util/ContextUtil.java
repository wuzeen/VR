package com.vr.util;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

public class ContextUtil {
	public static ServletRequestAttributes getContext() {
		return (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
	}

	public static HttpServletRequest getRequest() {
		return getContext().getRequest();
	}

	public static HttpServletResponse getResponse() {	
		return getContext().getResponse();
	}
	public static HttpSession getSession()
	{
		return getRequest().getSession();
	}
	public static String getContextPath()
	{
		return getRequest().getContextPath();
	}
	/*
	 * 判断是否是Ajax请求
	 * */
	public static boolean isAjaxRequest()
	{
		return true;
	}
}
