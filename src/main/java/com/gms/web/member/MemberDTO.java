package com.gms.web.member;



import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Lazy @Component @Data
public class MemberDTO {
	private String id, password, ssn, name, regdate,email,majorId,subject,phone,profile,gender;
	public String toString() {
		return "";
	}

}