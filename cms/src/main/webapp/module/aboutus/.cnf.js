/*
 * Copyright (c) 2016. Bond(China), java freestyle app
 */

define(['./.md',
    './controllers/aboutus',
], function (md, list) {
    'use strict';

    md.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/aboutus', {
         templateUrl: 'module/aboutus/views/aboutus.html',
         controller: 'SupportCtrl'
         });
    }]);
});