<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>



<div id="container">
	<form id="login_box" name="login_box">
		<a href="${path.ctx}/"><img src="${path.img}/google.jpg" width="320" height="100"/></a><br>
		<span id="login_id">ID</span>
	  	<input type="text" id="input_id" name="id" value="hong"/><br> 
		<span id="login_pass">PASSWORD</span>
		<input type="password" id="input_pass" name="pass" value="1"/><br>
		<br/>
		<input type="submit" value="LOGIN" id="login_btn" />
		<input type="reset" value="CANCEL" id="cancle_btn">
		<input type="hidden" name="action" value="login">
		<input type="hidden" name="page" value="home">
	</form>
	<div style="text-align: center;width: 100%;height: 50px;"><h4 style="font-size: 20px; color: red;">${message}</h4></div>
</div>
<script>
app.auth.init();
</script>