function sumLimit(a, b){
  let sum = a + b;
  let digitsA = a.toString().length;
  let digitsSum = sum.toString().length;
  
  if (digitsA == digitsSum) {
    return sum;
  }
  else if (digitsSum > digitsA) {
    return a;
  }
}
