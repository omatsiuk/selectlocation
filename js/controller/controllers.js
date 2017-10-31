app.controller('MainCtrl', function($scope, Myservice){
    $scope.User = Myservice;
    $scope.visibleLocation = false;
    $scope.selectLocation = function () {
        $scope.visibleLocation = $scope.visibleLocation ? false : true;
    }
});


app.controller('MapCtrl', function($scope, Map, Myservice) {
    $scope.Place = Myservice;

    $scope.search = function() {
        $scope.apiError = false;
        Map.search($scope.searchPlace)
            .then(
                function(res) { // success
                    Map.addMarker(res);
                    $scope.Place.name = res.name;
                    $scope.Place.lat = res.geometry.location.lat();
                    $scope.Place.lng = res.geometry.location.lng();
                },
                function(status) { // error
                    $scope.apiError = true;
                    $scope.Place.apiStatus = status;
                }
            );
    };

    $scope.submit = function() {
    	// send jsonData
        var jsonData = JSON.stringify(Myservice);
    };

    Map.init();
});
