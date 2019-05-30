/* eslint-disable prefer-destructuring */
const program = require('commander');

const Commands = require('./commands/Commands');
const Manager = require('./managers/Manager');

const GoalCommands = require('./commands/GoalCommands');
const MarksManager = require('./managers/MarksManager');
const IdeasManager = require('./managers/IdeasManager');
const storage = require('./storage');
const types = require('./types');

const CommandsFactory = require('./commands/CommandsFactory');

const dispatcher = function Dispatcher() {
    function applyAll(commands) {
        for (const value in Object.values(commands)) {
            if (typeof value === 'function') value.call();
        }
    }

    function isManagerName(name) {
        if (Object.values(types.object).includes(name))
            return true;
        return false;
    }

    return {
        parse: function parse(args) {
            const parsedArgs = args.slice();

            // Get arguments without node and source file
            const parameters = args.slice(2, args.length);

            let managerName = 'Default';

            // Check if parameters can contain 'manager action' pair
            if (parameters.length >= 2) {
                if (isManagerName(parameters[0])) {
                    managerName = parameters[0];
                    parsedArgs.splice(2, 1);
                }
            }

            const commandsFactory = CommandsFactory(program);
            const commands = commandsFactory.getCommands(managerName);

            applyAll(commands);

            program.parse(parsedArgs);
        }
    }
};

module.exports = dispatcher;
