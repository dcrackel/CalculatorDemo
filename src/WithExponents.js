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



//-- add functions to Calculator

function withExponents() {
    
    Calculator.prototype.pow = function(num1, num2) {
        return Math.pow(num1,num2);
    };

    Calculator.prototype.multiplyExp = function(num1, num2) {
        var ret1 = this.pow(num1[0], num1[1]);
        var ret2 = this.pow(num2[0], num2[1]);
        return ret1 * ret2;
    };

    Calculator.prototype.divideExp = function(num1, num2) {
        var ret1 = this.pow(num1[0], num1[1]);
        var ret2 = this.pow(num2[0], num2[1]);
        return ret1 / ret2;
    };    
    
}


