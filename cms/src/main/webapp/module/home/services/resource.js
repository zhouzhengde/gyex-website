/*
 * Copyright (c) 2016. Bond(China), java freestyle app
 */

define([
    '../.md',
    'angular',
    'jquery',
    'underscore'
], function (md, ng, $, _) {

    md.factory('HomeResource', ['$resource', function ($resource) {

        return $resource('', {}, {
            query: {
                url: 'category/:id',
                method: 'get',
                isArray: true
            },
            add: {
                url: 'category/:id',
                method: 'post'
            },
            update: {
                url: 'category/:id',
                method: 'put'
            },
            delete: {
                url: 'category/:id',
                method: 'delete'
            }
        });
    }]);
});