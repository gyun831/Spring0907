package com.gms.web.member;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.ModelAttribute;

import com.gms.web.command.CommandDTO;
import com.gms.web.grade.MajorDTO;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.mapper.MemberMapper;

@Service

public class MemberServiceImpl implements MemberService {
	private static final Logger logger = LoggerFactory.getLogger(MemberServiceImpl.class);
	@Autowired MemberMapper mapper;
	@Autowired CommandDTO cmd;
	@Autowired MemberDTO member;
	@Autowired MajorDTO major;
	@Autowired GradeMapper Gmapper;
	@Override @Transactional
	public int addMember(Map<?,?>map) {
		logger.info("@service add {}","entered");
		member=(MemberDTO) map.get("member");
		@SuppressWarnings("unchecked")
		List<MajorDTO> list = (List<MajorDTO>) map.get("list");
		System.out.println("ID ######"+member.getId());
		System.out.println("LIST ######"+list);
		mapper.insert(member);
		Gmapper.insertMajor(list);

		return 0;
	}

	@Override
	public List<?> list(CommandDTO cmd) {
		return mapper.selectAll(cmd);
	}

	@Override
	public String count() {
		logger.info("count is {}","entered");
		String count=mapper.count();
		logger.info("count is {}",count);
		return count;
	}

	@Override
	public MemberDTO findById(CommandDTO cmd) {
		return mapper.selectById(cmd);
	}

	@Override
	public List<?> findByName(CommandDTO cmd) {
		return mapper.selectByName(cmd); 
	}
	@Override
	public int modify(MemberDTO member) {
		return mapper.update(member); 
	}
	@Override
	public int remove(CommandDTO cmd) {
		return mapper.delete(cmd);
	}
	@Override
	public Map<String,Object> login(CommandDTO bean) {
		Map<String,Object> map = new HashMap<>();
		MemberDTO member = mapper.selectById(cmd);
		String page="",message;
		if(member!=null) {
		if(bean.getColumn().equals(member.getPassword())){
			message="success";
			page="auth:common/main.tiles";
		}else{
			message="비밀번호가 틀립니다.";
			page="public:common/login.tiles";
		}
		}else {
			message="ID가 존재하지 않습니다.";
			page="public:common/join.tiles";
		}
		map.put("page", page);
		map.put("message", message);
		map.put("user", member);
		return map;
	}
}
