const ATTEMPTS = 6;


function generateBoard(rows,cells){
  for(let j = 0; j < rows; j++){
    let row = document.createElement("div");
    row.className = "row";
    for(var i = 0; i < cells; i++){
      let cube = document.createElement("div");
      cube.className = "cube cube" + (j + "") + (i + "");
      let cubeTxt = document.createElement("p");
      cubeTxt.className = "cubeTXT txt" + (j + "") + (i + "");
      cube.append(cubeTxt);
      row.append(cube);
    }
    document.querySelector(".contAll").append(row);
  }

}
generateBoard(ATTEMPTS,LENGTH)
