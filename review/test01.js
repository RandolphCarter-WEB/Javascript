let factorial = (function () {
    let save = {};
    let fact = function (number) {
      if (number > 0) {
        let saved = save[number - 1] || fact(number - 1);
        let result = number * saved;
        save[number] = result;
        console.log(saved, result);
        console.dir(save);
        return result;
      } else {
        return 1;
      }
    };
    return fact;
  })();
  
  factorial(7);
  factorial(7);