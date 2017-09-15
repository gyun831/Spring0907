package com.gms.web.board;

import java.util.List;

import org.springframework.stereotype.Component;


@Component
public interface ArticleService {
	public String write(BoardDTO bean);
	public List<BoardDTO> list();
	public List<BoardDTO> findById(String id);
	public BoardDTO findSeq(String seq);
	public String count();
	public String modify(BoardDTO bean);
	public String remove(String seq);
	

}
