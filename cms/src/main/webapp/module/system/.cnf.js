/*
 * Copyright (c) 2016. Bond(China), java freestyle app
 */

define(['./.md',
    './controllers/user-list'
], function (md) {
    'use strict';

    md.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/user-list', {
            templateUrl: 'module/system/views/user-list.html',
            controller: 'UserListCtrl'
        });
    }]);
});