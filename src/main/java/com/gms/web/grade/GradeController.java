package com.gms.web.grade;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;



@Controller
@RequestMapping("/grade")
public class GradeController {
	private static final Logger logger = LoggerFactory.getLogger(GradeController.class);
	@RequestMapping("/add")
	public String boardadd() {
		logger.info("Welcome Grade ADD 진입!");
		return "grade/grade_add";
	}
	@RequestMapping("/list")
	public String boardlist() {
		logger.info("Welcome Grade LIST 진입!");
		return "grade/grade_list";
	}
	@RequestMapping("/update")
	public String boardupdate() {
		logger.info("Welcome Grade Update 진입!");
		return "grade/grade_update";
	}
	@RequestMapping("/detail")
	public String boarddetail() {
		logger.info("Welcome Grade Detail 진입!");
		return "grade/grade_detail";
	}

}
