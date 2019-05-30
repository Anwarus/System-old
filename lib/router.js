const ManagerFactory = require('./managers/ManagerFactory');

const router = (function Router() {
    return {
        execute: function execute(managerName, actionName, options = {}) {
            const managerFactory = ManagerFactory();

            const manager = managerFactory.getManager(managerName);

            if (typeof manager[actionName] === 'function') manager[actionName](options);
        }
    };
})();

module.exports = router;
