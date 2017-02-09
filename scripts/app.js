angular
    .module('webapp', ['ngMaterial', 'ngMessages', 'ngResource', 'ngSanitize'])
    .controller('AppCtrl', ($scope, $http, $mdDialog) => {
      $scope.query = "";
      $scope.searchSwapi = () => {
        $http.get(`https://swapi.co/api/people/?search=${$scope.query}`)
        .success((data) => {
            $scope.data = data.results;
        })
      }
      $scope.popInfo = (selection) => {
            // console.log(selection)
            $mdDialog.show(
                $mdDialog.alert()
                .clickOutsideToClose(true)
                .title(selection.name)
                .htmlContent(`${selection.birth_year}`)
                //.ok('CHEERS')
            );
        }
    })
