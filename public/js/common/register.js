/* 创建注册的模态框 */
define(["jquery"],function(){
	class Register{
		constructor(){
		    this.init();
		}
		init(){
			let regismodal=`<div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="registerModalLabel">
								<div class="modal-dialog" role="document">
									<div class="modal-content">
									<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
										<h4 class="modal-title" id="registerModalLabel">用户注册</h4>
									</div>
									<div class="modal-body">
										<form>
										<div class="form-group">
											<label for="registerUsername">用户名</label>
											<input type="text" class="form-control" id="registerUsername" placeholder="输入用户名">
										</div>
										<div class="form-group">
											<label for="registerEmail">邮箱</label>
											<input type="email" class="form-control" id="registerEmail" placeholder="输入邮箱">
										</div>
										<div class="form-group">
											<label for="registerPassword">密码</label>
											<input type="password" class="form-control" id="registerPassword" placeholder="输入密码">
										</div>
										<div class="form-group">
											<label for="registerPassword">再次密码</label>
											<input type="password" class="form-control" id="registerPassword" placeholder="再次输入密码">
										</div>
										</form>
									</div>
									<div class="modal-footer">
										<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
										<button type="button" class="btn btn-primary">注册</button>
									</div>
									</div>
								</div>
								</div>`;
			$("body").append(regismodal);
			}
	}
	return Register;
	
});