package com.vr.controller;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import com.vr.dao.AllInOnePCDao;
import com.vr.dao.PCHeadSetDao;
import com.vr.dao.QuestionDao;
import com.vr.daoImpl.MobileBoxDaoImpl;
import com.vr.util.ContextUtil;
import com.vr.util.Excel;
import com.vr.util.response.Data;

@Controller
public class FileController {
	@Autowired
	@Qualifier("questionDaoImpl")
	private QuestionDao questionDao;
	@Autowired
	@Qualifier("allInOnePCDaoImpl")
	private AllInOnePCDao allInOnePCDao;
	@Autowired
	@Qualifier("mobileBoxDaoImpl")
	private MobileBoxDaoImpl mobileBoxDaoImpl;
	@Autowired
	@Qualifier("pcHeadSetDaoImpl")
	private PCHeadSetDao pcHeadSetDao;
    @ResponseBody
    @RequestMapping("/updateQuestions")
    public void  updateQuestions(@RequestParam("file") CommonsMultipartFile CMfile) throws IOException {
        System.out.println("fileName："+CMfile.getOriginalFilename());
        //通过CommonsMultipartFile的方法直接写文件（注意这个时候）
      File file=new File("Questions");
      CMfile.transferTo(file);
      questionDao.updateQuestion(file);
    }
    @ResponseBody
    @RequestMapping(value="/updateProduct",method=RequestMethod.POST)
    public void savleProduct(@RequestParam("file") CommonsMultipartFile CMfile)throws IOException{
        System.out.println("fileName："+CMfile.getOriginalFilename());
        //通过CommonsMultipartFile的方法直接写文件（注意这个时候）
      File file=new File("Products");
      CMfile.transferTo(file);
      Excel excel=new Excel();
      List<List<Map<String, String>>>list=excel.readExcelToObj(file);
      allInOnePCDao.updateAllInOnePC(list.get(1));
      pcHeadSetDao.updatePCHeadSet(list.get(0));
      mobileBoxDaoImpl.updateMobileBox(list.get(2));
    }

    
    
    
    
    
    
    
}
