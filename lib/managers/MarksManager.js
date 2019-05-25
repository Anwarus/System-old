const inquirer = require('inquirer');
const Rx = require('rxjs');
const uuidv4 = require('uuid/v4');

const questions = {
    mark: {
        type: 'number',
        name: 'mark',
        message: 'How good day was 0-10?'
    },
    reason: {
        type: 'input',
        name: 'reason',
        message: 'Tell a reason:'
    }
};

const MarksManager = function MarksManager(data) {
    const marks = data || {};

    return {
        add: function add() {
            let index = 0;
            const mark = {};
            const prompts = new Rx.Subject();

            return new Promise((resolve, reject) => {
                inquirer.prompt(prompts).ui.process.subscribe(
                    ({ answer }) => {
                        if (index === 0) {
                            mark.id = uuidv4();
                            mark.mark = answer;
                            mark.timestamp = new Date().toISOString();
                            mark.reasons = [];
                        }

                        if (index > 0 && answer !== '') mark.reasons.push(answer);

                        if (answer !== '') {
                            prompts.next(questions.reason);
                        } else prompts.complete();

                        index += 1;
                    },
                    err => {
                        reject(err);
                    },
                    () => {
                        marks.marks.push(mark);
                        resolve(marks);
                    }
                );

                prompts.next(questions.mark);
            });
        },
        list: function list() {
            console.log(marks);
        },
        summarize: function summarize(params) {
            console.log('Summarizing: ' + params);
        }
    };
};

module.exports = MarksManager;
