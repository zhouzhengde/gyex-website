/*
 * Copyright (c) 2016. Bond(China), java freestyle app
 */

define(['./.md',
    'app',
    './controllers/list',
], function (md, app, list) {
    'use strict';

    md.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/product-list', {
            templateUrl: 'module/product/views/list.html',
            controller: 'ListCtrl'
        }).when('/product-add', {
            templateUrl: 'module/product/add.html',
            controller: 'AddCtrl'
        });
    }]);
});