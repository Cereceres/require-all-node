'use strict';

const assert = require('assert');
const { requireAll } = require('../index');
describe('Test to requireall', () => {
    it('should esport a function', () => {
        assert(typeof requireAll === 'function');
    });

    it('should esport a function', (done) => requireAll('../test/testing', (err, allFiles) => {
        assert(!err);
        assert(Array.isArray(allFiles));
        done();
    }));
});
