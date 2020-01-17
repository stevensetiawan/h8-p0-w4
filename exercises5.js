function ubahHuruf(kata) {
  // you can only write your code here!
/*var kamus="abcdefghijklmnopqrstuvwxyz"
  var tampung=[]
  var hasil=[]
  var hasil2=""
  for(i=0; i<kata.length;i++){
      tampung.push(kata[i])
  }
  for(k=0;k<tampung.length;k++){
      for(j=0;j<kamus.length;j++){
      if(tampung[k]===kamus[j]){
          hasil.push(kamus[j+1])
      }
  }
}
for(l=0;l<hasil.length;l++){
    hasil2 += hasil[l]
}
return hasil2;
}
*/
  var hasil2=0
  var hasil3=""
  for(i=0; i<kata.length; i++){
      hasil2+=(kata.charCodeAt(i)+1)
      hasil3+=String.fromCharCode(hasil2)
      hasil2=0
  }
return hasil3;
}
// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu