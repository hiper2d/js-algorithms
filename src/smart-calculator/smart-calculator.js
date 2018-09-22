class SmartCalculator {

    constructor(initialValue) {
        let numbers = [initialValue];
        let operators = [];

        this.getNumbers = function() {
            return numbers;
        };

        this.setNumbers = (stack) => numbers = stack;
        this.getOperators = () => operators;
        this.setOperators = (stack) => operators = stack;
    }

    add(number) {
        this.getNumbers().push(number);
        this.getOperators().push('+');
        return this;
    }

    subtract(number) {
        this.getNumbers().push(number);
        this.getOperators().push('-');
        return this;
    }

    multiply(number) {
        this.getNumbers().push(number);
        this.getOperators().push('*');
        return this;
    }

    devide(number) {
        this.getNumbers().push(number);
        this.getOperators().push('/');
        return this;
    }

    pow(number) {
        this.getNumbers().push(number);
        this.getOperators().push('^');
        return this;
    }

    toString() {
        calculateOperationsInReversedOrder(this, ['^']);
        calculateOperationsInDirectOrder(this, ['*', '/']);
        calculateOperationsInDirectOrder(this, ['+', '-']);
        return this.getNumbers()[0];
    }
}

function calculateOperationsInReversedOrder(calculator, operations) {
    let numberStack = [];
    let operationStack = [];

    while (calculator.getNumbers().isNotEmpty()) {
        numberStack.push(calculator.getNumbers().pop());
        calculateIfPossible(numberStack, operationStack, operations, true);

        if (calculator.getOperators().isNotEmpty()) {
            operationStack.push(calculator.getOperators().pop());
        }
    }
    calculator.setNumbers(numberStack.reverse());
    calculator.setOperators(operationStack.reverse())
}

function calculateOperationsInDirectOrder(calculator, operations) {
    let numberStack = [];
    let operationStack = [];

    while (calculator.getNumbers().isNotEmpty()) {
        numberStack.push(calculator.getNumbers().shift());
        calculateIfPossible(numberStack, operationStack, operations);

        if (calculator.getOperators().isNotEmpty()) {
            operationStack.push(calculator.getOperators().shift());
        }
    }
    calculator.setNumbers(numberStack);
    calculator.setOperators(operationStack)
}

function calculateIfPossible(numberStack, operationStack, operations, isReversedOperationOrder) {
    if (
        numberStack.length >= 2
        && operationStack.length >= 1
        && (isOperationIn(operationStack.lastItem(), operations))
    ) {
        performOperationOnStacks(numberStack, operationStack, isReversedOperationOrder);
    }
}

function performOperationOnStacks(numberStack, operationStack, isReversedOperationOrder) {
    let val2 = numberStack.pop();
    let val1 = numberStack.pop();
    let res = isReversedOperationOrder
        ? performOperation(val2, val1, operationStack.pop())
        : performOperation(val1, val2, operationStack.pop());

    numberStack.push(res);
}

function performOperation(value1, value2, operation) {
    return value1.applyOperation(operation, value2);
}

function isOperationIn(value, operations) {
    return operations.find(op => op === value);
}

Number.prototype.applyOperation = function(operation, number) {
    let result;
    switch(operation) {
        case '+':
            result = this + number;
            break;
        case '-':
            result = this - number;
            break;
        case '*':
            result = this * number;
            break;
        case '/':
            result = this / number;
            break;
        case '^':
            result = Math.pow(this, number);
            break;
    }
    return result;
};

Array.prototype.lastItem = function() {
    return this[this.length - 1];
};

Array.prototype.isNotEmpty = function() {
    return this.length !== 0;
};

module.exports = SmartCalculator;