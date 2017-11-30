const fs = require('fs');
const path = require('path');


const requireFile = (pathToFile) => require(pathToFile);

exports.requireAll = function(_path, cb) {
    const parentDir = path.dirname(module.parent.filename);
    const pathToDirectory = path.resolve(parentDir, _path);
    if (typeof cb === 'function') return fs.readdir(pathToDirectory, (err, files) => {
        if (err) return cb(err);
        const arrayOfModules = files.map((file) => {
            const pathToFile = path.resolve(pathToDirectory, file);
            return requireFile(pathToFile);
        });
        cb(null, arrayOfModules);
    });

    return new Promise((resolve, reject) => {
        fs.readdir(pathToDirectory, (err, files) => {
            if (err) return reject(err);
            const arrayOfModules = files.map((file) => {
                const pathToFile = path.resolve(pathToDirectory, file);
                return requireFile(pathToFile);
            });
            resolve(arrayOfModules);
        });
    });
};

exports.requireAllSync = function(_path, cb) {
    const parentDir = path.dirname(module.parent.filename);
    const pathToDirectory = path.resolve(parentDir, _path);
    const files = fs.readdirSync(pathToDirectory);

    return files.map((file) => {
        const pathToFile = path.resolve(pathToDirectory, file);
        return requireFile(pathToFile);
    });
};
