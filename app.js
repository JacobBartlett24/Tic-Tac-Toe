const gameboard = (input,square) => {
  const gameboardArray = [];
  const addInputToStack = () => gameboardArray[input];
  const printInput = () => console.log(`${input} at square ${square}`);
  return{addInputToStack, printInput};
};

squares = document.querySelectorAll('.square').forEach(square => {
  square.addEventListener('click', e =>{
    if(square.classList.contains('blue')){
      square.classList.replace('blue','red')
    } else if (square.classList.contains('red')){
      square.classList.replace('red','blue');
    }
    else
    square.classList.add('blue');
  })
});

