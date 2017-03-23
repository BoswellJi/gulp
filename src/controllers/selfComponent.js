var app=require('../modules/module.js');

module.exports=app.controller('selfComponent',['$scope',function($scope){
	$scope.handle=function  (index) {
		console.log(index);
	}
}]);