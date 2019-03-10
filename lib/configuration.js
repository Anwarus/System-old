const types = require('./types');

const STORAGE = types.storage.disk;
const DISK_DATA_PATH = './data/';

const OBJECT_FILE_NAMES = {
    [types.object.goal]: 'goals',
    [types.object.idea]: 'ideas',
    [types.object.task]: 'tasks'
};

module.exports = {
    STORAGE,
    DISK_DATA_PATH,
    OBJECT_FILE_NAMES
};
