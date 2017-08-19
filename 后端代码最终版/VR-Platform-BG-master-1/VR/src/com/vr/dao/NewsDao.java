package com.vr.dao;

import java.util.List;

import com.vr.domain.News;

public interface NewsDao {
      public boolean createNews(News news);
      public boolean deleteNews(News news);
      public boolean updateNews(News news);
      public News getNewsById(Integer id);
      //public List<News> getRecent10News();
      public List<Object> getNewsByPage(int pageNo, int pageNum);
}
