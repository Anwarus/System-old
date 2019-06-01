const types = require('./../types');
const DefaultManager = require('./DefaultManager');
const GoalsManager = require('./GoalsManager');

const ManagerFactory = function ManagerFactory() {
    return {
        getManager: function getManager(managerName, data) {
            if (managerName === types.object.goal) return GoalsManager(data);
            return DefaultManager();
        }
    };
};

module.exports = ManagerFactory;
