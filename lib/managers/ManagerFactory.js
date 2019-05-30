const types = require('./../types');
const DeaultManager = require('./DefaultManager');
const GoalsManager = require('./GoalsManager');

const ManagerFactory = function ManagerFactory() {
    return {
        getManager: function getManager(managerName) {
            if (managerName === types.object.goal) return GoalsManager();
            return DafaultManager();
        }
    };
};

module.exports = ManagerFactory;
