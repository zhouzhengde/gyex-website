/*
 * Copyright (c) 2016. Bond(China), java freestyle app
 */

define(['./.md',
    './controllers/ctrl',
], function (md, list) {
    'use strict';

    md.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/support', {
         templateUrl: 'module/support/views/tpl.html',
         controller: 'SupportCtrl'
         });
    }]);
});