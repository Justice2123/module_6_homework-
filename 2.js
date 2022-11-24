function simpleNumb (number) {
    if (!Number.isInteger(number) || number < 2 || number > 1000) {
        return 'Данные неверны';
    }
     let k = Math.sqrt(number);
     for (let i = 2; i <= k; i++)
       if (number % i === 0) {
        return 'не простое число';
       } return 'простое число'; 
   }
     console.log(simpleNumb(10));
     console.log(simpleNumb(0));
     console.log(simpleNumb(7));
