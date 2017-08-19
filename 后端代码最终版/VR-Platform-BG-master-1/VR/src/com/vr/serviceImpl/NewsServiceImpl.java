package com.vr.serviceImpl;

import java.io.BufferedReader;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.vr.dao.NewsDao;
import com.vr.domain.News;
import com.vr.service.NewsService;
import com.vr.util.*;
@Service
@Qualifier("newsServiceImpl")
public class NewsServiceImpl implements NewsService{
	@Autowired
	@Qualifier("newsDaoImpl")
	private NewsDao newsDao;


	public boolean createNews(News news) {
		return newsDao.createNews(news);
	}

	public boolean deleteNews(News news) {
		return newsDao.deleteNews(news);
	}

	public boolean updateNews(News news) {
		return newsDao.updateNews(news);
	}
	
    public News getNewsById(Integer id){
    	return newsDao.getNewsById(id);
    }
    
	public News injectContent(News news) {
		String path = news.getPath().substring(0,news.getPath().length());
		//System.out.print(path);
		BufferedReader bf = null;
		String content = "";
		StringBuilder sb = new StringBuilder();
		try {
			bf =new BufferedReader(new InputStreamReader(new FileInputStream("/"+path), "UTF-8"));  
			while (content != null) {
				content = bf.readLine();
				if (content == null) {
					break;
				}
				sb.append(content);
			}
		} catch (IOException e) {
			e.printStackTrace();
		} finally{
			try {
				bf.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
        news.setContent(sb.toString());
		return news;
	}
	
	public List<News> getNewsByPage(int pageNo,int pageNum){
		List<Object> newsObj=newsDao.getNewsByPage(pageNo, pageNum);
		List<News> news=new ArrayList<News>();
		for(Object o:newsObj){
			news.add((News)o);
		}
		return news;
	}
	public void setEditorId(News news,Integer eid){
		news.setEditorId(eid);
		updateNews(news);
	}
    
	public void pushNews(News news){
		news.setIsPush(1);
		updateNews(news);
	}
		
}
