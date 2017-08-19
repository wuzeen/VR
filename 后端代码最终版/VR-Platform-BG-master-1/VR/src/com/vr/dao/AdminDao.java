package com.vr.dao;

import com.vr.domain.Admin;

public interface AdminDao {
public int checkPassword(Admin admin);
public boolean saveAdmin(Admin admin);
public boolean deleteAdmin(Admin admin);
public Object getAdmin(Admin admin);
}
