// Should use require().GoalsManager probably
const GoalsManager = require('./managers/GoalsManager');
const MarksManager = require('./managers/MarksManager');
const IdeasManager = require('./managers/IdeasManager');
const storage = require('./storage');
const types = require('./types');
const configuration = require('./configuration');

const dispatcher = {
    parse: function parse(object, action, params = {}) {
        const stg = storage.getStorage(configuration.STORAGE);

        stg.load(object)
            .then(data => {
                let manager = null;
                if (object === types.object.goal) manager = GoalsManager(data);
                else if (object === types.object.mark) manager = MarksManager(data);
                else if (object === types.object.idea) manager = IdeasManager(data);

                return manager[action](params);
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
