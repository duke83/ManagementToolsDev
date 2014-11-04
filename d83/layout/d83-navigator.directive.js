
angular.module('d83.layout').directive('d83Navigator',function(projectDataSrvc){
    "use strict"
    return{
        restrict:'E',
        template:'<span>I am d83Navigator<br/><textarea>{{projetcData}}</textarea></span>',
        controller:function($scope,projectDataSrvc){
            projectDataSrvc.getProjectData().then(
                function(dta){$scope.projetcData = dta;}
            )
        }

    }
})