(function() {
    var app = angular.module('hackridge');
    app.controller('CountdownController', ['$scope','$interval', function($scope, $interval) {
        $interval(function() {
            $scope.countdown = countdown(new Date("Mar 4 2017 12:00:00"));
        }, 1000,0);

    }]);


    countdown.setLabels(
    	'second | minute | hour | day | month',
    	'seconds | minutes | hours | days | months',
    	' and ',
    	', ',
    	'now');
}());
