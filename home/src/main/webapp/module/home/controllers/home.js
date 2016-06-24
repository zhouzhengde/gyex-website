define([
    '../.md',
    'angular',
    'jquery',
    'underscore'
], function (md, ng, $, _) {

    md.controller('HomeCtrl', ['$scope', 'HomeService', 'HomeResource', function ($scope, homeService, homeResource) {

        $scope.moduleName = "Welcome to Home Page!";

        homeService.display();

        $('#carousel-ad').carousel();


        /*homeResource.query({}, function (data) {

         console.log(data);
         });*/
    }]);
});