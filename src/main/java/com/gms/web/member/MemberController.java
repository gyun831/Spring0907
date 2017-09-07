package com.gms.web.member;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;



@Controller
@RequestMapping("/member")
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@RequestMapping("/add")
	public String memadd() {
		logger.info("Welcome Member ADD 진입!");
		return "member/member_add";
	}
	@RequestMapping("/list")
	public String memlist() {
		logger.info("Welcome Member list 진입!");
		return "member/member_list";
	}
	@RequestMapping("/update")
	public String memupdate() {
		logger.info("Welcome Member update 진입!");
		return "member/member_update";
	}
	@RequestMapping("/detail")
	public String memdetail() {
		logger.info("Welcome Member detail 진입!");
		return "member/member_detail";
	}
}
