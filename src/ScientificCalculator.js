function Calculator() {
}

Calculator.prototype.add = function(num1, num2) {
    return num1 + num2;
};

Calculator.prototype.subtract = function(num1, num2) {
    return num1 - num2;
};

Calculator.prototype.multiply = function(num1, num2) {
    return num1 * num2;
};

Calculator.prototype.divide = function(num1, num2) {
    var ret = num1 / num2;
    if (ret == Infinity) ret = NaN;
    return ret;
};

//-- ScientificCalculator
ScientificCalculator.prototype = new Calculator();
function ScientificCalculator() {
    Calculator.apply(this);
}

ScientificCalculator.prototype.sin = function(num1) {
    return Math.sin(num1);
};

ScientificCalculator.prototype.cos = function(num1) {
    return Math.cos(num1);
};

ScientificCalculator.prototype.tan = function(num1) {
    return Math.tan(num1);
};

ScientificCalculator.prototype.log = function(num1) {
    return Math.log(num1);
};
