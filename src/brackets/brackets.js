Array.prototype.lastItem = function() {
    return this[this.length - 1];
};

Array.prototype.beforeLastItem = function() {
    return this[this.length - 2];
};

Array.prototype.removeTwoLastItems = function() {
    this.pop();
    this.pop();
};

Array.prototype.hasTwoItemsOrMore = function() {
    return this.length >= 2;
};

Array.prototype.isEmpty = function() {
    return this.length === 0;
};


module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let helper = parseBracketsConfig(bracketsConfig);
    [...str].forEach(symbol => fillStack(stack, symbol, helper));
    return stack.isEmpty();
};

function parseBracketsConfig(bracketsConfig) {
    let closes = '';
    let pairs = bracketsConfig.map(config => {
        config.open = config[0];
        config.close = config[1];
        closes += config.close;
        return config;
    });

    let hasPair = (open, close) => pairs.find(p => p.open === open && p.close === close) != null;
    let isCloseSymbol = (symbol) => closes.includes(symbol);

    return { hasPair: hasPair, isCloseBracket: isCloseSymbol };
}

function fillStack(stack, symbol, helper) {
    stack.push(symbol);
    if (stack.hasTwoItemsOrMore() && helper.isCloseBracket(symbol)) {
        let close = stack.lastItem();
        let open = stack.beforeLastItem();
        if (helper.hasPair(open, close)) {
            stack.removeTwoLastItems();
        }
    }
}