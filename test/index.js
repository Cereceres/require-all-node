'use strict'

const assert = require('assert')
const requireall = require('../index')
describe('Test to requireall', function () {
    it('should esport a function', function () {
        assert(typeof requireall === 'function')
    })
    
    it('should esport a function', function () {
        console.log('__dirname ===',process.cwd(), __filename, process.env.PWD)
        let allFiles = requireall('../test/testing')
        assert(Array.isArray(allFiles))
    })
})