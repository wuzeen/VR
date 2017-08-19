package com.vr.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.vr.domain.News;
import com.vr.service.NewsService;

@Controller
public class NewsController {
	@Autowired
	@Qualifier("newsServiceImpl")
	private NewsService newsService;

	public NewsService getNewsService() {
		return newsService;
	}

	public void setNewsService(NewsService newsService) {
		this.newsService = newsService;
	}

	@ResponseBody
	@RequestMapping(value = "/news/{nid}")
	public News getNews(@PathVariable Integer nid) {
		System.out.print(nid);
		News news = newsService.getNewsById(nid);
		System.out.print(news == null);
		if (news != null) {
			newsService.injectContent(news);
		}
		return news;
	}

	@ResponseBody
	@RequestMapping(value = "/news_list/{page}")
	public List<News> getNewsByPage(@PathVariable Integer page) {
		System.out.print(page);
		return newsService.getNewsByPage(page, 10);
	}

	@ResponseBody
	@RequestMapping(value = "news/upvote/{nid}")
	public String upvoteNews(@PathVariable Integer nid) {
		try {
			News news = newsService.getNewsById(nid);
			Integer upvote = news.getUpvote();
			if (upvote == null) {
				upvote = 1;
			} else {
				upvote += 1;
			}
			news.setUpvote(upvote);
			newsService.updateNews(news);
			return "success";
		} catch (Exception e) {
			e.printStackTrace();
			return "fail";
		}
    }
	
	@ResponseBody
	@RequestMapping(value="news/downvote/{nid}")
	public String downvoteNews(@PathVariable Integer nid){
		try {
			News news = newsService.getNewsById(nid);
			Integer downvote = news.getDownvote();
			if (downvote == null) {
				downvote = 1;
			} else {
				downvote += 1;
			}
			news.setUpvote(downvote);
			newsService.updateNews(news);
			return "success";
		} catch (Exception e) {
			e.printStackTrace();
			return "fail";
		}
	}
}
