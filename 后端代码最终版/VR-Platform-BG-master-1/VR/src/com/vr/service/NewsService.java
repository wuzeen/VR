package com.vr.service;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.List;

import com.vr.domain.News;

public interface NewsService {
	public boolean createNews(News news);

	public boolean deleteNews(News news);

	public boolean updateNews(News news);

	public News injectContent(News news);
	
	public void setEditorId(News news,Integer eid);
    
	public void pushNews(News news);
	
	public News getNewsById(Integer id);
	
	public List<News> getNewsByPage(int pageNo,int pageNum);
}
