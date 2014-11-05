angular.module('d83.annotation')
    .directive('d83Annotation', function (projectDataSrvc) {
        "use strict"
        return{
            restrict: 'E',
            transclude: true,
            templateUrl: '../d83/annotation/d83.annotation.tpl.html',
            controller: function ($scope, projectDataSrvc) {
                projectDataSrvc.getProjectData().then(
                    function (dta) {
                        $scope.projetcData = dta;
                    }
                )
            }

        }
    })