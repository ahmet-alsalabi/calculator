const calculate = () => {
    const firInpValue = +document.getElementById("first-num").value;
    const secInpValue = +document.getElementById("second-num").value;
    const oper = document.getElementById("operation").value;

    const plus = () => {
        return firInpValue + secInpValue;

    }


    const multiply = () => {
        return firInpValue * secInpValue;

    }


    const divide = () => {
        return firInpValue / secInpValue;

    }


    const minus = () => {
        return firInpValue - secInpValue;

    }


    let result

    switch (oper) {
        case "+":
            result = plus(firInpValue, secInpValue);
            break

        case "-":
            result = minus(firInpValue, secInpValue);
            break

        case "/":
            result = divide(firInpValue, secInpValue);
            break

        case "*":
            result = multiply(firInpValue, secInpValue);
            break

        default:
            result = ""

    }
    document.getElementById("answer").textContent = result;

}