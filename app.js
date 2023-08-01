function fibonacciCalculator(n) {
  if (n <= 0) {
    console.log("Error please key in a positive integer");
  }
  else if(n === 1)
  {
    return 1;
  }
  let prevNo = 0;
  let CurrentNo = 1;
  for(i=2;i<=n;i++){
   const temp = CurrentNo;
   CurrentNo = prevNo+CurrentNo;
   prevNo = temp;
  }
  return CurrentNo;
}

var result = fibonacciCalculator(10);
console.log(result);



