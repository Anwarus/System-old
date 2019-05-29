const Commands = function Commands() {
    const commands = {};

    return {
        getCommands: function getCommands() {
            return commands;
        },
        applyAll: function applyAll() {
            for (const value in Object.values(commands)) {
                if (typeof value === 'function') value.call();
            }
        }
    };
};

module.exports = Commands;
