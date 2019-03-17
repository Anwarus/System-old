const inquirer = require('inquirer');

const GoalsManager = function GoalsManager(data) {
    const goals = data || {};

    return {
        list: function list() {
            const year = new Date().getFullYear().toString();
            const selectedGoals = goals.goals[year];

            selectedGoals.forEach(goal => {
                console.log(goal.name + ' - ' + goal.deadline);
            });
        }
    };
};

module.exports = GoalsManager;
