const types = require('./types');

const STORAGE = types.storage.disk;
const DISK_DATA_PATH = './data/';

// Is used during generating value of random id
const MAX_ID_VALUE = 2147483647;

const OBJECT_FILE_NAMES = {
    [types.object.goal]: 'goals',
    [types.object.idea]: 'ideas',
    [types.object.task]: 'tasks',
    [types.object.mark]: 'marks'
};

module.exports = {
    STORAGE,
    DISK_DATA_PATH,
    MAX_ID_VALUE,
    OBJECT_FILE_NAMES
};
