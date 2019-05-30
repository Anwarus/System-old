const router = require('./../router');

const GoalsCommands = function GoalsCommands(program) {
    return {
        list: function list() {
            program
                .command('list')
                .description('List all goals')
                .action(function action() {
                    router.execute('goal', 'list');
                });
        }
    };
};

module.exports = GoalsCommands;
