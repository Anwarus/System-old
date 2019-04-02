const inquirer = require('inquirer');
const colors = require('colors');

const GoalsManager = function GoalsManager(data) {
    const goals = data || {};
    const subGoalsPropName = 'subGoals';
    const nestedPointerChar = String.fromCharCode(11169);

    const listNested = function listNested(goal, level = 1) {
        if (subGoalsPropName in goal) {
            goal.subGoals.forEach(subGoal => {
                console.log(' '.repeat(level) + nestedPointerChar + ' ' + subGoal.name.green);
                const nextLevel = level + 1;
                listNested(subGoal, nextLevel);
            });
        }
    };

    return {
        list: function list() {
            const year = new Date().getFullYear().toString();
            // Get goals in current year
            const selectedGoals = goals.goals[year];

            selectedGoals.forEach(goal => {
                //const name = goal.name + ' '.repeat(30 - goal.name.length);
                console.log(goal.name.bold);

                listNested(goal);
            });
        },
        show: function show(id) {
            const year = new Date().getFullYear().toString();
            const selectedGoals = goals.goals[year];

            const selectedGoal = selectedGoals.find(goal => {
                return goal.id === parseInt(id, 10);
            });

            if (selectedGoal !== undefined) {
                console.log(selectedGoal.name);
            }
        }
    };
};

module.exports = GoalsManager;
