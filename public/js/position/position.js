/* 职位 */
require(["../config"],function(){
	require(["header","bootstrap"],function(){
		$(function(){
			/* 处理头部的样式 跳转到position页面的头部样式 */
			class Active{
				constructor() {
				    this.init();
				}
				init(){
					$(".pos-hea").addClass("active").siblings().removeClass("active");
				}
			}
			new Active();
			
			
		});
	});
});