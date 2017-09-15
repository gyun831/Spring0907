package com.gms.web.proxy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.gms.web.command.CommandDTO;
@Component
public class PageHandler {	
	@Autowired CommandDTO cmd;
	public CommandDTO attr(PageProxy pxy){
		System.out.println(pxy.getTheNumberOfRows());
		System.out.println(pxy.getPageNumber());
		System.out.println(pxy.getPageSize());
		if(pxy.getPageNumber()<=pxy.getTheNumberOfRows()/pxy.getPageSize()+1){
			if(pxy.getPageNumber()==1){
				cmd.setStartRow("1");
				cmd.setEndRow(String.valueOf(pxy.getPageSize()));
			}else{
				cmd.setStartRow(String.valueOf((pxy.getPageNumber()-1) * pxy.getPageSize()+1));
				cmd.setEndRow(String.valueOf(pxy.getPageNumber() * pxy.getPageSize()));
			}
		}
		return cmd;
	}

}
