package com.gms.web.member;

import lombok.Data;

@Data
public class MajorBean {
	private String majorId,title,id,subjId;

	@Override
	public String toString() {
		return "MajorBean [majorId=" + majorId + ", title=" + title + ", id=" + id + ", subjId=" + subjId + "]";
	}

}
