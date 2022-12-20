document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })
})

function handleClick(event){
    let square = event.target; // o evento de quando square é clicado
    let position = square.id; //id no html

    if(handleMove(position)){
        setTimeout(() => {
            alert(`GAME OVER -- PLAYER ${playerTime} WINS`);
        }, 10);
    }
    updateSquare(position);
}

function updateSquare(postion){
    let square = document.getElementById(postion.toString());
    let symbol = board[postion];
    square.innerHTML = `<img class="size" src="${symbol}">`
}

