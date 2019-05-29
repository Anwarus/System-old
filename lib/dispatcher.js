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

const dispatcher = {
    parse: function parse(args) {
        const parsedArgs = args.slice();

        // Get arguments without node and source file
        const parameters = args.slice(2, args.length);

        let managerName = 'Default';

        if (parameters.length >= 2) {
            if (Object.values(types.object).includes(parameters[0])) {
                managerName = parameters[0];
                parsedArgs.splice(2, 1);
            }
        }

        const commandsFactory = CommandsFactory(program);
        const commands = commandsFactory.getCommands(managerName);

        commands.applyAll();

        program.parse(parsedArgs);
    }
};

module.exports = dispatcher;
