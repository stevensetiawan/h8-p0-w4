function changeMe(arr) {
    var hasil={}
  // you can only write your code here!
  for(i=1;i<=arr.length;i++){
      for(j=0;j<arr[i].length;i++){
        return [arr[j]+arr[j+1]]={'first name':arr[j],'lastName':arr[j+1],'gender':arr[j+2],'age':arr[j+3]}   
      }
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""