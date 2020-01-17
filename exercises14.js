function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  if(arrPenumpang.length===0){
      return []
  }

  output=[]
  
  for(i=0;i<arrPenumpang.length;i++){
    naikDari=""
    tujuan=""  
    penumpang=""
      hasil=0
      for(j=0;j<rute.length;j++){
          if(arrPenumpang[i][1]===rute[j]){
              hasil+=j
          }
          else if(arrPenumpang[i][2]===rute[j]){
            hasil=Math.abs(hasil-j)
        }
        
      }
      penumpang+=arrPenumpang[i][0]
      bayar=hasil*2000
      naikDari+=arrPenumpang[i][1]
      tujuan+=arrPenumpang[i][2]
      output.push({penumpang,naikDari,tujuan,bayar})
  }
 
return output;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]