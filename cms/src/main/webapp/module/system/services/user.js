/*
 * Copyright (c) 2016. Bond(China), java freestyle app
 */

define([
    '../.md',
    'angular',
    'jquery',
    'underscore'
], function (md, ng, $, _) {

    md.service('UserService', ['$http', 'UserResource', function ($http, userResource) {

        return {
            add: function (user, fn) {

                userResource.add(user, function (data) {

                    if ($.isFunction(fn)) {
                        fn(data);
                    }
                }, function (data) {
                    $.messager.alert($.messager.model.title.info, "系统错误");
                });
            },

            delete: function (user, fn) {
                userResource.delete({
                    id: user.id
                }, function (data) {
                    if ($.isFunction(fn)) {
                        fn(data);
                    }
                }, function (data) {
                    $.messager.alert($.messager.model.title.info, "系统错误");
                });
            },

            update: function (user, fn) {
                userResource.update(user, function (data) {
                    if ($.isFunction(fn)) {
                        fn(data);
                    }
                });
            },

            list: function (pager, fn) {

                userResource.list(pager, function (data) {

                    if ($.isFunction(fn)) {
                        fn(data);
                    }
                });
            }
        };
    }]);
});