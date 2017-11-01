function formController($scope, myForm) {
    $scope.user = myForm;
    $scope.visibleLocation = false;
    $scope.selectLocation= function () {
        $scope.visibleLocation = $scope.visibleLocation ? false : true;
    };
    $scope.submit = function() {
        console.log(myForm);
        // send data
    };
}

angular.module('app').component('formComponent', {
    templateUrl: 'form.component.html',
    controller: formController
});
