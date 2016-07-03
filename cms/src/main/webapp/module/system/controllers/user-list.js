define([
    '../.md',
    'angular',
    'jquery',
    'underscore'
], function (md, ng, $, _) {

    md.controller('UserListCtrl', ['$scope', function ($scope) {

        $scope.moduleName = "Welcome to Home Page!";

    }]);
});