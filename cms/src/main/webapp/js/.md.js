/*
 * Copyright (c) 2015. Bond(China), java freestyle app
 */

define([
    'angular',
    'jquery',
    'angular-route',
    'ui-bootstrap',
    '/js/menu.js',
    'jquery-bootstrap'
], function (ng, $, route, ui, menuList, jqboot) {
    'use strict';

    // 设置全局的alert 样式
    $.messager.model = {
        ok: {text: "确认", classed: 'btn-primary'},
        cancel: {text: "取消", classed: 'btn-warning'},
        title: {
            warn: "警告",
            info: "提示"
        }
    };

    var listMenu = {};

    return ng.module('app', ['ngRoute', 'angular-ui', "ui.bootstrap"])

        .controller('MenuCtrl', ['$scope', '$location', function ($scope, $location) {

            /*菜单*/
            $scope.menuConf = {
                animateTime: 500,
                data: menuList,
                init: function (_listMenu) {
                    // 保存菜单对象
                    listMenu = _listMenu;
                }
            };

        }]).controller('HeaderCtrl', ['$scope', function ($scope) {

            /*页头*/

        }]).controller('FooterCtrl', ['$scope', function ($scope) {

            /*页脚*/

        }]).run(function ($rootScope) {
            $rootScope.$on('$routeChangeStart', function (event, current, previous) {

                if ($.isFunction(listMenu.$path) && current.$$route && current.$$route.originalPath) {
                    listMenu.$path("#" + current.$$route.originalPath);
                }
            });
        }).factory('$pager', function ($rootScope) {

            return {
                pageIndex: 0,
                pageSize: 5,
                condition: {},
                total: 0,
                previous: 0,
                next: 0,
                first: 1,
                last: 0,
                result: []
            };
        });
});