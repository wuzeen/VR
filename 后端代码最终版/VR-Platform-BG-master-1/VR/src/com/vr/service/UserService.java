package com.vr.service;

import com.vr.domain.User;

public interface UserService {
    public boolean updateUser(User user);
  	public int register(User user,String context);
  	public boolean login(User user);
  	public int updatePassword(User user,String newPassword);
  	public int updateNickName(User user,String newNickname);
  	public boolean activate(User user);
  	public User getUserById(Integer id);
  	public User getUserByEmailAndPassword(User user);
}
