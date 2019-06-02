const types = require('./../types');

const DefaultCommands = require('./DefaultCommands');
const GoalsCommands = require('./GoalsCommands');
const MarksCommands = require('./MarksCommands');

const CommandsFactory = function CommandsFactory(program) {
    return {
        getCommandsObject: function getCommandsObject(managerName) {
            let commands = null;

            if (managerName === types.object.goal) commands = GoalsCommands(program);
            else if (managerName === types.object.mark) commands = MarksCommands(program);
            else commands = DefaultCommands(program);

            return commands;
        }
    };
};

module.exports = CommandsFactory;
