const inquirer = require('inquirer');

const GoalsManager = function GoalsManager(data) {
    const goals = data || [];

    return {
        list: function list() {
            console.log(goals);
        }
    };
};

module.exports.GoalsManager = GoalsManager;
