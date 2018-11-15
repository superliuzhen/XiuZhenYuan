window.onload = function(){
	createMap();
	createSnake();
	createFood();	
}

var map_block = [];
function createMap(){
	var main = document.getElementById('main');
	for (var i = 0; i < 20; i++) {// 行
		var row_block  = document.createElement('div');
		row_block.className = 'row_block';
		main.appendChild(row_block);
		var rowArray = [];
		for (var j = 0; j < 20; j++) {// 列
			var col_div = document.createElement('div');
			col_div.className  = 'block';
			row_block.appendChild(col_div);
			rowArray.push(col_div);
		}
		map_block.push(rowArray);
	}
	
}
var snake = [];
function createSnake(){
	for(var i = 0;i < 3;i++){
		snake[i] = map_block[0][i];
		snake[i].className = 'block black';
	}
	snake[snake.length-1].className = 'block black snake_head';
}
function clearSnake(){
	for(var i = 0;i < snake.length;i++){
		snake[i].className = 'block';
	}
	snake = [];
	col = 2;
	row = 0;
	score = 0;
	score_show.innerHTML = score;
	direction = 'right';
}
var direction = 'right';
document.onkeydown = function(event){	
	event = event || window.event;
	if(direction == 'right' && event.keyCode == 37){return;}
	if(direction == 'left' && event.keyCode == 39){return;}
	if(direction == 'up' && event.keyCode == 40){return;}
	if(direction == 'down' && event.keyCode == 38){return;}
	switch (event.keyCode) {
		  case 37:
		    direction = 'left';// 向左
		    break;
		  case 38:
		    direction = 'up';// 向上
		    break;
		  case 39:
		    direction = 'right';// 向右
		    break;
		  case 40:
		    direction = 'down';// 向下
		    break;
	}
}
var row = 0;
var col = 2;
var score = 0;
var score_show = document.getElementById('score');
var moveTimer = null;
function snakeMove(){
	switch(direction){
		case 'right':
			col++;
			break;
		case 'left':
			col--;
			break;
		case 'up':
			row--;
			break;
		case 'down':
			row++;
			break;
	}
	if(row < 0 || row > 19 || col < 0 || col > 19){
		gameOver();
		return ;
	}
	if(foodX === col && foodY === row){
		map_block[foodY][foodX].className = 'block black snake_head';
		snake.push(map_block[foodY][foodX]);
		snake[snake.length-2].className = 'block black';
		score++;
		score_show.innerHTML = score;
		createFood();
	}else{
		map_block[row][col].className = 'block black snake_head';

		for(var i = 0;i < snake.length;i++){
			if(snake[i] === map_block[row][col]){
				gameOver();
				snake[snake.length-1].className = 'block black';
				return;
			}
		}

		snake.push(map_block[row][col]);
		snake[snake.length-2].className = 'block black';
		snake[0].className = 'block'
		snake.shift();
	}
}
function gameOver(){
	alert('游戏结束');
	clearInterval(moveTimer);
	start.onclick = function(){
		clearSnake();
		createSnake();
		clearInterval(moveTimer);
		moveTimer = null;
		moveTimer = setInterval(snakeMove, speed);
		start.onclick = function(){
			moveTimer = null;
			moveTimer = setInterval(snakeMove, speed);
		}
	}
}
var foodX = 0;
var foodY = 0;
function createFood(){
	foodX = Math.floor(Math.random()*20);
	foodY = Math.floor(Math.random()*20);
	for(var i = 0;i < snake.length;i++){
		if(map_block[foodY][foodX].className === 'block black' || map_block[foodY][foodX].className === 'block black snake_head'){
			createFood();
		}
	}
	map_block[foodY][foodX].className = 'block food';
}

var start = document.getElementById('start');
var pause = document.getElementById('pause');
var reset = document.getElementById('reset');
var speedSelect = document.getElementById('speed_select');
var speed = 300;
start.onclick = function(){
	var value = speedSelect.value;
	switch (value) {
		case '1':
			speed = 300;
			break;
		case '2':
			speed = 200;
			break;
		case '3':
			speed = 100;
			break;
	}
	clearInterval(moveTimer);
	moveTimer = null;
	moveTimer = setInterval(snakeMove, speed);
}
pause.onclick = function(){
	clearInterval(moveTimer);
	moveTimer = null;
}
reset.onclick = function(){
	clearSnake();
	createSnake();
	clearInterval(moveTimer);
	moveTimer = null;
}
