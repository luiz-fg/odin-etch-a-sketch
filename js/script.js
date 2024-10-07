const containerDOM = document.querySelector('.container');
const btnDOM = document.querySelector('#resize');

let INIT_SQUARES = 16;

function setGrid(squaresPerAxis) {

    const totalSquares = squaresPerAxis * squaresPerAxis;
    const border = 1;
    const width = 800 / squaresPerAxis - (border * 2);
    const height = 800 / squaresPerAxis - (border * 2);

    const squareStyle =
    `
        width: ${width}px;
        height: ${height}px;
        border: ${border}px solid #000;
        flex-grow: 0;
        flex-shrink: 0;
    `

    for(let i = 1; i <= totalSquares; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'square');
        div.setAttribute('style', squareStyle);
        containerDOM.appendChild(div);
    };

}

function clearSquares() {

    document.querySelectorAll('.square').forEach((item) => {
        containerDOM.removeChild(item);
    });
}

function setColor() {
    const squares = [...document.querySelectorAll('.square')];

    squares.forEach((square) => {

        let backgroundColor = getComputedStyle(square).backgroundColor;
        let squareOpacity = getComputedStyle(square).opacity + 0.1;


            if(backgroundColor === 'rgba(0, 0, 0, 0)') {
                square.setAttribute('style', squareOpacity)
            }
    })

    

}


setGrid(INIT_SQUARES);


btnDOM.addEventListener('click', () => {
    let promptEntry = Number(prompt('Choose between 1 and 100'))
    
    
    while(!promptEntry || promptEntry < 1 || promptEntry > 100) {
        promptEntry = Number(prompt('Choose between 1 and 100'))
    }

    clearSquares();
    setGrid(promptEntry);

});
