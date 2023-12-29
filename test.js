function calcTotalCandies(children, candy) {
let totalCandiesEaten
  let remainingCandy = candy % children
  remainingCandy > 0 ? totalCandiesEaten = candy - remainingCandy : totalCandiesEaten = candy
  
 console.log(totalCandiesEaten)
}

calcTotalCandies(3, 10) // expected output: 9
calcTotalCandies(4, 20) // expected output: 20
calcTotalCandies(6, 25) // expected output: 24
