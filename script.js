const boxContainer = document.querySelector(".gameboard");
console.log(boxContainer);
const gameBoard = (function gameBoard(){
    
    let gameBoardArr = ["0","1","2","3","4","5","6","7","8"];
    gameBoardArr.forEach((item)=>{
        let box = document.createElement("div");
        box.setAttribute("id", item);
        currentPlayer = "O";
        boxContainer.appendChild(box);

        box.addEventListener("click",(event)=>{
            let clickedBox = Number(event.target.id);
            gameBoardArr[clickedBox] = `${currentPlayer}`
            box.innerText = `${currentPlayer}`;
            console.log(gameBoardArr);
            currentPlayer = currentPlayer=== "O" ? "X" : "O"

        },{once: true})
    })
})()