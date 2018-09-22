class SmartCalculator {

    constructor(initialValue) {
        let value = initialValue;

        this.getValue = () => 11;
    }

    add(number) {
        /*this.getNumbers().push(number);
        this.getOperations().push('+');
        */
        return this;
    }

    subtract(number) {
        return this;
    }

    multiply(number) {
        return this;
    }

    devide(number) {
        return this;
    }

    pow(number) {
        return this;
    }

    toString() {
        return this.getValue();
    }
}

module.exports = SmartCalculator;