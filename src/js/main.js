var m=angular.module('app',[]);

m.factory('test',function(){
	return {
		a:12
	}
});

// 对依赖进行装饰
m.decorator('test',function($delegate){
	$delegate.c=12;
	return $delegate;
});

m.controller('appC',function($scope,test){
	test.a=1
	console.log(test);
});

m.controller('appB',function($scope,test){
	test.d=12;
	console.log(test);
});

m.controller('appA',function($scope,test){
	console.log(test);
});