## angular part3

## $scope服务

##指令
- ng-value="9-9"：可以写表达式



##路由 ui-router
- ui-sref="list" 定义路由直接跳转



- 自身路由
```
var app = angular.module('app', ['ngRouter']);
          路由配置
app.config(['$routeProvider', function($routeProvider) {
    $routerProvider.when('/', {
        templateUrl: './index.html',
        controller: 'homeCtrl'
    }).when('/home', {
        templateUrl: './index.html',
        controller: 'homeCtrl'
    }).when('/leyuan', {
        templateUrl: './header.html',
        controller: 'leYuan'
    }).otherwise({
        redirectTo: '/'
    });
}]);
<div ng-view></div>：定义视图显示位置
```
- 与第三方路由
```
    1. 路由的配置
        app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('');

            $stateProvider
                .state('default', {
                    url: '',
                    //template:'<h1>jmz</h1>',
                    templateUrl: 'header.html',
                    controller: ['$scope', function($scope) {
                        $scope.name = "jmz"
                    }]
                })
                .state('home', {
                    url: '/home',
                    //template:'<h1>jmz</h1>',
                    templateUrl: './header.html',
                    controller: ['$scope', function($scope) {
                        $scope.name = "jmzheheh";
                    }]
                })
                .state('list', {
                    url: '/list',
                    //template:'<h1>jmz</h1>',
                    templateUrl: './index0.html',
                    controller: 'listController'
                })
        }]);
    2. 路由的跳转
        控制器，给每个路由指定对应的控制器
        当条件不满足时，进行路由跳转
        注册$state服务：使用go方法,注意穿过来的是路由字符串，不是变量
        注册$stateParams服务:接收路由参数
        app.controller('homeController', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {
            $scope.users = [{
                id: 1,
                name: 'jmz'
            }, {
                id: 2,
                name: 'jay'
            }];

        }]);
    3. 路由的父子级别嵌套
     - 现在要解决的问题是：在模板中有导航，点击导航将内容显示在导航下面，但是整个模板是在最上层的路由容器中，点击完会将模板内容清空显示；所以需要嵌套路由；
     - 子视图：视图下的视图，嵌套视图
```
