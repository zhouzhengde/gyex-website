/*
 * Copyright (c) 2016. Bond(China), java freestyle app
 */

define(['./.md',
    './controllers/user-list',
    './services/resource',
    './services/user'
], function (md) {
    'use strict';

    md.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/group-list', {
            templateUrl: 'module/system/views/group-list.html',
            controller: 'UserListCtrl'
        }).when('/menu-list', {
            templateUrl: 'module/system/views/menu-list.html',
            controller: 'UserListCtrl'
        }).when('/role-list', {
            templateUrl: 'module/system/views/role-list.html',
            controller: 'UserListCtrl'
        }).when('/resource-list', {
            templateUrl: 'module/system/views/resource-list.html',
            controller: 'UserListCtrl'
        }).when('/user-list', {
            templateUrl: 'module/system/views/user-list.html',
            controller: 'UserListCtrl'
        });
    }]);
});