const inquirer = require('inquirer');

const questions = [
    {
        type: 'number',
        name: 'mark',
        message: 'How good day was 0-10?'
    }
];

const MarksManager = function MarksManager(data) {
    const marks = data || {};

    return {
        add: function add() {
            return new Promise((resolve, reject) => {
                inquirer
                    .prompt(questions)
                    .then(answers => {
                        marks.marks.push({
                            mark: answers.mark,
                            timestamp: new Date().toISOString()
                        });
                        resolve(marks);
                    })
                    .catch(err => {
                        reject(err);
                    });
            });
        },
        list: function list() {
            console.log(marks);
        }
    };
};

module.exports = MarksManager;
