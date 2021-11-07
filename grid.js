const GRID = document.getElementById("grid")
const ROWS = 32
const COLS = 17

let run_btn = document.getElementById("run")
let graph = new Array(COLS)

for (let i = 0; i < graph.length; i++) {
  	graph[i] = new Array(ROWS)
}	


for(i = 0; i < ROWS * COLS; i++){
	//Crear grid
	let div = document.createElement("div")
	div.classList.add("cell")
	div.setAttribute('id', i.toString())
	GRID.appendChild(div)
	
	let current_div = document.getElementById(i.toString())


	//Crear inicio
	if(i == 33){
		current_div.classList.add("player")
	}


}

document.getElementById("413").classList.add("target")

function reset_grid(){
	for(i = 0;i<ROWS*COLS;i++){
		document.getElementById(i.toString()).classList.remove("player")
		document.getElementById(i.toString()).classList.remove("cell-filled")

	}
	document.getElementById("33").classList.add("player")
	document.getElementById("413").classList.add("target")
}

let btn = document.getElementById("run");
btn.addEventListener("click",function(){
	reset_grid();
	for(i = 0; i < ROWS * COLS; i++){
		
		let current_div = document.getElementById(i.toString())
	
		if(i >= 0 && i <= 31){
			current_div.classList.add("cell-filled");
		}
		if(i % 32 == 0 ){
			current_div.classList.add("cell-filled")
		}
		if(i >= 513){
			current_div.classList.add("cell-filled")
		}
		
		if(i >= 128 && i <= 132) {
			current_div.classList.add("cell-filled")
		}
		if (i >= 214 && i <= 223){
			current_div.classList.add("cell-filled")
		}
		if(i == 118 || i == 150 || i == 182 || i == 246 || i== 524 || i == 492 
			|| i == 460 || i == 428 || i == 396 || i == 364 || i == 332
			|| i == 365 || i == 366){
			current_div.classList.add("cell-filled")
		}
	
	
		//Crear inicio
		if(i == 33){
			current_div.classList.add("player")
		}
	
	
	}
	
	for(a=31; a <= 511;a+=32){
		document.getElementById(a).classList.add("cell-filled")
	}
	let arr = [33, 34, 35, 36, 37, 70, 103, 136, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 212, 244, 276, 277, 278, 311, 344, 377, 378, 379, 380, 381, 413];
	for(i = 0;i<arr.length;i++){
		document.getElementById(arr[i]).classList.add("player")
	}
	
});

let btn2 = document.getElementById("run2");
btn2.addEventListener("click",function() {

	reset_grid();


	let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 37, 63, 64, 69, 95, 96, 101, 127, 128, 133, 150, 151, 152, 153, 154, 159, 160, 186, 191, 192, 218, 223, 224, 250, 255, 256, 267, 282, 287, 288, 299, 314, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 346, 351, 352, 383, 384,  415, 416, 447, 448, 479, 480, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543];
	for(i = 0;i<arr.length;i++){
		document.getElementById(arr[i]).classList.add("cell-filled")
	}
	let arr2 = [33, 66, 99, 131, 163, 164, 165, 198, 199, 200, 201, 202, 203, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 215, 248, 280, 312, 344, 376, 377, 378, 411, 412, 413];
	for(i = 0;i<arr2.length;i++){
		document.getElementById(arr2[i]).classList.add("player")
	}
})