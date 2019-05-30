const DefaultCommands = function DefaultCommands(program) {
    return {
        test: function test() {
            program
                .command('test')
                .description('Testing function')
                .action(function action() {
                    console.log('testing default action test');
                });
        }
    };
};

module.exports = DefaultCommands;
