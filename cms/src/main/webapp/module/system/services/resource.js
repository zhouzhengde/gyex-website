/*
 * Copyright (c) 2016. Bond(China), java freestyle app
 */

define([
    '../.md',
    'angular',
    'jquery',
    'underscore'
], function (md, ng, $, _) {

    md.factory('UserResource', ['$resource', function ($resource) {

        return $resource('', {}, {
            get: {
                url: 'user/:id',
                method: 'get',
                isArray: true
            },
            add: {
                url: 'user/:id',
                method: 'post'
            },
            update: {
                url: 'user',
                method: 'put'
            },
            delete: {
                url: 'user/:id',
                method: 'delete'
            },
            list: {
                url: 'user/list',
                method: 'post'
            }
        });
    }]);
});