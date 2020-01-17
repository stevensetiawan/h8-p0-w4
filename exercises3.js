function cariMedian(arr) {
    if(arr.length%2!==0){
    median=Math.floor(arr.length/2)
    return arr[median]
    }
    else if(arr.length%2===0){
        median1=(arr.length/2-1)
        median2=(arr.length/2)
        median=((arr[median1]+arr[median2])/2)
        return median
    }
  // you can only write your code here!
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5