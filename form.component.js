angular
    .module("formModule", ['selectService'])
    .component('formComponent', {
        templateUrl: "form.component.html"
    })
    .controller ("formController", function ($scope, MyForm) {
        $scope.User = MyForm;
        $scope.visibleLocation = false;
        $scope.selectLocation = function () {
            $scope.visibleLocation = $scope.visibleLocation ? false : true;
        };

        $scope.submit = function() {
            console.log(MyForm);
            // send jsonData
        };

});
