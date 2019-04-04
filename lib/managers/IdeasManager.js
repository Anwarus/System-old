const inquirer = require('inquirer');
const utils = require('./../utils');
const configuration = require('./../configuration');

const question = {
    type: 'input',
    name: 'name',
    message: 'What is your idea?'
};

const IdeasManager = function IdeasManager(data) {
    const ideas = data || {};

    return {
        add: function add() {
            const idea = {};
            idea['id'] = utils.getRandomId(configuration.MAX_ID_VALUE);

            return new Promise((resolve, reject) => {
                inquirer
                    .prompt(question)
                    .then(answers => {
                        idea['idea'] = answers.idea;
                        ideas['ideas'].push(idea);

                        resolve(ideas);
                    })
                    .catch(err => {
                        reject(err);
                    });
            });
        }
    };
};

module.exports = IdeasManager;
