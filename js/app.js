var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl : 'pages/homepage.html',
		controller : 'Homepage'
	})
});

app.service('Map', function($q) {

    this.search = function(str) {
        var d = $q.defer();
        this.places.textSearch({query: str}, function(results, status) {
            if (status == 'OK') {
                d.resolve(results[0]);
            }
            else d.reject(status);
        });
        return d.promise;
    };

    this.addMarker = function(res) {
        if(this.marker) this.marker.setMap(null);
        this.marker = new google.maps.Marker({
            map: this.map,
            position: res.geometry.location,
            animation: google.maps.Animation.DROP
        });
        this.map.setCenter(res.geometry.location);
    }

});

app.service('Myservice', function() {

    var User = {
        username:'',
        email:'',
        phone:''
	};
   return User;

    var Place = {
        name:'',
        lat:'',
        lng:''
    };
    return Place;

});



