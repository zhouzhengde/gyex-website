define([
    '../.md',
    'angular',
    'jquery',
    'underscore'
], function (md, ng, $, _) {

    md.controller('WelcomeCtrl', ['$scope', function ($scope) {

        $scope.moduleName = "Welcome to Home Page!";

    }]).controller('DevelopCtrl', ['$scope', function ($scope) {

        $scope.moduleName = "Welcome to Home Page!";

    }]);
});