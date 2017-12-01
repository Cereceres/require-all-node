'use strict';

const assert = require('assert');
const { requireAll, requireAllSync } = require('../index');
describe('Test to requireall', () => {
    it('should esport a function', () => {
        assert(typeof requireAll === 'function');
    });

    it('should export a funcition what get all files', (done) => requireAll('../test/testing', (err, allFiles) => {
        assert(!err);
        assert.deepEqual(allFiles, [ 1, 'test2' ]);
        done();
    }));
    it('should return a promise if cb is not given', () => requireAll('../test/testing').then((allFiles) => {
        assert.deepEqual(allFiles, [ 1, 'test2' ]);
    }));

    it('should export a sync version', () => {
        const allFiles = requireAllSync('../test/testing');
        assert.deepEqual(allFiles, [ 1, 'test2' ]);
    });

    it('should export a sync version', () => {
        const allFiles = requireAllSync('../test/testing');
        assert.deepEqual(allFiles, [ 1, 'test2' ]);
    });

    it('should export a sync version', () => {
        const allFiles = requireAllSync('../test/testing', '.html');
        assert.deepEqual(allFiles, [ {} ]);
    });

    it('should export a funcition what get all files', (done) => requireAll('../test/testing', '.html', (err, allFiles) => {
        assert(!err);
        assert.deepEqual(allFiles, [ {} ]);
        done();
    }));
});
