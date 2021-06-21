let obj = {h:100, s: true};
let {h, s} = obj;
 console.log (h); // 100
 console.log(s); // true

 let a, b;
 ({a, b}= {a: 'hello' , b: 'jack'});

 console.log(a + b); // hello jack


 let o = {h: 42,s: tru};
 var {h: foo, s: bar} = o;

 // console.log(h); // Error
 console.log(foo); // 42
 
