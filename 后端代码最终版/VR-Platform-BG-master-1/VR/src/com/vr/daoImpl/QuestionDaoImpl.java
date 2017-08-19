package com.vr.daoImpl;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.vr.dao.QuestionDao;
import com.vr.domain.Question;
import com.vr.util.HibernateUtils;
@Repository
@Qualifier("questionDaoImpl")
public class QuestionDaoImpl extends HibernateUtils implements QuestionDao {

	@Override
	public boolean addQuestion(Question question) {
		// TODO Auto-generated method stub
		return save(question);
	}

	@Override
	public boolean deleteAllQuestion() {
		// TODO Auto-generated method stub
		deleteall("Answer");
		return deleteall("Question");
	}

	@Override
	public void updateQuestion(File file) throws IOException {
		// TODO Auto-generated method stub
		deleteAllQuestion();
		int id=1;
		InputStreamReader reader =new InputStreamReader(new FileInputStream(file));
		BufferedReader br = new BufferedReader(reader); // 建立一个对象，它把文件内容转成计算机能读懂的语言  
        String line = "";  
        line = br.readLine();  
        while (line != null) {  
        	System.out.println(line);
        	String[] contents=line.split("/");
        	System.out.println(contents.length);
        	System.out.println(contents[0]);
            Question question=new Question();
            question.setQuestion(contents[0]);
            question.setQuestiontype(contents[1]);
            question.setId(id);
            id++;
            addQuestion(question);
            line = br.readLine(); // 一次读入一行数据  
        }  
		
	}

	@Override
	public List<Question> getQuestions() {
		// TODO Auto-generated method stub
		String hql="from Question";
		List<Object> o=findByHqlGetList(hql, new Object[]{});
		List<Question> questions=new ArrayList<>();
		for(Object object:o)
		{
			questions.add((Question)object);
		}
		return questions;
	}

	@Override
	public Question getQuestion(String question) {
		// TODO Auto-generated method stub
		String hql="from Question q where q.question=?";
		return (Question)findByHql(hql, new Object[]{question});
	}

	

}
