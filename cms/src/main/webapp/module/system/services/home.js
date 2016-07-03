/*
 * Copyright (c) 2016. Bond(China), java freestyle app
 */

define([
    '../.md',
    'angular',
    'jquery',
    'underscore'
], function (md, ng, $, _) {

    md.service('HomeService', ['$http', function ($http) {

        return {
            display: function () {
                console.log("Call Home Service!");
            }
        };
    }]);
});