package com.gms.web.command;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.gms.web.constant.*;
import com.gms.web.member.MemberDTO;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Lazy @Component @Data
public class CommandDTO implements Commandable{

	protected String action,pageNumber,column,startRow,endRow,view,page,dir,search;
	protected MemberDTO member;

	public void setPageNumber(String pageNumber){
		this.pageNumber=(pageNumber==null)?"1":pageNumber;
	}
	public void setAction(String action){
		this.action=(action==null)?"move":action;
	}
	@Override
	public void process() {
		this.view = (dir.equals("home"))?"/WEB-INF/view/common/home2.jsp":Path.VIEW+dir+Path.SEPARATOR+page+Extension.JSP;
		System.out.println("이동 페이지: "+view);
	}
	@Override
	public String toString(){
		return "Command[DEST="+dir+"/"+page+".jsp"+",ACTION="+action+"]";
	}
}
