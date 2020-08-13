document.addEventListener('DOMContentLoaded', ()=>{


  const grid = document.querySelector('.grid');
  const note = document.querySelector('.note');
  let boardSize = '';
  let squares = [];

  // creating board dynamically by taking the input value
  document.getElementById('button').onclick = function buttonClick() {
   boardSize = document.querySelector('.inputNum').value;
   createBoard();
  }

  function createBoard() {
    document.querySelector('.grid').style.width = boardSize*100 +'px';
    document.querySelector('.grid').style.height = boardSize*100 +'px';
    for(let i=0; i<boardSize*boardSize; i++){
      square = document.createElement('div');
      square.style.width = 100 +'px';
      square.style.height = 100 +'px';
      console.log(square);
      square.innerHTML = 0;
      grid.appendChild(square);
      squares.push(square);
    }
    noteSection = document.createElement('h4');
    noteSection.innerHTML = 'REFRESH THE PAGE TO CREATE THE NEW BOARD';
    note.appendChild(noteSection);
    generate();
    generate();
  }

  // randomly generate numbers
  function generate() {
    let randomNumber = Math.floor(Math.random() * squares.length);
    console.log(randomNumber);
    if(squares[randomNumber].innerHTML == 0){
      squares[randomNumber].innerHTML = 2;
      gameOver();
    }else generate();
  }


  // adding move feature
  // move right
  function moveRight() {
    for(let i=0; i<squares.length; i++){
      if(i % boardSize == 0){
            let row = [];
            let totalOne = squares[i].innerHTML;
            let totalTwo = squares[i+1].innerHTML;
            row.push(parseInt(totalOne));
            row.push(parseInt(totalTwo));

            if(boardSize == 3){
              let totalThree = squares[i+2].innerHTML;
              row.push(parseInt(totalThree))
            }
             if (boardSize==4) {
               let totalThree = squares[i+2].innerHTML;
               row.push(parseInt(totalThree))
              let totalFour = squares[i+3].innerHTML;
              row.push(parseInt(totalFour))
            }
             if (boardSize==5) {
               let totalThree = squares[i+2].innerHTML;
               row.push(parseInt(totalThree))
              let totalFour = squares[i+3].innerHTML;
              row.push(parseInt(totalFour))
              let totalFive = squares[i+4].innerHTML;
              row.push(parseInt(totalFive))
            }
             if (boardSize==6) {
               let totalThree = squares[i+2].innerHTML;
               row.push(parseInt(totalThree))
              let totalFour = squares[i+3].innerHTML;
              row.push(parseInt(totalFour))
              let totalFive = squares[i+4].innerHTML;
              row.push(parseInt(totalFive))
              let totalSix = squares[i+5].innerHTML;
              row.push(parseInt(totalSix))
            }
             if (boardSize==7) {
               let totalThree = squares[i+2].innerHTML;
               row.push(parseInt(totalThree))
              let totalFour = squares[i+3].innerHTML;
              row.push(parseInt(totalFour))
              let totalFive = squares[i+4].innerHTML;
              row.push(parseInt(totalFive))
              let totalSix = squares[i+5].innerHTML;
              row.push(parseInt(totalSix))
              let totalSeven = squares[i+6].innerHTML;
              row.push(parseInt(totalSeven))
            }



            let filtedRow = row.filter(val => val);
            let missing = boardSize - filtedRow.length;
            let zeros = Array(missing).fill(0);

            let newRow = zeros.concat(filtedRow)

            console.log(newRow);

            squares[i].innerHTML = newRow[0];
            squares[i+1].innerHTML = newRow[1];

            if (boardSize == 3) {
              squares[i+2].innerHTML = newRow[2];
            }
            if (boardSize == 4) {
              squares[i+2].innerHTML = newRow[2];
              squares[i+3].innerHTML = newRow[3];
            }
            if (boardSize == 5) {
              squares[i+2].innerHTML = newRow[2];
              squares[i+3].innerHTML = newRow[3];
              squares[i+4].innerHTML = newRow[4];
            }
            if (boardSize == 6) {
              squares[i+2].innerHTML = newRow[2];
              squares[i+3].innerHTML = newRow[3];
              squares[i+4].innerHTML = newRow[4];
              squares[i+5].innerHTML = newRow[5];
            }
            if (boardSize == 7) {
              squares[i+2].innerHTML = newRow[2];
              squares[i+3].innerHTML = newRow[3];
              squares[i+4].innerHTML = newRow[4];
              squares[i+5].innerHTML = newRow[5];
              squares[i+6].innerHTML = newRow[6];
            }



      }
    }
  }

  // move left
  function moveLeft() {
    for(let i=0; i<squares.length; i++){
      if(i % boardSize == 0){
            let row = [];
            let totalOne = squares[i].innerHTML;
            let totalTwo = squares[i+1].innerHTML;
            row.push(parseInt(totalOne));
            row.push(parseInt(totalTwo));

            if(boardSize == 3){
              let totalThree = squares[i+2].innerHTML;
              row.push(parseInt(totalThree))
            }
             if (boardSize==4) {
               let totalThree = squares[i+2].innerHTML;
               row.push(parseInt(totalThree))
              let totalFour = squares[i+3].innerHTML;
              row.push(parseInt(totalFour))
            }
             if (boardSize==5) {
               let totalThree = squares[i+2].innerHTML;
               row.push(parseInt(totalThree))
              let totalFour = squares[i+3].innerHTML;
              row.push(parseInt(totalFour))
              let totalFive = squares[i+4].innerHTML;
              row.push(parseInt(totalFive))
            }
             if (boardSize==6) {
               let totalThree = squares[i+2].innerHTML;
               row.push(parseInt(totalThree))
              let totalFour = squares[i+3].innerHTML;
              row.push(parseInt(totalFour))
              let totalFive = squares[i+4].innerHTML;
              row.push(parseInt(totalFive))
              let totalSix = squares[i+5].innerHTML;
              row.push(parseInt(totalSix))
            }
             if (boardSize==7) {
               let totalThree = squares[i+2].innerHTML;
               row.push(parseInt(totalThree))
              let totalFour = squares[i+3].innerHTML;
              row.push(parseInt(totalFour))
              let totalFive = squares[i+4].innerHTML;
              row.push(parseInt(totalFive))
              let totalSix = squares[i+5].innerHTML;
              row.push(parseInt(totalSix))
              let totalSeven = squares[i+6].innerHTML;
              row.push(parseInt(totalSeven))
            }



            let filtedRow = row.filter(val => val);
            let missing = boardSize - filtedRow.length;
            let zeros = Array(missing).fill(0);

            let newRow = filtedRow.concat(zeros)

            console.log(newRow);

            squares[i].innerHTML = newRow[0];
            squares[i+1].innerHTML = newRow[1];

            if (boardSize == 3) {
              squares[i+2].innerHTML = newRow[2];
            }
            if (boardSize == 4) {
              squares[i+2].innerHTML = newRow[2];
              squares[i+3].innerHTML = newRow[3];
            }
            if (boardSize == 5) {
              squares[i+2].innerHTML = newRow[2];
              squares[i+3].innerHTML = newRow[3];
              squares[i+4].innerHTML = newRow[4];
            }
            if (boardSize == 6) {
              squares[i+2].innerHTML = newRow[2];
              squares[i+3].innerHTML = newRow[3];
              squares[i+4].innerHTML = newRow[4];
              squares[i+5].innerHTML = newRow[5];
            }
            if (boardSize == 7) {
              squares[i+2].innerHTML = newRow[2];
              squares[i+3].innerHTML = newRow[3];
              squares[i+4].innerHTML = newRow[4];
              squares[i+5].innerHTML = newRow[5];
              squares[i+6].innerHTML = newRow[6];
            }



      }
    }
  }

  // move down
  function moveDown() {
    for(let i=0; i<squares.length; i++){

            let col = [];
            let totalOne = squares[i].innerHTML;
            let totalTwo = squares[i+parseInt(boardSize)].innerHTML;
            col.push(parseInt(totalOne));
            col.push(parseInt(totalTwo));

            if(boardSize == 3){
              let totalThree = squares[i+parseInt(boardSize*2)].innerHTML;
              col.push(parseInt(totalThree))
            }
             if (boardSize==4) {
               let totalThree = squares[i+parseInt(boardSize*2)].innerHTML;
               col.push(parseInt(totalThree))
              let totalFour = squares[i+parseInt(boardSize*3)].innerHTML;
              col.push(parseInt(totalFour))
            }
             if (boardSize==5) {
               let totalThree = squares[i+parseInt(boardSize*2)].innerHTML;
               col.push(parseInt(totalThree))
              let totalFour = squares[i+parseInt(boardSize*3)].innerHTML;
              col.push(parseInt(totalFour))
              let totalFive = squares[i+parseInt(boardSize*4)].innerHTML;
              col.push(parseInt(totalFive))
            }
             if (boardSize==6) {
               let totalThree = squares[i+parseInt(boardSize*2)].innerHTML;
               col.push(parseInt(totalThree))
              let totalFour = squares[i+parseInt(boardSize*3)].innerHTML;
              col.push(parseInt(totalFour))
              let totalFive = squares[i+parseInt(boardSize*4)].innerHTML;
              col.push(parseInt(totalFive))
              let totalSix = squares[i+parseInt(boardSize*5)].innerHTML;
              col.push(parseInt(totalSix))
            }
             if (boardSize==7) {
               let totalThree = squares[i+parseInt(boardSize*2)].innerHTML;
               col.push(parseInt(totalThree))
              let totalFour = squares[i+parseInt(boardSize*3)].innerHTML;
              col.push(parseInt(totalFour))
              let totalFive = squares[i+parseInt(boardSize*4)].innerHTML;
              col.push(parseInt(totalFive))
              let totalSix = squares[i+parseInt(boardSize*5)].innerHTML;
              col.push(parseInt(totalSix))
              let totalSeven = squares[i+parseInt(boardSize*6)].innerHTML;
              col.push(parseInt(totalSeven))
            }



            let filtedCol = col.filter(val => val);
            let missing = boardSize - filtedCol.length;
            let zeros = Array(missing).fill(0);

            let newCol = zeros.concat(filtedCol)

            console.log(newCol);

            squares[i].innerHTML = newCol[0];
            squares[i+parseInt(boardSize)].innerHTML = newCol[1];

            if (boardSize == 3) {
              squares[i+parseInt(boardSize*2)].innerHTML = newCol[2];
            }
            if (boardSize == 4) {
              squares[i+parseInt(boardSize*2)].innerHTML = newCol[2];
              squares[i+parseInt(boardSize*3)].innerHTML = newCol[3];
            }
            if (boardSize == 5) {
              squares[i+parseInt(boardSize*2)].innerHTML = newCol[2];
              squares[i+parseInt(boardSize*3)].innerHTML = newCol[3];
              squares[i+parseInt(boardSize*4)].innerHTML = newCol[4];
            }
            if (boardSize == 6) {
              squares[i+parseInt(boardSize*2)].innerHTML = newCol[2];
              squares[i+parseInt(boardSize*3)].innerHTML = newCol[3];
              squares[i+parseInt(boardSize*4)].innerHTML = newCol[4];
              squares[i+parseInt(boardSize*5)].innerHTML = newCol[5];
            }
            if (boardSize == 7) {
              squares[i+parseInt(boardSize*2)].innerHTML = newCol[2];
              squares[i+parseInt(boardSize*3)].innerHTML = newCol[3];
              squares[i+parseInt(boardSize*4)].innerHTML = newCol[4];
              squares[i+parseInt(boardSize*5)].innerHTML = newCol[5];
              squares[i+parseInt(boardSize*6)].innerHTML = newCol[6];
            }




    }
  }

  // move up
  function moveUp() {
    for(let i=0; i<squares.length; i++){

            let col = [];
            let totalOne = squares[i].innerHTML;
            console.log(i);
            console.log(parseInt(boardSize));
            console.log(i+parseInt(boardSize));
            console.log(squares[i+parseInt(boardSize)]);
            let totalTwo = squares[i+parseInt(boardSize)].innerHTML;
            col.push(parseInt(totalOne));
            col.push(parseInt(totalTwo));

            if(boardSize == 3){
              console.log(parseInt(boardSize*2));
              let totalThree = squares[i+parseInt(boardSize*2)].innerHTML;
              col.push(parseInt(totalThree))
            }
             if (boardSize == 4) {
               let totalThree = squares[i+parseInt(boardSize*2)].innerHTML;
               col.push(parseInt(totalThree))
              let totalFour = squares[i+parseInt(boardSize*3)].innerHTML;
              col.push(parseInt(totalFour))
            }
             if (boardSize==5) {
               let totalThree = squares[i+parseInt(boardSize*2)].innerHTML;
               col.push(parseInt(totalThree))
              let totalFour = squares[i+parseInt(boardSize*3)].innerHTML;
              col.push(parseInt(totalFour))
              let totalFive = squares[i+parseInt(boardSize*4)].innerHTML;
              col.push(parseInt(totalFive))
            }
             if (boardSize==6) {
               let totalThree = squares[i+parseInt(boardSize*2)].innerHTML;
               col.push(parseInt(totalThree))
              let totalFour = squares[i+parseInt(boardSize*3)].innerHTML;
              col.push(parseInt(totalFour))
              let totalFive = squares[i+parseInt(boardSize*4)].innerHTML;
              col.push(parseInt(totalFive))
              let totalSix = squares[i+parseInt(boardSize*5)].innerHTML;
              col.push(parseInt(totalSix))
            }
             if (boardSize==7) {
               let totalThree = squares[i+parseInt(boardSize*2)].innerHTML;
               col.push(parseInt(totalThree))
              let totalFour = squares[i+parseInt(boardSize*3)].innerHTML;
              col.push(parseInt(totalFour))
              let totalFive = squares[i+parseInt(boardSize*4)].innerHTML;
              col.push(parseInt(totalFive))
              let totalSix = squares[i+parseInt(boardSize*5)].innerHTML;
              col.push(parseInt(totalSix))
              let totalSeven = squares[i+parseInt(boardSize*6)].innerHTML;
              col.push(parseInt(totalSeven))
            }



            let filtedCol = col.filter(val => val);
            let missing = boardSize - filtedCol.length;
            let zeros = Array(missing).fill(0);

            let newCol = filtedCol.concat(zeros)

            console.log(newCol);

            squares[i].innerHTML = newCol[0];
            squares[i+parseInt(boardSize)].innerHTML = newCol[1];

            if (boardSize == 3) {
              squares[i+parseInt(boardSize*2)].innerHTML = newCol[2];
            }
            if (boardSize == 4) {
              squares[i+parseInt(boardSize*2)].innerHTML = newCol[2];
              squares[i+3].innerHTML = newCol[3];
            }
            if (boardSize == 5) {
              squares[i+parseInt(boardSize*2)].innerHTML = newCol[2];
              squares[i+parseInt(boardSize*3)].innerHTML = newCol[3];
              squares[i+parseInt(boardSize*4)].innerHTML = newCol[4];
            }
            if (boardSize == 6) {
              squares[i+parseInt(boardSize*2)].innerHTML = newCol[2];
              squares[i+parseInt(boardSize*3)].innerHTML = newCol[3];
              squares[i+parseInt(boardSize*4)].innerHTML = newCol[4];
              squares[i+parseInt(boardSize*5)].innerHTML = newCol[5];
            }
            if (boardSize == 7) {
              squares[i+parseInt(boardSize*2)].innerHTML = newCol[2];
              squares[i+parseInt(boardSize*3)].innerHTML = newCol[3];
              squares[i+parseInt(boardSize*4)].innerHTML = newCol[4];
              squares[i+parseInt(boardSize*5)].innerHTML = newCol[5];
              squares[i+parseInt(boardSize*6)].innerHTML = newCol[6];
            }




    }
  }



  // adding keycodes
  function control(e) {
    if(e.keyCode === 39){
      keyRight()
    } else if (e.keyCode === 37) {
      keyLeft()
    } else if (e.keyCode === 40) {
      keyDown()
    } else if (e.keyCode === 38) {
      keyUp()
    }
  }

  document.addEventListener('keyup', control);

  function keyRight() {
    moveRight()
    generate()
  }

  function keyLeft() {
    moveLeft()
    generate()
  }

  function keyDown() {
    moveDown()
    generate()
  }

  function keyUp() {
    moveUp()
    generate()
  }

// gameover
  function gameOver() {
    let zeros = 0;
    for(let i=0; i<squares.length; i++){
      if(squares[i].innerHTML == 0){
        zeros++
      }
    }
    if(zeros === 0){
      document.querySelector('.gameover').innerHTML = "GAME OVER !!!";
      document.removeEventListener('keyup', control)
    }
  }



})
