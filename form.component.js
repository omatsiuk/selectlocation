angular.module('app').component('formComponent', {
    templateUrl: 'form.component.html',
    controller: function formController(myForm) {
        var ctrl = this;
        ctrl.user = myForm;
        ctrl.visibleLocation = false;
        ctrl.selectLocation= function () {
            ctrl.visibleLocation = ctrl.visibleLocation ? false : true;
        };
        ctrl.submit = function() {
            console.log(myForm);
            // send data
        };
    }
});
