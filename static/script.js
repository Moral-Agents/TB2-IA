const GRID = document.getElementById("grid")
const ROWS = 30;
const COLS = ROWS;
let canPaint = false
let run_btn = document.getElementById("run")
let graph = new Array(ROWS)
for (let i = 0; i < graph.length; i++) {
  	graph[i] = new Array(COLS)
}	

for(i = 0;i<ROWS * COLS;i++){
	//Crear grid
	let div = document.createElement("div")
	div.classList.add("cell")
	div.setAttribute('id',i.toString())
	GRID.appendChild(div)

	

	//Añadir evento para que las celdas se pinten
	let current_div = document.getElementById(i.toString())
	current_div.addEventListener("mouseover", function(){
		if(canPaint){
			current_div.classList.add("cell-filled")	
		}
	})

	//Crear inicio
	if(i == 899){
		let div_player = document.createElement("div")
		div_player.classList.add("player")
		div.appendChild(div_player)
	}

	//Crear meta
	if(i == 0){
		let div_target = document.createElement("div")
		div_target.classList.add("target")
		div_target.innerHTML = "X"
		div.appendChild(div_target)
	}
}

function create_array(){
	for(i = 0;i<graph.length;i++){
		for(j = 0;j<graph[i].length;j++){
			if ( document.getElementById(((i*ROWS)+j).toString()).classList.contains('cell-filled') ){
				graph[i][j] = 1
			} else{
				graph[i][j] = 0
			}
		}
	}
}
create_array();