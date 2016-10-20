'use strict';

module.exports = function(app) {
    //var module = require(app.locals.getCtrlPath('example'));
    var module = require('./../controller/example');

    app.get('/exampleinv1', module.testExample);
    
};
