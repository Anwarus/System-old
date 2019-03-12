const fs = require('fs');

const types = require('./types');
const configuration = require('./configuration');

const diskStorage = {
    load: function load(object) {
        return new Promise((resolve, reject) => {
            fs.readFile(
                `${configuration.DISK_DATA_PATH}${configuration.OBJECT_FILE_NAMES[object]}.json`,
                (err, data) => {
                    return err ? reject(err) : resolve(JSON.parse(data));
                }
            );
        });
    },
    save: function save(object, data) {
        return new Promise((resolve, reject) => {
            fs.writeFile(
                `${configuration.DISK_DATA_PATH}${configuration.OBJECT_FILE_NAMES[object]}.json`,
                JSON.stringify(data),
                err => {
                    return err ? reject(err) : resolve();
                }
            );
        });
    }
};

function getStorage(type) {
    if (type === types.storage.disk) return diskStorage;
    return null;
}

module.exports = {
    getStorage
};
