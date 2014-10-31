(function(){
    'use strict';
    angular.module('d83', [
        /*
        Everybody has access to these.
        We could place these under every feature area,
        but this is easier to maintain.
        */
        'd83.core',
        'd83.layout'
    ]);
})();