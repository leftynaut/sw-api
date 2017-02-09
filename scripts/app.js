angular
    .module('webapp', ['ngMaterial', 'ngMessages', 'ngResource', 'ngSanitize'])
    .controller('AppCtrl', ($scope, $http, $mdDialog) => {
      $scope.query = "";
      $scope.placeholderText = "e.g. Chewbacca, Yoda, Bob Fett";
      let people = true;
      $scope.changeText = (selection) => {
        if (selection === 'people') {
          $scope.placeholderText = "e.g. Chewbacca, Yoda, Bob Fett";
          people = true;
        } else {
          $scope.placeholderText = "e.g. Empire Strikes Back, The Force Awakens";
          people = false;
        }
      }
      $scope.searchSwapi = () => {
        if (people) {
          $http.get(`https://swapi.co/api/people/?search=${$scope.query}`)
          .success((data) => {
            $scope.data = data.results;
          })
        } else {
          $http.get(`https://swapi.co/api/films/?search=${$scope.query}`)
          .success((data) => {
            let films = data.results;
            films = films.map(item => {
              return {
                name: item.title,
                opening_crawl: item.opening_crawl,
                characters: item.characters
              }
            })
            $scope.data = films
          })
        }
      }
      $scope.popInfo = (selection) => {
        if (!selection.characters) {
        const films = selection.films;
        function getFilmInfo(film) {
          return new Promise((resolve, reject) => {
            $http.get(film)
            .success((data) => {
              resolve(`<a href="#">${data.title}</a>`);
            })
          })
        }
        const mappedFilms = films.map(film => getFilmInfo(film))
        Promise.all(mappedFilms)
        .then((results) => {
          $mdDialog.show(
              $mdDialog.alert()
              .clickOutsideToClose(true)
              .title(selection.name)
              .htmlContent(`
                <div class="row">
                  <div class="col-xs-5">
                    Birth Year: ${selection.birth_year}
                    <br />Gender: ${selection.gender}
                    <br />Eye Color: ${selection.eye_color}
                    <br />Hair Color: ${selection.hair_color}
                    <br />Height: ${selection.height}
                    <br />Mass: ${selection.mass}
                  </div>
                  <div class="col-xs-7">
                    Movies:
                    <br />${results}
                    <br />
                  </div>
                </div>`)
          );
        })
      } else {
        const characters = selection.characters;
        function getCharacterInfo(character) {
          return new Promise((resolve, reject) => {
            $http.get(character)
            .success((data) => {
              resolve(`<a href="#">${data.name}</a>`);
            })
          })
        }
        const mappedCharacters = characters.map(character => getCharacterInfo(character))
        Promise.all(mappedCharacters)
        .then((results) => {
          $mdDialog.show(
              $mdDialog.alert()
              .clickOutsideToClose(true)
              .title(selection.name)
              .htmlContent(`
                <div class="row">
                  <div class="col-xs-5">
                    Opening Crawl:<br />${selection.opening_crawl}
                  </div>
                  <div class="col-xs-7">
                    Characters:
                    <br />${results}
                    <br />
                  </div>
                </div>`)
          );
        })
      }
      }
    })
