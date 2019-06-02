const types = require('./../types');

const DefaultManager = require('./DefaultManager');
const GoalsManager = require('./GoalsManager');
const MarksManager = require('./MarksManager');

const ManagerFactory = function ManagerFactory() {
    return {
        getManager: function getManager(managerName, data) {
            let manager = null;

            if (managerName === types.object.goal) manager = GoalsManager(data);
            else if (managerName === types.object.mark) manager = MarksManager(data);
            else manager = DefaultManager();

            return manager;
        }
    };
};

module.exports = ManagerFactory;
