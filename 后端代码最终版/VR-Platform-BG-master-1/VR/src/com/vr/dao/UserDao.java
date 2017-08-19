package com.vr.dao;

import com.vr.domain.User;

public interface UserDao {
      public boolean createUser(User user);
      public boolean deleteUser(User user);
      public boolean updateUser(User user);
      public User getUserByEmailAndPassword(String email,String password);
      public boolean isExistEmail(String email);
      public boolean isExistNickname(String nickname);
      public User getUserById(Integer id);
}
