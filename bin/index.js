#!/usr/bin/env node

const program = require('commander');
const dispatcher = require('./../lib/dispatcher');

const actions = {
    add: 'add',
    edit: 'edit',
    delete: 'delete',
    show: 'show',
    list: 'list'
};

program
    .command(`${actions.add} <object>`)
    .description('Add new object to list')
    .action(function action(object) {
        dispatcher.parse(object, actions.add);
    });

program
    .command(`${actions.edit} <object>`)
    .description('Edit new object to list')
    .action(function action(object) {
        dispatcher.parse(object, actions.edit);
    });

program
    .command(`${actions.delete} <object>`)
    .description('Delete new object to list')
    .action(function action(object) {
        dispatcher.parse(object, actions.delete);
    });

program
    .command(`${actions.show} <object> <id>`)
    .description('Show new object to list')
    .action(function action(object, id) {
        dispatcher.parse(object, actions.show, { id });
    });

program
    .command(`${actions.list} <object>`)
    .description('List new object to list')
    .action(function action(object) {
        dispatcher.parse(object, actions.list);
    });

// Goal extensions
program
    .command('finish goal <id>')
    .description('Finish given goal')
    .action(function action(object, id) {
        dispatcher.parse('goal', 'finish', { id });
    });

// Marks extensions
program
    .command('summarize mark')
    .description('Prints summary of latest marks')
    .option('-r, --range <range>', 'How many range to summarize')
    .action(function action(options) {
        dispatcher.parse('mark', 'summarize', options);
    });

program.parse(process.argv);
