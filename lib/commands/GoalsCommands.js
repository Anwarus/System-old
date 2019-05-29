const Commands = require('./Commands');

const GoalsCommands = function GoalsCommands(program) {
    const goalCommands = Object.create(Commands());

    goalCommands.commands.finish = function finish() {};

    return goalCommands;
};

module.exports = GoalsCommands;
