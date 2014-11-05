/**
 * Created by Kent on 11/2/2014.
 */
angular
    .module("d83.core")
    .factory("projectDataSrvc", projectDataSrvc);

function projectDataSrvc($http) {
    return {
        getProjectData: function (test) {
            if (!test) {
                return $http.get("../d83-Project/d83-project.json")
            }
            return"";
        },

        deletedata: function () {
            return this.getProjectData(true);
        }
    }
}


