// Should use require().GoalsManager probably
const GoalsManager = require('./GoalsManager');
const storage = require('./storage');
const types = require('./types');
const configuration = require('./configuration');

const dispatcher = {
    parse: function parse(object, action) {
        const stg = storage.getStorage(configuration.STORAGE);

        stg.load(object)
            .then(data => {
                let manager = null;
                if (object === types.object.goal) manager = GoalsManager(data);
                // else if (object === objectTypes.task) tasks[action]();
                // else if (object === objectTypes.idea) ideas[action]();
                manager[action]();
            })
            .catch(error => {
                console.warn('Błąd', error);
            });
    }
};

module.exports = dispatcher;
