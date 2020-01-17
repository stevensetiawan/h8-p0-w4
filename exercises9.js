function checkAB(num) {
  // you can only write your code here!
  var distance=3
  for(i=0; i<num.length; i++){
      if(num[i]==='a'&&num[i+1+distance]==='b')
      {return true}
      else if(num[i]==='b'&&num[i+1+distance]==='a')
     { return true}
  }
  return false
 console.log(tampung) 
 console.log(tampung2)
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false