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


Calculator.prototype.mathIt = function(strFun, inAry)
{
    var ret;
    try{
        ret = eval("this."+strFun)(inAry[0], inAry[1]);
    } catch(err)
    {
        throw "Can not run " + strFun;        
    }
    return ret;
}

