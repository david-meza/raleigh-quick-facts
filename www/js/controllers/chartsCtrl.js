qf.controller("chartsCtrl", ['$scope', 'chartsService',
                            function($scope, chartsService) {

    $scope.charts = chartsService.charts;

}])