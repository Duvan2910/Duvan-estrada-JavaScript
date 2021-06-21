const test = (a, b = 3, c = 42) => {
    return a + b + c;
  }
  console.log(test(5)); //50 

  function test(a, b = 3, c = 45) {

    return a + b + c;
     console.log(test(5)); //50
  }