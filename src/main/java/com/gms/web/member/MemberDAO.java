package com.gms.web.member;

import java.util.List;
import java.util.Map;

import com.gms.web.command.CommandDTO;


public interface MemberDAO {
	public String insert(Map<?,?> map);
	public List<?> selectAll(CommandDTO cmd);
	public List<?> selectByName(CommandDTO cmd);
	public StudentDTO selectById(CommandDTO cmd);
	public String count(CommandDTO cmd);
	public String update(StudentDTO student);
	public String delete(CommandDTO cmd);
}