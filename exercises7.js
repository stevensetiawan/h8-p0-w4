function urutkanAbjad(str) {
  // you can only write your code here!
var alfabet = 'abcdefghijklmnopqrstuvwxyz'
var hasil=""
  for(j=0;j<alfabet.length;j++){
  for(i=0;i<str.length;i++){
      if(alfabet[j]===str[i]){
          hasil+=alfabet[j]
      }
  }
}
return hasil
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'