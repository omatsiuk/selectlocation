function selectLocationController($scope, myService, myForm) {
    $scope.Place = myForm;

    $scope.search = function() {
        $scope.apiError = false;
        myService.searchAddress($scope.searchPlace)
            .then(
                function(res) {
                    myService.addMarker(res);
                    $scope.Place.name = res.name;
                    $scope.Place.lat = res.geometry.location.lat();
                    $scope.Place.lng = res.geometry.location.lng();
                },
                function(status) {
                    $scope.apiError = true;
                    $scope.Place.apiStatus = status;
                }
            );
    };

    setTimeout(function () {
        myService.init();
    },2000);
}

angular.module('app').component('selectLocation', {
    templateUrl: 'selectLocation.component.html',
    controller: selectLocationController
});