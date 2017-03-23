var app=require('../modules/module.js');


app.config(['$routeProvider',function($routeProvider) {
            $routeProvider
              .when('/', {
                templateUrl: '/src/html/home.html',
                controller: 'selfComponent',
                
              })
}])