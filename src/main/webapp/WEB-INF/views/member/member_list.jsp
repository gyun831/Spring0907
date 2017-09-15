<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
	<div id="container">
	<div class="row">
	<div class="col-lg-6" style="width:500px; margin:0 auto;">
	<div class="input-group">
	<input type="text" id="search" name="search"  placeholder="Search for.." />
	<button onclick="app.controller.searchStudent()">Go!</button>
	
	</div>
	</div>
	</div>
	<div style="height:40px;width:300px;">
		회원수 : ${count}
	</div>
	<table id="detail_tab">
		<tr>
			<th>NO.</th>
			<th>ID</th>
			<th>이름</th>
			<th>생년월일</th>
			<th>전화번호</th>
			<th>이메일</th>
			<th>수강과목</th>
			<th>등록일</th>
			<th>수정/삭제</th>
		</tr>
		<c:forEach var="i" items="${list}">
		<tr>
			<td><fmt:formatNumber value="${i.no}" pattern="."/></td>
			<td>${i.id}</td>
			<td><a onclick="app.controller.detailStudent('${i.id}')">${i.name}</a></td>
			<td>${i.ssn}</td>
			<td>${i.phone}</td>
			<td>${i.email}</td>
			<td>${i.title}</td>
			<td>${i.regdate}</td>
			<td><a onclick="app.controller.updateStudent('${i.id}')">수정</a>/<a onclick="app.controller.deleteStudent('${i.id}')">삭제</a></td>
		</tr>
		</c:forEach>
	</table>
	<nav aria-label="Page navigation" style="width:400px;margin: 0 auto">
  		<ul class="pagination">
  			<c:if test="${prevBlock gt 0 }">
  			 <li><a href="#"><span class="glyphicon glyphicon-step-backward" aria-hidden="true"></span></a></li>
   			 <li><a onclick="app.member.list('${startPage-5}')" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>
    		</li>
    		</c:if>
    		<c:forEach varStatus="i" begin="${startPage}" end="${endPage}" step="1">
    			<c:choose>
    				<c:when test="${i.index eq pageNumber}">
    				 	<li class="active"><a href="#">${i.index}</a></li> 
    				</c:when>
    				<c:otherwise>
    					<li><a onclick="app.member.list('${i.index}')" href="#">${i.index}</a></li>
    				</c:otherwise>
    			</c:choose>
			</c:forEach>
			<c:if test="${endBlock le theNumberOfPages}">
		    <li>
     		 	<a onclick="app.member.list('${startPage+5}')" aria-label="Next">
       			 <span aria-hidden="true">&raquo;</span>
      			</a>
   			 </li>
   			  <li><a href="#"><span class="glyphicon glyphicon-step-forward" aria-hidden="true"></span></a></li>
   			</c:if>
  		</ul>
	</nav>
</div>
<script>
</script>
<jsp:include page="../common/footer.jsp"/>
