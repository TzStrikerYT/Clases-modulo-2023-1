let square = ""
for (i = 0; i < 10; i++){
    for(j = 0; j < 10; j++)i === 0 || i === 9 || j === 0 || j === 9 ? square += "*" : square += "" 
square += "\n"
}
console.log(square)