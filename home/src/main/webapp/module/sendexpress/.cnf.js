/*
 * Copyright (c) 2016. Bond(China), java freestyle app
 */

define(['./.md',
    './controllers/ctrl',
], function (md, list) {
    'use strict';

    md.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/send-express', {
         templateUrl: 'module/sendexpress/views/view.html',
         controller: 'SendExpressCtrl'
         });
    }]);
});