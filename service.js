
(function () {
    'use strict';

    angular.module('gitHubApp')
        .factory('GithubDataService', GithubDataService);

    function GithubDataService($http) {
        var SERVER_URL = 'http://api.github.com';

        return {
            getUser: getUser
        };

        //
        // Public methods
        //

        function getUser(username) {
            return $http({
                method: 'GET',
                url: SERVER_URL + '/users/' + username
            });
        }
    }
}());
