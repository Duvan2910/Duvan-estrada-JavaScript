let arr = ['1,','2','3'];
let [one, two, three] = arr;

console.log(one); //1
console.log(two); //2
console.log(three); //3


let a = ()=> {

  return [1,3,2];
};

let a, b, c =a, d = 8;
[a, d =6] = [2]; // a = 2 , b = 6

[c, d] = [d , c]; // c= 8,d = 4