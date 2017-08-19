package com.vr.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.annotation.JsonView;
import com.vr.dao.AnswerDao;
import com.vr.dao.QuestionDao;
import com.vr.domain.AllInOnePc;
import com.vr.domain.Answer;
import com.vr.domain.MobileBox;
import com.vr.domain.PcheadSet;
import com.vr.domain.Question;
import com.vr.service.AnswerService;
import com.vr.service.PCHeadSetService;
import com.vr.util.ContextUtil;
import com.vr.util.HibernateUtils;
import com.vr.util.request.AnswerRequest;
import com.vr.util.request.Statisticalanswer;
import com.vr.util.response.Data;
import com.vr.view.QuestionView;

@Controller
public class QuestionController extends HibernateUtils{
	@Autowired
	@Qualifier("questionDaoImpl")
	private QuestionDao dao;
	@Autowired
	@Qualifier("answerDaoImpl")
	private AnswerDao answerdao;
	@Autowired
	@Qualifier("answerServiceImpl")
	private AnswerService answerService;

	// ok
	@ResponseBody
	@RequestMapping("/Question")
	@JsonView(QuestionView.Tag.class)
	public List<Question> getQuestion() {
		return dao.getQuestions();
		 
	}

	// ok
	@RequestMapping("/Answer")
	public void saveAnswer(@RequestBody List<AnswerRequest> answers) {
		System.out.println("hhhh"+answers.get(0).getQuestion());
		System.out.println(answers.size());
		answerdao.saveAnswers(answers);

	}

	@ResponseBody
	@RequestMapping("/Answer/statistic")
	public List<Statisticalanswer> getAnswers() {
		return answerService.getStatisticalData();
	}
	
	@ResponseBody
	@RequestMapping("/Question/type")
	public List<Object>getName()
	{
		HttpServletRequest request = ContextUtil.getRequest();
		String name = request.getParameter("type");
		String hql="from "+name;
		List<Object>list=findByHqlGetList(hql, new Object[]{});
		List<Object>real=new ArrayList<>();
		if(name.equals("AllInOnePc"))
		{
			for(Object l:list)
			{
				AllInOnePc allInOnePc=(AllInOnePc)l;
				Object o=allInOnePc.getSalesmodel();
				real.add(o);
			}		
		}
		if(name.equals("MobileBox"))
		{
			for(Object l:list)
			{
				MobileBox mobileBox=(MobileBox)l;
				Object o=mobileBox.getSalesmodel();
				real.add(o);
			}		
		}
		if(name.equals("PcheadSet"))
		{
			for(Object l:list)
			{
				PcheadSet pcheadSet=(PcheadSet)l;
				Object o=pcheadSet.getSalesmodel();
				real.add(o);
			}		
		}		
		return real;
	}

}
