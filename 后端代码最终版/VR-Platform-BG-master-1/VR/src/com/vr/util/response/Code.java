package com.vr.util.response;

/**
 * 服务端返回值状态码
 * @author hxuhao
 *
 */
public interface Code {
	
	// 成功
	int SUCCEED = 200;
	
	//验证码错误
	int WRONG_CHECKCODE=201;
	
	// 错误的邮箱或者密码
	int WRONG_EMAIL_OR_PASSWORD = 300;
	
	// 被禁用
	int IS_BANED = 301;
	
	// 未激活
	int NOT_ACTIVATED = 302;
	
	// 邮箱被占用
	int OCCUPIED_EMAIL = 303;
	
	// 昵称被占用
	int OCCUPIED_NICKNAME = 304;
	
	// 未登录
	int NOT_LOGGED = 400;
	
	// 无权访问
	int NOT_PERMISSION = 401;
	
	// 删除错误，提示用户刷新
	int DELETE_FAULT = 402;
	
	// 未知错误
	int UNKNOWN_FAULT = 500;
	
	// 系统错误
	int SYSTEM_ERROR = -1;
	
	// 超过激活时间
	int ACTIVATE_TIME_OUT = 600;
	
	// 激活链接非法
	int ILLEGAL_ACTIVATE_LINK = 700;
	
	// 已激活
	int HAS_BEEN_ACTIVATED = 800;
	
	// 事件化失败
	int TRANS_TO_EVENTLOG_FAIL = 900;
	
	// 上传文件大小为0
	int ZERO_FILE_SIZE = 901;
	
	//int NOT_ACTIVATED=900;
}
