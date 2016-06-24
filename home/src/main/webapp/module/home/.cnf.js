/*
 * Copyright (c) 2016. Bond(China), java freestyle app
 */

define(['./.md',
    './controllers/home',
    './services/home',
    './services/resource'
], function (md) {
    'use strict';

    md.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/home', {
            templateUrl: 'module/home/views/home.html',
            controller: 'HomeCtrl'
        }).otherwise({
            redirectTo: '/home'
        });
    }]);
});