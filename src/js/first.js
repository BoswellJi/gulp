var mod = angular.module('test', []);
mod.controller('controllerTest', ['$scope', function($scope) {
    $scope.userInfo = {
        email: 'aa',
        password: 'fdf',
        isChecked: true
    }
}]);