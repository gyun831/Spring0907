package com.gms.web.board;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ArticleServiceImpl implements ArticleService {
	public static ArticleServiceImpl getInstance(){
		return new ArticleServiceImpl();
	}
	private ArticleServiceImpl(){
		
	}
	@Override
	public String write(BoardDTO bean) {
		return null; //(Integer.parseInt(ArticleDAOImpl.getInstance().insert(bean))==1)?"게시성공":"게시실패";
	}

	@Override
	public List<BoardDTO> list() {
		return null; // ArticleDAOImpl.getInstance().selectAll();
	}

	@Override
	public List<BoardDTO> findById(String id) {
		return null; // ArticleDAOImpl.getInstance().selectById(id);
	}

	@Override
	public BoardDTO findSeq(String seq) {
		return null; // ArticleDAOImpl.getInstance().selectBySeq(seq);
	}

	@Override
	public String count() {
		return null; // ArticleDAOImpl.getInstance().count();
	}

	@Override
	public String modify(BoardDTO bean) {
		return null; // ArticleDAOImpl.getInstance().update(bean).equals("1")?"수정성공":"수정실패";
	}

	@Override
	public String remove(String seq) {
		return null; // ArticleDAOImpl.getInstance().delete(seq).equals("1")?"삭제성공":"삭제실패";
	}

}
