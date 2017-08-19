package com.vr.dao;


import java.io.File;
import java.io.IOException;
import java.util.List;

import com.vr.domain.Question;

public interface QuestionDao {
	public boolean addQuestion(Question question);
	public Question getQuestion(String question);
	public boolean deleteAllQuestion();

	public void updateQuestion(File file) throws IOException;

	public List<Question> getQuestions();
}
