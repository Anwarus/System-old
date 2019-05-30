const types = require('./../types');
const DefaultCommands = require('./DefaultCommands');
const GoalsCommands = require('./GoalsCommands');

const CommandsFactory = function CommandsFactory(program) {
    return {
        getCommandsObject: function getCommandsObject(managerName) {
            if (managerName === types.object.goal) return GoalsCommands(program);
            return DefaultCommands(program);
        }
    };
};

module.exports = CommandsFactory;
