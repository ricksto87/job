angular.module('app', []);

angular.module('app').controller('testCtrl', function($scope) {
    $scope.test = "hello";
    $scope.jobs = [{
        title: 'Sales Person',
        description: 'you will fight dragons'
    }, {
        title: 'Accountant',
        description: 'you will use the keyword'
    }];
});