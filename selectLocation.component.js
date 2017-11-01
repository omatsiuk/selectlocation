function selectLocationController(myService, myForm, $timeout) {
    var ctrl = this;
    ctrl.Place = myForm;

    ctrl.search = function() {
        ctrl.apiError = false;
        myService.searchAddress(ctrl.searchPlace)
            .then(
                function(res) {
                    myService.addMarker(res);
                    ctrl.Place.name = res.name;
                    ctrl.Place.lat = res.geometry.location.lat();
                    ctrl.Place.lng = res.geometry.location.lng();
                },
                function(status) {
                    ctrl.apiError = true;
                    ctrl.Place.apiStatus = status;
                }
            );
    };

    $timeout(function () {
        myService.init();
    },2000);
}

angular.module('app').component('selectLocation', {
    templateUrl: 'selectLocation.component.html',
    controller: selectLocationController
});