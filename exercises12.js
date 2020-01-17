function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
 // you can only write your code here!
                var leftOver=0
                var totalProfit=0
                var hasil=[]
                var product=""
                var pembeli=[]
                if(shoppers.length===0)
                {return []}
                for(k=0;k<listBarang.length;k++){
                    for(l=0;l<shoppers.length;l++){
                    }
                }
                for(j=0;j<listBarang.length;j++){
                    leftOver=listBarang[j][2]
                    product+=listBarang[j][0]
                   for(i=0;i<shoppers.length;i++){
                       if(shoppers[i].product===listBarang[j][0]&&shoppers[i].amount<=listBarang[j][2]&&leftOver>=shoppers[i].amount){ 
                           leftOver-=shoppers[i].amount
                           totalProfit=shoppers[i].amount*listBarang[j][1]
                           pembeli.push(shoppers[i].name)
                           console.log(leftOver)
                        }
                    }
                    hasil.push({product,pembeli,leftOver,totalProfit})
                    pembeli=[]
                    product=""
                    totalProfit=0
                   }
return hasil;
}

// TEST CASES
console.log(countProfit([
{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, 
{name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, 
{name: 'Rani', product: 'Sweater Uniklooh', amount: 2}
]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]