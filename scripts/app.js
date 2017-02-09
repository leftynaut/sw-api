angular
    .module('webapp', ['ngMessages', 'ngResource', 'ngSanitize'])
    .controller('AppCtrl', ($scope, $http) => {
      $scope.query = "";
      $scope.searchSwapi = () => {
        $http.get(`https://swapi.co/api/people/?search=${$scope.query}`)
        .success((data) => {
            $scope.data = data;
        })
      }
    })
