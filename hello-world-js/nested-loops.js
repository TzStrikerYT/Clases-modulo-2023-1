for (let row = 0; row <= 5; row++) {
  let square = "";
  for (let col = 0; col <= 5; col++) {
    if (row === 0 || row === 5 || col === 0 || col === 5) {
      square += "*";
    } else {
      square += " ";
    }
  }
  console.log(square);
}