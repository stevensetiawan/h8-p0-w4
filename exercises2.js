function fpb(angka1, angka2) {
  // you can only write your code here!
  var tampung1=[]
  var tampung2=[]
  for(i=0;i<=angka1;i++){
  if(angka1%i===0){
      tampung1.push(i)
  }
  
}
for(j=0;j<=angka1;j++){
if(angka2%j===0){
    tampung2.push(j)
}
}
for(l=tampung2.length-1;l>=0;l--){
for(k=tampung1.length-1;k>=0;k--){
    if (tampung1[k]===tampung2[l]){
    return tampung2[l]
    }
}
}
}
// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1