function cariModus(arr) {
    var tampung=[[arr[0],0]]
    console.log(tampung)
  // you can only write your code here!
  for(j=0;j<arr.length;j++){
     var  val=false
  for(i=0;i<tampung.length;i++){
      if(arr[j]===tampung[i][0]){
          tampung[i][1]++
          val=true
      }
  }
  if(val===false){
      tampung.push([arr[j],1])
  }
}
console.log(tampung)
for(k=0;k<tampung.length;k++){
    for(l=0; l<tampung.length-1;l++){
        if(tampung[l][1]<tampung[l+1][1]){
            temp=tampung[l]
            tampung[l]=tampung[l+1]
            tampung[l+1]=temp
        }
    }
}
if(tampung.length===1){
    return -1
}
if(tampung.length===arr.length){
    return -1
}
return tampung[0][0]
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1