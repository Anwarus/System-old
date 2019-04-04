// Should use require().GoalsManager probably
const GoalsManager = require('./managers/GoalsManager');
const MarksManager = require('./managers/MarksManager');
const IdeasManager = require('./managers/IdeasManager');
const storage = require('./storage');
const types = require('./types');
const configuration = require('./configuration');

const dispatcher = {
    parse: function parse(object, action, id = 0) {
        const stg = storage.getStorage(configuration.STORAGE);

        stg.load(object)
            .then(data => {
                let manager = null;
                if (object === types.object.goal) manager = GoalsManager(data);
                else if (object === types.object.mark) manager = MarksManager(data);
                // else if (object === objectTypes.task) tasks[action]();
                else if (object === types.object.idea) manager = IdeasManager(data);
                if (id !== 0) return manager[action](id);
                return manager[action]();
            })
            .then(data => {
                if (data !== undefined)
                    stg.save(object, data).then(() => {
                        console.log('Successfuly modified list!');
                    });
            })
            .catch(error => {
                console.warn('Error: ', error);
            });
    }
};

module.exports = dispatcher;
