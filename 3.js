function sum(x) {
    return function(y) {
        return x + y;
    };
}

console.log( sum(1)(2), sum(2)(5), sum(10)(2) );