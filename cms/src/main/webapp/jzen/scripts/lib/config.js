/*
 * Copyright (c) 2015. Bond(China), java freestyle app
 */
var context = "";

var script = document.getElementsByTagName("script")[0];
var version = script.attributes['data-main'].value;
var debug = script.attributes['data-debug'].value;

if (debug && debug == 'true') {
    version = Math.random();
} else {
    version = version.substring(version.indexOf("v=") + 2);
}

require.config({
    //the configuration is not usefully, because require.js had default configuration, and the default value is current position of config.js
    urlArgs: 'v=' + version,
    baseUrl: context + '/jzen/scripts/lib',
    paths: {
        'angular-resource': 'angular/angular-resource',
        'angular-sanitize': 'angular/angular-sanitize',
        'angular-scenario': 'angular/angular-scenario',
        'angular-animate': 'angular/angular-animate',
        'angular-cookies': 'angular/angular-cookies',
        'angular-loader': 'angular/angluar-loader',
        'angular-touch': 'angular/angular-touch',
        'angular-route': 'angular/angular-route',
        'angular-mock': 'angular/angular-mock',
        'angular': 'angular/angular',
        "bootstrap": 'bootstrap/js/bootstrap.min',
        "bootstrap-table": 'jquery/bootstrap-table/bootstrap-table',
        "jquery-bootstrap": 'jquery/jquery.bootstrap.min',
        "ui-bootstrap": 'angular/uibootstrap/ui-bootstrap-tpls',
        "flatui": 'flatui/js/flat-ui.min',
        'jquery': 'jquery/jquery-2.1.4',
        'validator': 'jquery/validator/jquery.validationEngine',
        'validator-en': 'jquery/validator/languages/jquery.validationEngine-en',
        'validator-zh_CN': 'jquery/validator/languages/jquery.validationEngine-zh_CN',
        'treeview': 'jquery/treeview/js/bootstrap-treeview',
        'fullpage': 'jquery/fullpage/jquery.fullpage',
        'underscore': 'util/underscore',
        'control': 'util/control',
        'model': 'util/model',
        'view': 'util/view',
        'util': 'util/util',
        'style': 'util/style-adjust',
        'root': '../../../js',
        'app': '../../../js/.md',
        'module': '../../../module',
        'lib': '../../../jzen/scripts/lib',
        'ui': '../../../jzen/scripts/lib/angular-ui'
    },
    jsx: {
        fileExtension: '.jsx',
        harmony: true,
        stripTypes: true
    },
    map: {
        '*': {
            'css': 'css',
            'text': 'text'
        }
    },
    shim: {
        'flatui': {
            'deps': [
                'bootstrap',
                'css!../lib/bootstrap/css/bootstrap',
                'css!../lib/flatui/css/flat-ui',
                'css!../../../css/common',
                'css!../../../css/function',
                'style',
                'jquery',
                'fullpage',
                'jquery-bootstrap',
                'bootstrap-table'
            ]
        },
        'bootstrap': {
            'deps': [
                'jquery',
                'style',
                'fullpage',
               /* 'css!../lib/bootstrap/css/bootstrap',*/
                'css!../lib/jquery/bootstrap-table/bootstrap-table',
                'css!../../../css/common',
                'css!../../../css/function'
            ]
        },
        'fullpage' :{
            'deps':[
                'css!../lib/jquery/fullpage/jquery.fullpage'
            ]
        },
        'bootstrap-table': {
            "deps": [
                'jquery',
                'bootstrap'
            ]
        },
        'jquery-bootstrap': {
            "deps": [
                'jquery',
                'bootstrap'
            ]
        },
        'ui-bootstrap': {
            "deps": [
                'css!../lib/angular/uibootstrap/ui-bootstrap-csp',
                'jquery',
                'bootstrap',
                'angular',
                'angular-animate',
                'angular-touch',
                'angular-route'
            ]
        },
        'validator': {
            'deps': [
                'jquery',
                'validator-en'
            ]
        },
        'validator-en': {
            'deps': [
                'jquery'
            ]
        },
        'validator-zh_CN': {
            'deps': [
                'jquery'
            ]
        },
        'treeview': {
            deps: [
                'jquery',
                'bootstrap'//,
                //'css!../lib/jquery/treeview/css/bootstrap-treeview'
            ]
        },
        'angular': {
            exports: "angular"
        },
        'angular-route': {
            deps: ['angular'],
            exports: 'angular-route'
        },
        'angular-animate': {
            deps: ['angular'],
            exports: 'angular-animate'
        },
        'angular-cookies': {
            deps: ['angular'],
            exports: 'angular-cookies'
        },
        'angular-loader': {
            deps: ['angular'],
            exports: 'angular-loader'
        },
        'angular-mock': {
            deps: ['angular'],
            exports: 'angular-mock'
        },
        'angular-resource': {
            deps: ['angular'],
            exports: 'angular-resource'
        },
        'angular-sanitize': {
            deps: ['angular'],
            exports: 'angular-sanitize'
        },
        'angular-scenario': {
            deps: ['angular'],
            exports: 'angular-scenario'
        },
        'angular-touch': {
            deps: ['angular'],
            exports: 'angular-touch'
        }
    },
    deps: [
        'flatui'
    ]
});

(function (global) {
    global.appPath = '';
    global.Consts = {};
    global.Consts.getAppPath = function (url) {
        if (url == undefined || url == null) {
            url = "";
        }
        return global.appPath + "/" + url;
    };
    global.Consts.getAppJsPath = function (js) {
        return global.appPath + '/js/' + js;
    };

    global.ObjectUtils = {};
    global.ObjectUtils.merge = function (dst, src, iscover) {
        for (var attr in src) {
            if (!dst[attr]) {
                dst[attr] = src[attr];
            }
            if (iscover) {
                dst[attr] = src[attr];
            }
        }
        return dst;
    }
})(window.top);

/**
 * Created by Bond(China) on 2015/11/21.
 * bootstraps angular onto the window.document node
 */
define([
    'require',
    'angular',
    'jquery',
    'underscore',
    'angular-route',
    'angular-resource',
    '!root/.cnf',
    '!ui/.cnf'
], function (require, ng, $, _, ngRoute, ngResource, cnf, uiCnf) {
    'use strict';

    $(function () {

        var mds = ['app'];
        var cnfs = [];
        ng.copy(uiCnf, cnfs);

        _.each(cnf, function (md) {
            mds.push(md.name);
            cnfs.push(md.path + '/.cnf');
        });

        require(cnfs, function () {
            ng.bootstrap(document, mds);
        });

    }.bind(this));
});