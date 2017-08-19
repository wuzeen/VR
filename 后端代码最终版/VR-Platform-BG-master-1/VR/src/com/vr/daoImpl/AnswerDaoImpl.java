package com.vr.daoImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.vr.dao.AnswerDao;
import com.vr.dao.QuestionDao;
import com.vr.dao.UserDao;
import com.vr.domain.Answer;
import com.vr.domain.Question;
import com.vr.util.HibernateUtils;
import com.vr.util.request.AnswerRequest;
@Repository
@Qualifier("answerDaoImpl")
public class AnswerDaoImpl extends HibernateUtils implements AnswerDao{
	@Autowired
	@Qualifier("questionDaoImpl")
	private QuestionDao questiondao;
	@Autowired
	@Qualifier("userDaoImpl")
	private UserDao userDao;
	@Override
	public boolean updateAnswer(Answer Answer) {
		// TODO Auto-generated method stub
		return update(Answer);
	}

	@Override
	public List<Object> getAnswers(Question question) {
		// TODO Auto-generated method stub
		String hql="from Answer a where a.question=?";
		return findByHqlGetList(hql, new Object[]{question});
	}

	@Override
	public boolean deleteByQuestion(Question question) {
		// TODO Auto-generated method stub
		String hql="from Answer a where a.question=?";
		List<Object>list= findByHqlGetList(hql, new Object[]{question});
		for(Object object:list)
		{
			delete(object);
		}
		return true;
	}

	@Override
	public boolean saveAnswers(List<AnswerRequest> answers) {
		// TODO Auto-generated method stub
		for(AnswerRequest answerque:answers)
		{
			Answer answer=new Answer();
			answer.setAnswer(answerque.getAnswer());
			answer.setQuestion(questiondao.getQuestion(answerque.getQuestion()));
			answer.setUser(userDao.getUserById(Integer.parseInt(answerque.getUser())));
			answer.setProductname(answerque.getProductname());
			answer.setProducttype(answerque.getProducttype());
			save(answer);
		}
		
		return true;
	}

}
