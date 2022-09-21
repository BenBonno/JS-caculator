const maCalculette = () => {

    let firstValue = parseInt(prompt("firstValue"));
    let operator = prompt("operator");
    let secondValue = parseInt(prompt("secondValue"));


    switch (operator) {
        case "+":
            console.log(firstValue + secondValue);
            break;

        case "-":
            console.log(firstValue - secondValue);
            break;

        case "*":
            console.log(firstValue * secondValue);
            break;

        case "/":
            console.log(firstValue / secondValue);
            break;

        default:
            console.log("Invalid Operator");

    }
}

maCalculette()