
/*
 * 启动angular 项目
 */


var angular=require('angular');
var app=require('./modules/module.js');
var route=require('./routers/router.js');
var selfComponent=require('./controllers/selfComponent.js');



angular.element(document).ready(function(){
	angular.bootstrap(document,['app']);
});


