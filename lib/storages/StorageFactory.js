const types = require('../types');

const DiskStorage = require('./DiskStorage');

const StorageFactory = function StorageFactory() {
    return {
        getStorage: function getStorage(storageName) {
            if (storageName === types.storage.disk) return DiskStorage();
            return DiskStorage();
        }
    };
};

module.exports = {
    StorageFactory
};
