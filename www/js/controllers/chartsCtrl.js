qf.controller("chartsCtrl", ['$scope', 'chartsService',
                            function($scope, chartsService) {

    $scope.charts = chartsService.charts;

    $scope.toggle = function (chart, selection) {
      $scope.charts[chart].type = selection;
    };

}])