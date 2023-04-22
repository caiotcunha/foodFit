class PermissionError extends Error {
    constructor(msg) {
        super(msg);
        this.name = 'PermissionErros';
    }
}

module.exports = PermissionError;