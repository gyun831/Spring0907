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
			app.controller.moveTo('member','member_add');
		 })
		 $('.list-group a').eq(1).on('click',function(){
			 app.member.list('1');
		 })
		 $('.list-group a').eq(2).on('click',function(){
			 app.controller.detailStudent(prompt('조회 ID'));
		 })
		 $('.list-group a').eq(3).on('click',function(){
			 app.controller.moveTo('member','member_update');
		 })
		 $('.list-group a').eq(4).on('click',function(){
			 app.controller.gms_del('이름');
		 })
		 $('.list-group a').eq(5).on('click',function(){
			 app.controller.moveTo('grade','grade_add');
		 })
		 $('.list-group a').eq(6).on('click',function(){
			 app.controller.moveTo('grade','grade_list');
		 })
		 $('.list-group a').eq(7).on('click',function(){
			 app.controller.detailStudent(prompt('조회 성적'));
		 })
		 $('.list-group a').eq(8).on('click',function(){
			 app.controller.moveTo('grade','grade_update');
		 })
		 $('.list-group a').eq(9).on('click',function(){
			 app.controller.gms_del('성적');
		 })
		 $('.list-group a').eq(10).on('click',function(){
			 app.controller.moveTo('board','board_add');
		 })
		 $('.list-group a').eq(11).on('click',function(){
			 app.controller.moveTo('board','board_list');
		 })
		 $('.list-group a').eq(12).on('click',function(){
			 app.controller.detailBoard(prompt('조회 ID'));
		 })
		 $('.list-group a').eq(13).on('click',function(){
			 app.controller.moveTo('board','board_update');
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
		onCreate();
	};
	var onCreate=function(){
		$('#login_btn').on('click',function(){
			if($('#input_id').val()==""){
				alert('아이디 없음');
				return false;
			}
			if($('#input_pass').val()==""){
				alert('비밀번호 다름');
				return false;
			}
			$('#login_box').attr('action',app.path.ctx()+"/auth/login");
			$('#login_box').attr('method','post');
			return true;

	});
	};
	
	return{
		init:init
		};

})();
app.navbar=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		 $('.dropdown-menu a').eq(0).on('click',function(){
			 app.controller.moveTo('member','member_add');
		 })
		 $('.dropdown-menu a').eq(1).on('click',function(){
			 app.member.list('1');
		 })
		 $('.dropdown-menu a').eq(2).on('click',function(){
			 app.controller.detailStudent(prompt('조회 ID'));
		 })
		 $('.dropdown-menu a').eq(3).on('click',function(){
			 app.controller.moveTo('member','member_update');
		 })
		 $('.dropdown-menu a').eq(4).on('click',function(){
			 app.controller.gms_del('이름');
		 })
		 $('.dropdown-menu a').eq(5).on('click',function(){
			 app.controller.moveTo('grade','grade_add');
		 })
		 $('.dropdown-menu a').eq(6).on('click',function(){
			 app.controller.moveTo('grade','grade_list');
		 })
		 $('.dropdown-menu a').eq(7).on('click',function(){
			 app.controller.detailGrade(prompt('조회 성적'));
		 })
		 $('.dropdown-menu a').eq(8).on('click',function(){
			 app.controller.moveTo('grade','grade_update');
		 })
		 $('.dropdown-menu a').eq(9).on('click',function(){
			 app.controller.gms_del('성적');
		 })
		 $('.dropdown-menu a').eq(10).on('click',function(){
			 app.controller.moveTo('board','board_add');
		 })
		 $('.dropdown-menu a').eq(11).on('click',function(){
			 app.controller.moveTo('board','board_list');
		 })
		 $('.dropdown-menu a').eq(12).on('click',function(){
			 app.controller.detailBoard(prompt('조회 ID'));
		 })
		 $('.dropdown-menu a').eq(13).on('click',function(){
			 app.controller.moveTo('board','board_update');
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
		add();
	};
	var onCreate=function(){
		$('#updateBtn').on('click',function(){
			var id = $("#id").val();
/*			sessionStorage.setItem('id',id);
			sessionStorage.setItem('phone',$("#phone").text());
			sessionStorage.setItem('email',$("#email").text());
			sessionStorage.setItem('title',$("#title").text());*/
			
			app.controller.moveTo('member','member_update');
		})
	};
	var	setContentView=function(){};
	var list=function(pageNumber){
		location.href=app.path.ctx()+"/member/member_list/"+pageNumber;
	};
	var add=function(){
		$('#join_form').attr('action',app.path.ctx()+"/member/member_add");
		$('#join_form').attr('method','post');
		alert('join!!');
	};
	return{
		init : init,
		list : list
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
		$('#update_box').attr('action',app.path.ctx()+"/member/member_update");
		$('#update_box').attr('method','post');
		return true;

	};
	return{
		init : init
	};
})();

app.controller=(function(){
	var init=function(){
	};
	var moveTo=function(dir,page){
		location.href=app.path.ctx()+"/common/path/"+dir+"/"+page;
	};
	var list=function(dir,page){
		location.href=app.path.ctx()+'/'+dir+"/"+page+"&pageNumber="+pageNumber;
	};
	var log_out=function(dir,page){
		 location.href=app.path.ctx()+'/'+dir+".do?action=logout&page="+page;
	};
	var gms_del=function(name){
		var person = prompt("삭제할"+name,"입력");
	};
	var updateStudent=function(){
		alert('수정');
		location.href=app.path.ctx()+"/member/member_update/";
	};
	var deleteStudent=function(id){
		alert(id);
		location.href=app.path.ctx()+"/member/member_delete/"+id;
	};
	var detailStudent=function(id){
		alert(id);
		location.href=app.path.ctx()+"/member/member_detail/"+id;
	};
	var detailGrade=function(id){
		alert('click');
		location.href=app.path.ctx()+"/grade/grade_detail";
	};	
	var detailBoard=function(id){
		alert('click');
		location.href=app.path.ctx()+"/board/board_detail";
	};
	var searchStudent=function(){
		var search=$("#search").val();
		location.href=app.path.ctx()+"/member/member_search/"+search;
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
