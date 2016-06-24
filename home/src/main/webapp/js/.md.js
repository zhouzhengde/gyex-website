/*
 * Copyright (c) 2015. Bond(China), java freestyle app
 */

define([
    'angular',
    'jquery',
    'underscore',
    'angular-route'
], function (ng, $, _) {
    'use strict';

    return ng.module('app', ['ngRoute']).controller('HeaderCtrl', ['$scope', function ($scope) {

        // 绑定菜单的切换
        $(".nav.navbar-nav > li").bind('click', function () {
            $(this).addClass('active').siblings().removeClass('active');
        });

        // 对菜单的状态进行修正
        var intiMenuState = function (hashKey) {

            var home = "#/home";
            var currentModule = hashKey || window.location.hash || home;
            currentModule = currentModule.substring(currentModule.indexOf("#"));
            var menuList = $("#main-menu").find("li");
            var flag = false;
            _.each(menuList, function (v) {

                $(v).removeClass("active");

                if (flag) {
                    return;
                }

                var href = $(v).find("a").eq(0).attr("href");
                var toggle = $(v).attr("data-toggle");
                if (currentModule.indexOf(href) != -1) {
                    $(v).addClass("active");
                    flag = true;
                } else {
                    if (currentModule.indexOf(toggle) != -1) {
                        $(v).addClass("active");
                        flag = true;
                    }
                }
            });
        };

        intiMenuState();

        $scope.doLoginOrRegister = function (hashKey) {
            intiMenuState(hashKey);
            console.log(">>Login Or Register!")
        };

    }]).controller('FooterCtrl', ['$scope', function ($scope) {

    }]);
});