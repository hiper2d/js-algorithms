const COINS = [
    { type: 'H', denomination: 50 },
    { type: 'Q', denomination: 25 },
    { type: 'D', denomination: 10 },
    { type: 'N', denomination: 5 },
    { type: 'P', denomination: 1 }
];

module.exports = function makeExchange(currency) {
    let returnObject = {};

    if (currency <= 0) {
        return returnObject;
    }

    if (currency > 10000) {
        returnObject.error = "You are rich, my friend! We don't have so much coins for exchange";
        return returnObject;
    }

    let change = currency;
    let coinsOfType, coin;

    for (let i = 0; i < COINS.length; i++) {
        coin = COINS[i];
        coinsOfType = calculateCoinsWithChange(change, coin);
        change = addCoinsToResultObjectAndGetChange(returnObject, coinsOfType);
        if (change === 0) {
            break;
        }
    }

    return returnObject;
};

function calculateCoinsWithChange(currency, coin) {
    return {
        coins: calculateCoins(currency, coin),
        change: calculateChange(currency, coin),
        type: coin.type
    }
}

function calculateCoins(currency, coin) {
    return Math.floor(currency / coin.denomination);
}

function calculateChange(currency, coin) {
    return currency % coin.denomination;
}

function addCoinsToResultObjectAndGetChange(returnObject, iterationResult) {
    if (iterationResult.coins !== 0) {
        returnObject[iterationResult.type] = iterationResult.coins;
    }
    return iterationResult.change;
}