/**
 * @author wangjunping
 */

$(function(){
	var tab_list = $("#tab_list > ul > li");
	var content_list = $("#content_list > div");
	for (var i = 0; i < tab_list.length; i++) {
		tab_list[i].index = i;
		tab_list[i].onclick = function() {
			show(this.index);
		};
	}
	function show(index) {
		for (var j = 0; j < tab_list.length; j++) {
			tab_list[j].className = "";
			content_list[j].className = "content";
			content_list[j].style.opacity = 0;
			content_list[j].style.filter = "alpha(opacity=0)";
		}
		tab_list[index].className = "curr";
		content_list[index].className = "curr";
		content_list[index].style.opacity = 1;
		content_list[index].style.filter = "alpha(opacity=100)";
	}
});
				
