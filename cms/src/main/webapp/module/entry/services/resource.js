/*
 * Copyright (c) 2016. Bond(China), java freestyle app
 */

define([
    '../.md',
    'angular',
    'jquery',
    'underscore'
], function (md, ng, $, _) {

    md.factory('Resource', ['$resource', function($resource){

        return $resource('', {}, {
            login :{
                url     : '/user/login/:id',
                method  : 'post',
                isArray : false
            }
        });
    }]);
});