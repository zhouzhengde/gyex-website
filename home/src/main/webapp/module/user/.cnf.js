/*
 * Copyright (c) 2016. Bond(China), java freestyle app
 */

define(['./.md',
    './controllers/register',
    './controllers/login',
    './controllers/center'
], function (md) {
    'use strict';

    md.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/user/register', {
            templateUrl: 'module/user/views/register.html',
            controller: 'RegisterCtrl'
        }).when('/user/login', {
            templateUrl: 'module/user/views/login.html',
            controller: 'LoginCtrl'
        }).when('/user/center', {
            templateUrl: 'module/user/views/center.html',
            controller: 'UserCenterCtrl'
        });
    }]);
});