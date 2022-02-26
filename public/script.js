const ATTEMPTS = 6;


function generateBoard(rows,cells){
  for(let j = 0; j < rows; j++){
    let row = document.createElement("div");
    row.className = "row";
    for(var i = 0; i < cells; i++){
      let cube = document.createElement("div");
      cube.className = "cube";
      row.append(cube);
    }
    document.querySelector(".contAll").append(row);
  }

}
generateBoard(ATTEMPTS,32)
