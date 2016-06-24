/*
 * Copyright (c) 2015. Bond(China), java freestyle app
 */

define([
    'angular',
    'jquery',
    'angular-route'
], function (ng, $) {
    'use strict';

    return ng.module('app', ['ngRoute']).controller('HeaderCtrl', ['$scope', function($scope){

        // bind nav alt style
        $(".nav.navbar-nav > li").bind('click', function(){
            $(this).addClass('active').siblings().removeClass('active');
        });

    }]).controller('FooterCtrl', ['$scope', function($scope){

    }]);
});