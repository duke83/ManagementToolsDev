angular.module('d83.core')
    .directive('d83Annotation', function (projectDataSrvc) {
        "use strict"
        return{
            restrict: 'E',

            templateUrl: '../d83/annotation/d83.annotation.tpl.html',
            require:'^d83-Navigator',
            controller: function ($scope, projectDataSrvc) {
                projectDataSrvc.getProjectData().then(
                    function (dta) {
                        $scope.projetcData = dta;
                    }
                )
            }

        }
    })