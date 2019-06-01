const configuration = require('./configuration');

const ManagerFactory = require('./managers/ManagerFactory');
const StorageFactory = require('./storages/StorageFactory');

const router = (function Router() {
    return {
        execute: function execute(managerName, actionName, options = {}) {
            const storageFactory = StorageFactory();
            const storage = storageFactory.getStorage(configuration.STORAGE);

            const managerFactory = ManagerFactory();

            storage
                .load(managerName)
                .then(data => {
                    const manager = managerFactory.getManager(managerName, data);
                    if (typeof manager[actionName] === 'function')
                        return manager[actionName](options);
                    return null;
                })
                .then(data => {
                    if (data !== undefined) {
                        storage.save(managerName, data).then(() => {
                            console.log('Succesfully introduced changes!');
                        });
                    }
                });
        }
    };
})();

module.exports = router;
