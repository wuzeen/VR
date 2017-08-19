package com.vr.dao;

import com.vr.domain.Thumbsupdown;

public interface ThumbsupdownDao {
	public boolean createThumbsupdown(Thumbsupdown message);
	 public boolean deleteThumbsupdown(Thumbsupdown message);
	  public boolean updateThumbsupdown(Thumbsupdown message);
	  public Thumbsupdown getThumbsupdown(String type);

}
