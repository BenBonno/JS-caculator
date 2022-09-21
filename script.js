// const maCalculette = () => {

//     let firstValue = parseInt(prompt("firstValue"));
//     let operator = prompt("operator");
//     let secondValue = parseInt(prompt("secondValue"));


//     switch (operator) {
//         case "+":
//             console.log(firstValue + secondValue);
//             break;

//         case "-":
//             console.log(firstValue - secondValue);
//             break;

//         case "*":
//             console.log(firstValue * secondValue);
//             break;

//         case "/":
//             console.log(firstValue / secondValue);
//             break;

//         default:
//             console.log("Invalid Operator");

//     }
// }

// // maCalculette()

// EXERCICE 2

const playerName = prompt("What's your fuckin' name ?")
const random = Math.floor(Math.random() * 100) + 1;
let answer

do {
    answer = parseInt(prompt("Give me a number between 1 and 100", "0"), 10);
    if (isNaN(answer)) {
        alert("I said a number noob");
    }

}
while (isNaN(answer));


