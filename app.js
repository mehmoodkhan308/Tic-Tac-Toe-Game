// const cell = document.getElementById("cell")
let newGAme = document.getElementById("newGAme")
let msg = document.getElementById("msg")
let msg_container = document.querySelector(".msg-container")
const reset = document.getElementById("reset")
const winningPatterns = [
   // rows 
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   //  column 
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   // diagonals 
   [2, 4, 6],
   [0, 4, 8]
]



let autoSystem = true;
const resetGAme = () => {
   autoSystem = true;
   gameOver = false;
   enableBtn();
   msg_container.classList.add("hide")
}
let cell = document.querySelectorAll(".cell")
// console.log(selectAll);
cell.forEach((cell) => {
   cell.addEventListener("click", () => {
      if (gameOver) return;
      if (autoSystem) {
         cell.innerText = "X";
         autoSystem = false
      } else {
         cell.innerText = "O"
         autoSystem = true
      }
      cell.disabled = true

      winCondition()
      checkDraw()
   });
})

let disabledBtn = () => {
   for (let box of cell) {
      box.disabled = true;
   }
}

let enableBtn = () => {
   for (let box of cell) {
      box.disabled = false;
      box.innerText = ""
   }
}
let gameOver = false;
const showWinner = (Winner) => {
   msg.innerText = `Congratulation Winner is ${Winner}`
   msg_container.classList.remove("hide")
   disabledBtn();
   gameOver = true;
}


const winCondition = () => {
   for (let pattern of winningPatterns) {
      let value1 = cell[pattern[0]].innerText
      let value2 = cell[pattern[1]].innerText
      let value3 = cell[pattern[2]].innerText
      // console.log(value1,value2,value3);


      if (value1 != "" && value2 != "" && value3 != "") {
         if (value1 === value2 && value2 === value3) {
            //   console.log("winner" ,value1);
            showWinner(value1);
         }


      }




   }
}

newGAme.addEventListener('click', resetGAme)
reset.addEventListener('click', resetGAme)

const checkDraw = () => {
      if (gameOver) return;
   const filled = [...cell].every(box => box.innerText != "")
   if (filled) {
      msg.innerText = "Match Draw!";
      msg_container.classList.remove("hide")
      disabledBtn()
        gameOver = true;
   }
}









