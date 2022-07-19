
function Calculator(first = 0, second = 0, operator) {
    this.firstNum = first;
    this.secondNum = second;
    this.operator = operator;

    this.calc = function () {
        switch (operator) {
            case '+': return first + second;
            case '-': return first - second;
            case '/': return first / second;
            case '*': return first * second;
        }
    }
};
let calc = new Calculator();
calc(1, 2, "+");
calc(3, 4, "-");