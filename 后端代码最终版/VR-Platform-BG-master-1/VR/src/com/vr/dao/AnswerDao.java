package com.vr.dao;

import java.util.List;

import com.vr.domain.Answer;
import com.vr.domain.Question;
import com.vr.util.request.AnswerRequest;

public interface AnswerDao {
	 public boolean saveAnswers(List<AnswerRequest> answers);
	    public boolean deleteByQuestion(Question question);
	    public boolean updateAnswer(Answer Answer);
	    public List<Object> getAnswers(Question question);
}
