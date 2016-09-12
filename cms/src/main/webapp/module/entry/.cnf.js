/*
 * Copyright (c) 2016. Bond(China), java freestyle app
 */

define(['./.md',
    './controllers/login',
], function (md, list) {
    'use strict';

    md.config(['$routeProvider', function ($routeProvider) {

         $routeProvider.when('/login', {
            templateUrl: 'module/entry/views/login.html',
            controller: 'LoginCtrl'
         });
    }]);
});