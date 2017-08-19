package com.vr.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.vr.dao.AllInOnePCDao;
import com.vr.dao.AnswerDao;
import com.vr.dao.QuestionDao;
import com.vr.domain.Answer;
import com.vr.domain.Question;
import com.vr.service.AnswerService;
import com.vr.util.ConvertUtil;
import com.vr.util.request.Statisticalanswer;

@Service
@Qualifier("answerServiceImpl")
public class AnswerServiceImpl implements AnswerService{
	@Autowired
	@Qualifier("answerDaoImpl")
	private AnswerDao answerDao;
	@Autowired
	@Qualifier("questionDaoImpl")
	private QuestionDao questionDao;
	public AnswerDao getAnswerDao() {
		return answerDao;
	}
	public void setAnswerDao(AnswerDao answerDao) {
		this.answerDao = answerDao;
	}
	public QuestionDao getQuestionDao() {
		return questionDao;
	}
	public void setQuestionDao(QuestionDao questionDao) {
		this.questionDao = questionDao;
	}
	@Override
	public List<Statisticalanswer> getStatisticalData() {
		// TODO Auto-generated method stub
		List<Statisticalanswer>statisticalanswers=new ArrayList<>();
		List<Question>list=questionDao.getQuestions();
		for(Question q:list)
		{
			if(q.getQuestiontype().equals("essay"))
				continue;
			int one=0;
			int two=0;
			List<Object> answers=answerDao.getAnswers(q);
			int size=answers.size();
			System.out.println("测试一下："+size);
			for(Object a:answers)
			{
				Answer answer=(Answer)a;
				if(answer.getAnswer().equals("1"))
				{
					one++;
				}
				if(answer.getAnswer().equals("2"))
				{
					two++;
				}						
			}
			Statisticalanswer statisticalanswer=new Statisticalanswer();
			statisticalanswer.setQuestion(q.getQuestion());
			statisticalanswer.setOnePercentage(ConvertUtil.DoubletoPercentage((double)one/size));
			statisticalanswer.setTwoPercentage(ConvertUtil.DoubletoPercentage((double)two/size));
			statisticalanswers.add(statisticalanswer);
		}
		return statisticalanswers;
	}
	
	
	
	
	
}
