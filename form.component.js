angular.module('app')
    .directive('formDirective', function () {
        return {
            replace: true,
            restrict: 'E',
            link: function (scope) {
                scope.user = {};
                scope.visibleLocation = false;
                scope.selectLocation= function () {
                    scope.visibleLocation = scope.visibleLocation ? false : true;
                }
                ;
            },

            templateUrl: 'form.component.html'
        }
    })
    .directive('locationDirective', function (myService) {
        return {
            replace: true,
            restrict: 'E',
            link: function (scope) {
                scope.Place = {};

                scope.search = function() {
                    scope.apiError = false;
                    myService.searchAddress(scope.searchPlace)
                        .then(
                            function(res) {
                                myService.addMarker(res);
                                scope.Place.name = res.name;
                                scope.Place.lat = res.geometry.location.lat();
                                scope.Place.lng = res.geometry.location.lng();
                            },
                            function(status) {
                                scope.apiError = true;
                                scope.Place.apiStatus = status;
                            }
                        );
                };

                setTimeout(function () {
                    myService.init();
                },2000);

                scope.submit = function() {
                    var data = Object.assign(scope.user,scope.Place);
                    // send data
                };
            },
            templateUrl: 'selectLocation.component.html'
        }
    });


