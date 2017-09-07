package com.gms.web.board;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/board")
public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
	@RequestMapping("/add")
	public String boardadd() {
		logger.info("Welcome Board ADD 진입!");
		return "auth:board/board_add.tiles";
	}
	@RequestMapping("/list")
	public String boardlist() {
		logger.info("Welcome Board LIST 진입!");
		return "auth:board/board_list.tiles";
	}
	@RequestMapping("/update")
	public String boardupdate() {
		logger.info("Welcome Board Update 진입!");
		return "auth:board/board_update.tiles";
	}
	@RequestMapping("/detail")
	public String boarddetail() {
		logger.info("Welcome Board Detail 진입!");
		return "auth:board/board_detail.tiles";
	}

}
