// Should use require().GoalsManager probably
const GoalsManager = require('./GoalsManager');
const storage = require('./storage');
const types = require('./types');
const configuration = require('./configuration');

const dispatcher = {
    parse: function parse(object, action) {
        const storage = storage.getStorage();
        let data = null;

        if (object === types.object.goal);
        // else if (object === objectTypes.task) tasks[action]();
        // else if (object === objectTypes.idea) ideas[action]();
    }
};

module.exports = dispatcher;
