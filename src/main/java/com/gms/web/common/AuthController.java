package com.gms.web.common;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/auth")
public class AuthController {
	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
	@RequestMapping("/login_view")
	public String goLogin(){
		logger.info("Welcome Login 진입! {}.");
		return "public:common/login.tiles";
	}
	@RequestMapping("/login")
	public String login() {
		logger.info("Welcome HOME 진입! {}.");
		return "auth:common/main.tiles";
	}
}
