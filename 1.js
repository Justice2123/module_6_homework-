let arr = [4,8,15,16,23,42, "null", 0];
let even = 0;
let odd = 0;
let zero = 0;

function typeOfArray () {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            if (arr[i] === 0) {
                zero++;
            } else if (arr[i]%2===0) {
                even++;
            } else {
                odd++;
            }
        }
    }
    console.log(`even ${even}; odd ${odd}; zero ${zero};`)
} 

typeOfArray();