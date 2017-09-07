/**
 * Member javaScript
 */
var app=app || {};

app.path=(function(){
	var init=function(ctx){
		app.session.init(ctx);
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		location.href=ctx()+"/auth/login_view";
	};
	var setContentView=function(){
		
	};
	var ctx=function(){
		return app.session.getPath('ctx');
	};
	var js=function(){
		return app.session.getPath('js');
	};
	var img=function(){
		return app.session.getPath('img');
	};
	var css=function(){
		return app.session.getPath('css');
	};

	return{
		init : init,
		ctx : ctx,
		js : js,
		img : img,
		css : css
	};
})();
app.session=(function(){
	var init=function(ctx){
		sessionStorage.setItem('ctx',ctx);
		sessionStorage.setItem('js',ctx+'/resourses/js');
		sessionStorage.setItem('img',ctx+'/resourses/img');
		sessionStorage.setItem('css',ctx+'/resourses/css');
	};
	var getPath=function(x){
		return sessionStorage.getItem(x);
	};
	return {
		init : init,
		getPath : getPath
	};
})();
app.main=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		$('.list-group a').eq(0).on('click',function(){
			app.controller.moveTo('member','add');
		 })
		 $('.list-group a').eq(1).on('click',function(){
			 app.controller.list('member','member_list','1');
		 })
		 $('.list-group a').eq(2).on('click',function(){
			 app.controller.detailStudent(prompt('조회 ID'));
		 })
		 $('.list-group a').eq(3).on('click',function(){
			 app.controller.moveTo('member','update');
		 })
		 $('.list-group a').eq(4).on('click',function(){
			 app.controller.gms_del('이름');
		 })
		 $('.list-group a').eq(5).on('click',function(){
			 app.controller.moveTo('grade','add');
		 })
		 $('.list-group a').eq(6).on('click',function(){
			 app.controller.list('grade','list','1');
		 })
		 $('.list-group a').eq(7).on('click',function(){
			 app.controller.detailStudent(prompt('조회 성적'));
		 })
		 $('.list-group a').eq(8).on('click',function(){
			 app.controller.moveTo('grade','update');
		 })
		 $('.list-group a').eq(9).on('click',function(){
			 app.controller.gms_del('성적');
		 })
		 $('.list-group a').eq(10).on('click',function(){
			 app.controller.moveTo('board','add');
		 })
		 $('.list-group a').eq(11).on('click',function(){
			 app.controller.list('board','list','1');
		 })
		 $('.list-group a').eq(12).on('click',function(){
			 app.controller.detailStudent(prompt('조회 ID'));
		 })
		 $('.list-group a').eq(13).on('click',function(){
			 app.controller.moveTo('board','update');
		 })
		 $('.list-group a').eq(14).on('click',function(){
			 app.controller.gms_del('게시글');
		 })	 
	};
	var setContentView=function(){
		 var $u1 = $("#main_ul_stu");
		 var $u2 = $("#main_ul_grade");
		 var $u3 = $("#main_ul_board");
		 $u1.addClass("list-group");
		 $u2.addClass("list-group");
		 $u3.addClass("list-group");
		 $('.list-group').children().addClass("list-group-item");
	};
	return{
		init : init
	};
})();
app.auth=(function(){
	var init=function(){
		$('#login_btn').on('click',function(){
			if($('#input_id').val()==""){
				alert('아이디 없음');
				return false;
			};
			if($('#input_pass').val()==""){
				alert('비밀번호 다름');
				return false;
			};
			$('#login_box').attr('action',app.path.ctx()+"/auth/login");
			$('#login_box').attr('method','post');
			
			return true;
		});	
	};
	return {
		init : init
	};
})();
app.navbar=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		 $('.dropdown-menu a').eq(0).on('click',function(){
			 app.controller.moveTo('member','add');
		 })
		 $('.dropdown-menu a').eq(1).on('click',function(){
			 app.controller.list('member','list','1');
		 })
		 $('.dropdown-menu a').eq(2).on('click',function(){
			 app.controller.detailStudent(prompt('조회 ID'));
		 })
		 $('.dropdown-menu a').eq(3).on('click',function(){
			 app.controller.moveTo('member','update');
		 })
		 $('.dropdown-menu a').eq(4).on('click',function(){
			 app.controller.gms_del('이름');
		 })
		 $('.dropdown-menu a').eq(5).on('click',function(){
			 app.controller.moveTo('grade','add');
		 })
		 $('.dropdown-menu a').eq(6).on('click',function(){
			 app.controller.list('grade','list','1');
		 })
		 $('.dropdown-menu a').eq(7).on('click',function(){
			 app.controller.detailStudent(prompt('조회 성적'));
		 })
		 $('.dropdown-menu a').eq(8).on('click',function(){
			 app.controller.moveTo('grade','update');
		 })
		 $('.dropdown-menu a').eq(9).on('click',function(){
			 app.controller.gms_del('성적');
		 })
		 $('.dropdown-menu a').eq(10).on('click',function(){
			 app.controller.moveTo('board','add');
		 })
		 $('.dropdown-menu a').eq(11).on('click',function(){
			 app.controller.list('board','list','1');
		 })
		 $('.dropdown-menu a').eq(12).on('click',function(){
			 app.controller.detailStudent(prompt('조회 ID'));
		 })
		 $('.dropdown-menu a').eq(13).on('click',function(){
			 app.controller.moveTo('board','update');
		 })
		 $('.dropdown-menu a').eq(14).on('click',function(){
			 app.controller.gms_del('게시글');
		 })	 
	};
	var setContentView=function(){
		 var $u1 = $("#navbar_ul_stu");
		 var $u2 = $("#navbar_ul_grade");
		 var $u3 = $("#navbar_ul_board");
		 $u1.addClass("dropdown-menu");
		 $u2.addClass("dropdown-menu");
		 $u3.addClass("dropdown-menu");
	};
	return{
		init : init
	};
})();
app.member=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		$('#updateBtn').on('click',function(){
			var id = $("#id").val();
			sessionStorage.setItem('id',id);
			sessionStorage.setItem('phone',$("#phone").text());
			sessionStorage.setItem('email',$("#email").text());
			sessionStorage.setItem('title',$("#title").text());
			app.controller.moveTo('member','member_update');
		})
		setContentView();
	};
	return{
		init : init,
	};
})();
app.grade=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
	};
	var setContentView=function(){
		
	};
	return {
		init : init
	};
})();
app.board=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
	};
	var setContentView=function(){
		
	};
	return {
		init : init
	};
})();
app.memberUpdate=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
	};
	var setContentView=function(){
		var id=sessionStorage.getItem('id');
		var phone=sessionStorage.getItem('phone');
		var email=sessionStorage.getItem('email');
		var password=$('#confirm').val();
		$('#phone').attr('placeholder',phone);
		$('#email').attr('placeholder',email);
		$('#confirmBtn').on('click',function(){
			alert('수정할 아이디 :'+id);
			app.controller.updateStudent(id,$('#email').val());
		});
	};
	return{
		init : init
	};
})();

app.controller=(function(){
	var init=function(){
	};
	var moveTo=function(dir,page){
		location.href=app.path.ctx()+'/'+dir+"/"+page;
	};
	var list=function(dir,page,pageNumber){
		location.href=app.path.ctx()+'/'+dir+"/"+page+"&pageNumber="+pageNumber;
	};
	var log_out=function(dir,page){
		 location.href=app.path.ctx()+'/'+dir+".do?action=logout&page="+page;
	};
	var gms_del=function(name){
		var person = prompt("삭제할"+name,"입력");
	};
	var updateStudent=function(id,email){
		location.href=app.path.ctx()+"/member.do?action=update&page=member_update&id="+id+"&email="+email;
	};
	var deleteStudent=function(id){
		location.href=app.path.ctx()+"/member.do?action=delete&page=member_delete&id="+id;
	};
	var detailStudent=function(id){
		alert('click');
		location.href=app.path.ctx()+"/member/detail";
	};
	var searchStudent=function(){
		var search_id=$("#search_id").val();
		location.href=app.path.ctx()+"/member.do?action=search&page=member_list&search_id="+search_id;
	};
	return{
		init : init,
		moveTo : moveTo,
		list : list,
		log_out : log_out,
		gms_del : gms_del,
		updateStudent : updateStudent,
		deleteStudent : deleteStudent,
		detailStudent : detailStudent,
		searchStudent : searchStudent
	};
})();
