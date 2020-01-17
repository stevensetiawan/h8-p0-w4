function highestScore (students) {
  // Code disini
  var tampung=[]
  hasil={}
  for(i =0;i<students.length;i++){
    val=false
    for(j=0;j<tampung.length;j++){
        console.log(tampung[j])
      if(tampung[j].class===students[i].class&&tampung[j].score<students[i].score){
          tampung[j]=students[i]
            val=true;
      }else if(tampung[j].class===students[i].class){
          val=true
      }
    }
       if(val===false)
       {
        tampung.push(students[i])
        }
  }
for(k=0;k<tampung.length;k++){
    hasil[tampung[k].class]=tampung[k]
    delete tampung[k]
}
  return hasil
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}