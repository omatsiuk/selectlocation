angular
    .module("selectLocationModule", ['selectService'])
    .component('selectLocation', {
        templateUrl: "selectLocation.component.html"
    })
    .controller ("selectLocationController", function ($scope, Map, MyForm) {
        $scope.Place = MyForm;

        $scope.search = function() {
            $scope.apiError = false;
            Map.searchAddress($scope.searchPlace)
                .then(
                    function(res) {
                        Map.addMarker(res);
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
            Map.init();
        },2000);

    });


