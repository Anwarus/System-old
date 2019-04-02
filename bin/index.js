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
        dispatcher.parse(object, actions.show, id);
    });

program
    .command(`${actions.list} <object>`)
    .description('List new object to list')
    .action(function action(object) {
        dispatcher.parse(object, actions.list);
    });

program.parse(process.argv);
