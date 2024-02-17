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
      values.push(value);
      images.push(`<img src="public/${value}.png">`);
    }

    if (diceResult) {
      diceResult.textContent = `dice: ${values.join(`, `)}`;
    }
    if (diceImages) {
      diceImages.innerHTML = images.join(``);
    }
  }

  const sum = document.getElementById(`sum`);
  let adding = 0;

  if (sum) {
    for (let i = 0; i < values.length; i++) {
      adding += values[i];
    }
    sum.textContent = `sum: ${adding.toString()}`;
  }
}
