
angular.module('d83.navigator').directive('d83Navigator',function(projectDataSrvc){
    "use strict"
    return{
        restrict:'E',
        templateUrl:'../d83/navigator/d83-navigator.tpl.html',
        controller:function($scope,projectDataSrvc){
            projectDataSrvc.getProjectData().then(
                function(dta){$scope.projetcData = dta;}
            )

            $scope.show=false;
        }

    }
})