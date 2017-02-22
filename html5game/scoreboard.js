var app = angular.module('myApp', []);
app.controller('scoreboard', function($scope) {
    $scope.score = 0;
    $scope.lives = 5;
    $scope.level = 1;
});