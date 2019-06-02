const router = require('./../router');

const MarksCommands = function MarksCommands(program) {
    return {
        add: function add() {
            program
                .command('add')
                .description('Add a mark to current day')
                .action(function action() {
                    router.execute('mark', 'add');
                });
        }
    };
};

module.exports = MarksCommands;
