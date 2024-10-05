const calculate = () => {
    const firInpValue = +document.getElementById("first-num").value;
    const secInpValue = +document.getElementById("second-num").value;
    const oper = document.getElementById("operation").value;

    let result

    switch (oper) {
        case "+":
            result = firInpValue + secInpValue
            break

        case "-":
            result = firInpValue - secInpValue
            break

        case "/":
            result = firInpValue / secInpValue
            break

        case "*":
            result = firInpValue * secInpValue
            break

        default:
            result = ""

    }
    document.getElementById("answer").textContent = result;

}