const inquirer = require('inquirer');
const colors = require('colors');
const uuidv4 = require('uuid/v4');

const GoalsManager = function GoalsManager(goals) {
    const subGoalsPropName = 'subGoals';
    const nestedPointerChar = String.fromCharCode(11169);

    const data = goals;

    data.list = (function verifyIntegrity(goalsToVerify) {
        return goalsToVerify.map(goal => {
            const modifiedGoal = { ...goal };

            if (subGoalsPropName in goal) {
                modifiedGoal.subGoals = verifyIntegrity(goal.subGoals);
            }

            if (goal.id === undefined) {
                modifiedGoal.id = uuidv4();
                return modifiedGoal;
            }

            return goal;
        });
    })(data.list);

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
            data.list.forEach(goal => {
                console.log(goal.name.bold);

                listNested(goal);
            });

            return new Promise(resolve => {
                resolve(data);
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
