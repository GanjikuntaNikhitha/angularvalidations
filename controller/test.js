var module = angular.module('app', [])

module.controller('testController', Timectrl);

function Timectrl($scope) {
    $scope.updatemessage = function () {
        $scope.message = "thank you for your intrest on  your mobile number is not registered with Stucred,please"
    }
}