/* 放头部的js代码 */
//定义模块 方便导出
define(["jquery","login","register"],function($,loginInit,register){
	function Header(){
		this.createDom();
		this.createModal();
	}
	//头部的布局
	Header.template=`<nav class="navbar navbar-inverse">
						<!-- Brand and toggle get grouped for better mobile display -->
						<div class="navbar-header">
						  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						  </button>
						  <a class="navbar-brand" href="#">拉钩网管理系统</a>
						</div>
						<!-- Collect the nav links, forms, and other content for toggling -->
						<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						  <ul class="nav navbar-nav">
							<li class="active"><a href="/">首页<span class="sr-only">(current)</span></a></li>
							<li class="pos-hea"><a href="/html/position.html">职位管理</a></li>
						  </ul>
						  <ul class="nav navbar-nav navbar-right">
							<li data-toggle="modal" data-target="#loginModal"><a href="#" >登录</a></li>
							<li data-toggle="modal" data-target="#registerModal"><a href="#">注册</a></li>
						  </ul>
						</div><!-- /.navbar-collapse -->
					  </nav>`;
	$.extend(Header.prototype,{
		//动态创建头部DOM节点
		createDom(){
			$("header").html(Header.template);
			
		},
		createModal(){
			/* 创建登录节点login */
			new loginInit();
			/* 创建注册节点register */
			new register();
		}
	});
	return new Header();
});