const types = require('./../types');
const GoalCommands = require('./GoalsCommands');

const CommandsFactory = function CommandsFactory(program) {
    return {
        getCommands: function getCommands(managerName) {
            if (managerName === types.object.goal) return GoalCommands(program);
        }
    };
};

module.exports = CommandsFactory;
