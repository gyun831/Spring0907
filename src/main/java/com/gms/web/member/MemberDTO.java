package com.gms.web.member;



import lombok.Data;

@Data
public class MemberDTO {
	private String id, pw, ssn, name, regdate,email,major,subject,phone,profile,gender;

	
	public String toString() {
		return "[name=" + name + ",id=" + id + ",pw=" + pw + ",ssn=" + ssn + "]\n";
	}

}