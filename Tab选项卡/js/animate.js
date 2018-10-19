function $(id){
	return typeof id === "string"?document.getElementById(id):id;
}

window.onload = function(){
	Tab_1();
	Tab_2();
};
function Tab_1(){
	var timer = null;
	var lis = $("notice-tit").getElementsByTagName("li");
	var divs = $("notice-con").getElementsByTagName("div");
	for(var i = 0; i < lis.length; i++){
		lis[i].index = i;		
		lis[i].onmouseover = function(){
			if(timer){
			clearTimeout(timer);
			timer = null;
			}
			var that = this;
			timer = setTimeout(function(){
				for(var j = 0; j < lis.length; j++){
					lis[j].className = "";
					divs[j].className = "";
				}
				that.className = "select";
				divs[that.index].className = "show"
			},250)
		}
	}	
}
function Tab_2(){
	var index = 0;
	var timer = null;
	var lis = $("notice-tit_2").getElementsByTagName("li");
	var divs = $("notice-con_2").getElementsByTagName("div");
	
	for(var i = 0; i < lis.length; i++){
		lis[i].index = i;		
		lis[i].onmouseover = function(){
			clearInterval(timer);
			for(var j = 0; j < lis.length; j++){
					lis[j].className = "";
					divs[j].className = "";
				}
			this.className = "select";
			divs[this.index].className = "show"
		}
		lis[i].onmouseout = function(){
			index = this.index;
			timer = setInterval(change,2000);
		}
	}
	if(timer){
		clearInterval(timer);
		timer = null;
	}
	timer = setInterval(change,2000);
	function change(){
		index++;
		if(index >= lis.length){
			index = 0;
		}
		for(var i = 0; i < lis.length; i++){
			lis[i].className = "";
			divs[i].className = "";
		}
		lis[index].className = "select";
		divs[index].className = "show";
	}	
}
