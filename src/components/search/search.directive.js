(function () {

    'use strict';

    angular.module('app.search')
        .directive('tmplSearch', directiveFunction)
        .controller('SearchController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'E',
            templateUrl: 'components/search/search.html',
            scope: {
            },
            controller: 'SearchController',
            controllerAs: 'vm'
        };

        return directive;
    }


    // ----- ControllerFunction -----
    ControllerFunction.$inject = ['logger'];

    /* @ngInject */
    function ControllerFunction(logger) {

        activate();

        function activate() {
            logger.log('Activated Search View');
        }
    }

})();
