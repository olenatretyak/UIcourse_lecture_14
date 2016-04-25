var app = angular.module('gitHubApp', []);

app.controller('GithubUserController', function($scope, GithubDataService) {
    // variables
    $scope.users = []; 

    $scope.search = function ()  {
        GithubDataService.getUser($scope.userName)
            .then(function (response) {
                $scope.users.push(response.data);
            })
            .catch(function () {
                console.log('Error');
            });
    }
})