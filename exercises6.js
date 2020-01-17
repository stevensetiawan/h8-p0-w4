function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var tampung=[]
  for(i=1; i<=angka;i++){
      if(angka % i ===0){
        tampung.push(i)
  }
}
console.log(tampung)
var tampung2=[]
for(k=0;k<tampung.length;k++){
for(j=k;j<tampung.length;j++){
    if(tampung[k]*tampung[j]===angka){
        tampung2.push([tampung[k],tampung[j]])
    
    }
}
}
return (String(tampung2[tampung2.length-1][0]).length+String(tampung2[tampung2.length-1][1]).length);
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2