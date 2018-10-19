function ranColor(str){
	var arr = str.split('');
	var div = document.getElementById('show-char');
	var color = ['#ff00ff','#ffff00','#0000ff','#00ffff','#ff0000','#000000'];
	var timer_1 = null;
	var timer_2 = null;
	var index = -1;
	for (var i = 0;i<arr.length;i++){
		var span = document.createElement('span');
		div.appendChild(span);
	}
	var spans = div.getElementsByTagName('span');
	timer_1 = setInterval(function(){
		index++;
		if (index >= arr.length-1){
			clearInterval(timer_1);
			timer_1 = null;
		}
		spans[index].innerHTML = arr[index];		
	},500)
	timer_2 = setInterval(function(){
		for(var i = 0;i<spans.length;i++){
			spans[i].style.color = color[Math.floor(Math.random()*color.length)];
		}
	},1000);
}

window.onload = function(){
	ranColor('随手一敲就是一段优美的诗，哈哈哈哈');
}
