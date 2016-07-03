/*
 * Copyright (c) 2015. Bond(China), java freestyle app
 */

define([
    'angular',
    'jquery',
    'angular-route',
    '/js/menu.js'
], function (ng, $, route, menuList) {
    'use strict';

    var listMenu = {};

    return ng.module('app', ['ngRoute', 'angular-ui'])

        .controller('MenuCtrl', ['$scope', '$location', function ($scope, $location) {

            /*菜单*/
            $scope.menuConf = {
                animateTime: 500,
                data: menuList,
                init: function(_listMenu){
                    // 保存菜单对象
                    listMenu = _listMenu;
                }
            };

        }]).controller('HeaderCtrl', ['$scope', function ($scope) {

        }]).controller('FooterCtrl', ['$scope', function ($scope) {

        }]).run(function ($rootScope) {
            $rootScope.$on('$routeChangeStart', function (event, current, previous) {

                if($.isFunction(listMenu.$path) && current.$$route.originalPath) {
                    listMenu.$path("#" + current.$$route.originalPath);
                }
            });
        });
});