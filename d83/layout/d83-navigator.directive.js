
angular.module('d83.layout').directive('d83Navigator',function(projectDataSrvc){
    "use strict"
    return{
        restrict:'E',
        template:'<span>I am d83Navigator{{projectDataSrvc.pdata}}</span>',
        link:function(scope,el,attrs){
scope.projectDataSrvc=projectDataSrvc;
        }
    }
})