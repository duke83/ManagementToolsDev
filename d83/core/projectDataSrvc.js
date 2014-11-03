/**
 * Created by Kent on 11/2/2014.
 */
angular
    .module("d83.core")
    .factory("projectDataSrvc", projectDataSrvc);

function projectDataSrvc($http){
    return{
        pdata:$http.get("../d83-Project/d83-project.json").success(function(a,b,c,d,e,f,g){
                console.log(arguments)
            }
        )
    }
}

