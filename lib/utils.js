const utils = {
    getRandomId: function getRandomId(maxValue) {
        return Math.floor(Math.random() * maxValue + 1);
    }
};

module.exports = utils;
