'use strict'
const fs = require("fs")
const path = require('path')
/**
 * 
 *
 */
 module.exports = function  (_path) {
    let arrayOfModules = []
    console.log('__dirname',process.cwd(), __filename, process.env.PWD)
    let pathToDirectory = path.normalize(__dirname.split('/')
    .slice(0,-1).join('/') + '/' + _path)
    console.log('pathToDirectory',pathToDirectory)
    fs.readdirSync(pathToDirectory).forEach(file => {
     console.log('file', file)
    arrayOfModules.push(require(_path + '/' + file))
    });
    return arrayOfModules
 }