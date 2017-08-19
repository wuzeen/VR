package com.vr.util;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;

public class RedisUtil {
	private static String ADDRESS = "127.0.0.1";
	private static int PORT = 6379;
    private static int MAX_ACTIVE = 1024;
	private static int MAX_IDLE = 200;
	private static int MAX_WAIT = 10000;
    private static int TIMEOUT = 10000;
    //在生产状态一般不开启
	private static boolean TEST_ON_BORROW = true;
    private static JedisPool jedisPool = null;
	static {
		try {
			JedisPoolConfig config = new JedisPoolConfig();
			config.setMaxIdle(MAX_ACTIVE);
			// change "maxActive" -> "maxTotal" and "maxWait" -> "maxWaitMillis"
			// in all examples.
			config.setMaxTotal(MAX_ACTIVE);
			config.setMaxIdle(MAX_IDLE);
			config.setMaxWaitMillis(MAX_WAIT);
			config.setTestOnBorrow(TEST_ON_BORROW);
			jedisPool = new JedisPool(config, ADDRESS, PORT, TIMEOUT);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
    
	public synchronized static Jedis getJedis() {
		try {
			if (jedisPool != null) {
				Jedis resource = jedisPool.getResource();
				return resource;
			} else {
				return null;
			}
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	@SuppressWarnings("deprecation")
	public static void returnResource(final Jedis jedis) {
		if (jedis != null) {
			jedisPool.returnResource(jedis);
		}
	}

}
