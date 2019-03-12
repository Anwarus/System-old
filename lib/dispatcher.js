// Should use require().GoalsManager probably
const GoalsManager = require('./managers/GoalsManager');
const MarksManager = require('./managers/MarksManager');
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
                else if (object === types.object.mark) manager = MarksManager(data);
                // else if (object === objectTypes.task) tasks[action]();
                // else if (object === objectTypes.idea) ideas[action]();
                return manager[action]();
            })
            .then(data => {
                return stg.save(object, data);
            })
            .then(() => {
                console.log('Successfuly modified list!');
            })
            .catch(error => {
                console.warn('Error: ', error);
            });
    }
};

module.exports = dispatcher;
