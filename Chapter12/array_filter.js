let number=[0,10,2,3,4,5,6,7];
let condition=value=>value<10;     //value is less than 10
let filtered=number.filter(condition);    
console.log(filtered);                //[0,2,3,4,5,6,7]
console.log(number);                 //[0,10,2,3,4,5,6,7] original array unchanged