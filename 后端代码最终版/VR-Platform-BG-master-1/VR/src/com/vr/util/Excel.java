package com.vr.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.*;
import org.junit.Test;

public class Excel {

	/**
	 * 读取excel数据
	 * 
	 * @param path
	 */
	public List<List<Map<String, String>>> readExcelToObj(File file) throws IOException {
		FileInputStream filein = new FileInputStream(file);
		Workbook wb0 = new XSSFWorkbook(filein);
		Sheet sht0 = wb0.getSheetAt(0);
		Map<Integer, String> PCheaders = new HashMap<>();
		Map<Integer, String> Oneheaders = new HashMap<>();
		Map<Integer, String> Boxheaders = new HashMap<>();
		List<Map<String, String>> PClist = new ArrayList<>();
		List<Map<String, String>> Onelist = new ArrayList<>();
		List<Map<String, String>> Boxlist = new ArrayList<>();
		List<List<Map<String, String>>> list = new ArrayList<>();
		boolean PCfalg = false;
		boolean Oneflag = false;
		boolean Boxflag = false;
		for (Row r : sht0) {
			System.out.println(r.getRowNum());
			if (r.getCell(0).toString().equals("PC头显")) {
				for (int i = 0; i < r.getLastCellNum(); i++) {
					if (r.getCell(i).getCellType() != XSSFCell.CELL_TYPE_BLANK)
						PCheaders.put(r.getCell(i).getColumnIndex(), r.getCell(i).toString());
				}
				PCfalg = true;
				Oneflag = false;
				Boxflag = false;
				continue;
			}
			if (r.getCell(0).toString().equals("一体机")) {
				for (int i = 0; i < r.getLastCellNum(); i++) {
					if (r.getCell(i).getCellType() != XSSFCell.CELL_TYPE_BLANK)
						Oneheaders.put(r.getCell(i).getColumnIndex(), r.getCell(i).toString());
				}
				PCfalg = false;
				Oneflag = true;
				Boxflag = false;
				continue;
			}
			if (r.getCell(0).toString().equals("手机盒子")) {
				for (int i = 0; i < r.getLastCellNum(); i++) {
					if (r.getCell(i).getCellType() != XSSFCell.CELL_TYPE_BLANK)
						Boxheaders.put(r.getCell(i).getColumnIndex(), r.getCell(i).toString());
				}
				PCfalg = false;
				Oneflag = false;
				Boxflag = true;
				continue;
			}
			if (PCfalg) {
				Map<String, String> PCcontent = new HashMap<>();
				for (int i = 0; i < r.getLastCellNum(); i++) {

					if (r.getCell(i).getCellType() != XSSFCell.CELL_TYPE_BLANK) {
					
						PCcontent.put(PCheaders.get(r.getCell(i).getColumnIndex()), r.getCell(i).toString());
					}

				}
				PClist.add(PCcontent);

			}

			if (Oneflag) {
				Map<String, String> Onecontent = new HashMap<>();
				for (int i = 0; i < r.getLastCellNum(); i++) {
					if (r.getCell(i).getCellType() != XSSFCell.CELL_TYPE_BLANK) {
						Onecontent.put(Oneheaders.get(r.getCell(i).getColumnIndex()), r.getCell(i).toString());
					}

				}
				Onelist.add(Onecontent);
		

			}
			if (Boxflag) {
				Map<String, String> Boxcontent = new HashMap<>();
				for (int i = 0; i < r.getLastCellNum(); i++) {
					if (r.getCell(i).getCellType() != XSSFCell.CELL_TYPE_BLANK) {
						Boxcontent.put(Boxheaders.get(r.getCell(i).getColumnIndex()), r.getCell(i).toString());
					}

				}
				Boxlist.add(Boxcontent);
			
			}
		}
		list.add(0, PClist);
		list.add(1, Onelist);
		list.add(2, Boxlist);
		return list;
	}

}
