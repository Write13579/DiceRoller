function rollDice() {
  const numberOfDices = document.getElementById(`numdices`) as HTMLInputElement;
  const diceResult = document.getElementById(`diceResult`);
  const diceImages = document.getElementById(`diceImages`);
  const values = [];
  const images = [];

  if (numberOfDices) {
    let dices = numberOfDices.value;

    for (let i = 0; i < parseInt(dices); i++) {
      const value = Math.floor(Math.random() * 6) + 1;
      console.log(value);
    }
  }
}
