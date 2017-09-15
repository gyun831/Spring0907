package com.gms.web.member;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.command.CommandDTO;
import com.gms.web.complex.PathFactory;
import com.gms.web.grade.MajorDTO;
import com.gms.web.proxy.BlockHandler;
import com.gms.web.proxy.PageHandler;
import com.gms.web.proxy.PageProxy;



@Controller
@RequestMapping({"/member","/student"})
@SessionAttributes("student")
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@Autowired MemberService service;
	@Autowired CommandDTO cmd;
	@Autowired MemberDTO member;
	@Autowired MajorDTO major;
	@Autowired BlockHandler blockHandler;
	@Autowired PageHandler pageHandler;
	@Autowired PageProxy pxy;
	
	@RequestMapping(value="/member_add",method=RequestMethod.POST)
	public String addStudent(@ModelAttribute MemberDTO member,@RequestParam("subject") List<String> list) {
		logger.info("등록 ID: {}",member.getId());
		logger.info("등록 이름: {}",member.getName());
		logger.info("등록 비번: {}",member.getPassword());
		logger.info("등록 학과: {}",member.getMajorId());
		logger.info("등록 과목:"+list);
		Map<String,Object> paramMap=new HashMap<>();
		paramMap.put("member", member);
		List<MajorDTO> paramList=new ArrayList<>();
		MajorDTO mj=null;
		for(String m:list) {
			mj=new MajorDTO();
			mj.setId(member.getId());
			mj.setMajorId(String.valueOf((int)(Math.random()*10000+1)));
			mj.setSubjId(m);
			mj.setTitle(member.getMajorId());
			paramList.add(mj);
		}
		paramMap.put("list", paramList);
		service.addMember(paramMap);
		
		return "";
	}
	@RequestMapping("/member_list/{pageNumber}")
	@SuppressWarnings("unchecked")
	public String memlist(Model model,@PathVariable("pageNumber") String pageNumber) {
		logger.info("memberList {}","진입");
		logger.info("pageNumber"+pageNumber);
		pxy.setPageSize(5);
		pxy.setBlockSize(5);
		pxy.setPageNumber(Integer.parseInt(pageNumber));
		int count=Integer.parseInt(service.count());
		pxy.setTheNumberOfRows(count);
		int[] result=new int[6];
		int theNumberOfPages=0,startPage=0,endPage=0;
		theNumberOfPages=(pxy.getTheNumberOfRows() % pxy.getPageSize()==0)?
							pxy.getTheNumberOfRows()/pxy.getPageSize():pxy.getTheNumberOfRows()/pxy.getPageSize()+1;
		startPage=pxy.getPageNumber()-((pxy.getPageNumber()-1) % pxy.getBlockSize());
		endPage=(startPage + pxy.getBlockSize()-1 <= theNumberOfPages)?
				startPage+pxy.getBlockSize()-1:theNumberOfPages;
		result[0]=pxy.getPageNumber();
		result[1]=theNumberOfPages;
		result[2]=startPage;
		result[3]=endPage;
		result[4]=(startPage-(theNumberOfPages/pxy.getBlockSize())>0)?1:0;
		result[5]=startPage+pxy.getBlockSize();
		if(pxy.getPageNumber()<=pxy.getTheNumberOfRows()/pxy.getPageSize()+1) {
			if(pxy.getPageNumber()==1) {
				cmd.setStartRow("1");
				cmd.setEndRow(String.valueOf(pxy.getPageSize()));
			}else {
				cmd.setStartRow(String.valueOf((pxy.getPageNumber()-1) * pxy.getPageSize()+1));
				cmd.setEndRow(String.valueOf(pxy.getPageNumber()*pxy.getPageSize()));
			}
		}
		List<StudentDTO> list=(List<StudentDTO>) service.list(cmd);
		pxy.execute(model, result, list);
		return "auth:member/member_list.tiles";
	}
	@RequestMapping("/member_search/{search}")
	public String memSearch(@PathVariable String search,Model model){
		cmd.setSearch(search);
		List<?> list = service.findByName(cmd);
		model.addAttribute("list",list);
		return "auth:member/member_list.tiles";
	}
	@RequestMapping("/member_delete/{id}")
	public String memDelete(@PathVariable String id) {
		logger.info("id :"+id);
		cmd.setSearch(id);
		service.remove(cmd);
		return "redirect:/member/member_list/1";
	}
	@RequestMapping("/member_detail/{id}")
	public String memDetail(@PathVariable String id,Model model) {
		logger.info("id:"+id);
		cmd.setSearch(id);
		model.addAttribute("student",service.findById(cmd));
		return "auth:member/member_detail.tiles";
	}
	@RequestMapping("/member_update")
	public String updateStudent(@ModelAttribute() MemberDTO stu) {
		logger.info("member update{}","enterd");
		service.modify(stu);
		return "redirect:/member/member_detail/"+stu.getId();
	}
}
