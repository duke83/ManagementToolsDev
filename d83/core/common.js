angular
    .module('d83.core')
    .factory('common', ['$q', '$rootScope', '$timeout', 'logger', common]);

function common($q, $rootScope, $timeout) {
    var service = {
        // common angular dependencies
        $q: $q,
        $timeout: $timeout,
    };
    return service;
}