function $(id){
	return typeof id === "string"?document.getElementById(id):id;
}

window.onload = function(){
	showShopping();
	searchColor();
	phoneShow();
	menuShow();
	changeImg();
}

function showShopping(){
	var cart = $('shopping-cart');
	var list = $('shopping-list');
	cart.onmouseover = function(){
		list.style.display = 'block';
	}
	cart.onmouseout = function(){
		list.style.display = 'none';
	}
}

function searchColor(){
	var input = $('search').getElementsByTagName('input');
	for (var i=0;i<input.length;i++){
		input[i].onfocus = function(){
			for(var j=0;j<input.length;j++){
				input[j].style.border = '1px solid #FF6700';
			}
		}
		input[i].onblur = function(){
			for(var j=0;j<input.length;j++){
					input[j].style.border = '1px solid #e0e0e0';
				}
			input[0].onmouseout = function(){
				for(var j=0;j<input.length;j++){
					input[j].style.border = '1px solid #e0e0e0';
				}
			}
			input[0].onmouseover = function(){
				for(var j=0;j<input.length;j++){
					input[j].style.border = '1px solid #b0b0b0';
				}
			}	
		}
	}
}

function phoneShow(){
	var as = $("nav-top").getElementsByTagName("a");
	var uls = $("tellphone").getElementsByTagName("ul");
	var timer = null;
	for(var i = 0; i < as.length-2; i++){
		as[i].index = i;		
		as[i].onmouseover = function(){		
			if(timer){
				clearTimeout(timer);
				timer = null;
			};
			for(var j = 0; j < uls.length; j++){
					uls[j].style.display = "none";
			}
			uls[this.index].style.display = "block";
		}
		
  		as[i].onmouseout = function(){
  			timer = setTimeout(hidden,200);
		}	
	}
	function hidden(){
		for(var j = 0; j < uls.length; j++){
		uls[j].style.display = "none";
		}
	}
	for(var m = 0; m < uls.length; m++){
		uls[m].onmouseenter = function(){
			clearTimeout(timer);
			timer = null;
		}
		uls[m].onmouseleave = function(){
			hidden();
		}
	}
}


function menuShow(){
	var as = $("menu-one").getElementsByTagName("li");
	var uls = $("menu-two").getElementsByTagName("ul");
	var timer = null;
	for(var i = 1; i < as.length-1; i++){
		as[i].index = i-1;		
		as[i].onmouseover = function(){		
			if(timer){
				clearTimeout(timer);
				timer = null;
			};
			for(var j = 0; j < uls.length; j++){
					uls[j].style.display = "none";
			}
			uls[this.index].style.display = "block";
		}
		
  		as[i].onmouseout = function(){
  			timer = setTimeout(hidden,200);
		}	
	}
	function hidden(){
		for(var j = 0; j < uls.length; j++){
		uls[j].style.display = "none";
		}
	}
	for(var m = 0; m < uls.length; m++){
		uls[m].onmouseenter = function(){
			clearTimeout(timer);
			timer = null;
		}
		uls[m].onmouseleave = function(){
			hidden();
		}
	}
}

function changeImg(){
	var divs = $("img-more").getElementsByTagName('div');
	var spans = $('img-more').getElementsByTagName('span');
	var index = 0;
	var timer = null;
	timer = setInterval(change,2500);
	spans[0].onclick = function(){
		if(timer){
			clearInterval(timer);
			timer = null;
		}
		index--;
		if(index <0){index = divs.length-1}
		for (var i=0;i<divs.length;i++) {
			divs[i].className = '';
		}
		divs[index].className = 'show-img';
		timer = setInterval(change,2500);
	}
	spans[1].onclick = function(){
		if(timer){
			clearInterval(timer);
			timer = null;
		}
		index++;
		if(index >=divs.length){index = 0;}
		for (var i=0;i<divs.length;i++) {
			divs[i].className = '';
		}
		divs[index].className = 'show-img';
		timer = setInterval(change,2500);
	}
	
	function change(){
		index++;
		if(index >= divs.length || index < 0){
			index = 0
		}
		for (var i=0;i<divs.length;i++) {
			divs[i].className = '';
		}
		divs[index].className = 'show-img';
	}
}
