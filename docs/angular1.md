#angular part2

##是什么？
- jquery: 工具库，需要使用一些方法的时候，直接拿来使用
- vue:基于MVVM模式的一个框架，实现了模型，视图的双向绑定，模型与视图通过vue的实例链接起来的；
- angular:基于MVVM模式的一个框架，实现了模型，视图的双向绑定，模型视图通过作用域链接起来；

##一个angular应用
- model viewmodel view controller
1. model:服务中的数据
2. view:html
3. controller中的$scope


## vue与angular
- 定义元素容器
1. vue:el
2. angular:ng-app

##angular与jquery的对比
- jquery操作数据不方便，导致代码比较复杂难维护；
- jquery操作dom,class,id与html,css代码耦合较深；


##控制器定义作用域

##模块化
- angular应用程序，将一个应用拆分成若干个模块，进行组合构建一个应用；
- 使用ng-app定义ng应用，可以多个，但是不能嵌套；
- angular对象下的module()方法可以创建一个angular模块
- angular.module('app',['$scope',function($scope){}]).controller()
- ng-controller='con'指定一个视图的控制器
- 一个控制器对应好一个视图和数据（model）
- angular应用基于模块的，每个模块基于mvc的
- $scope，视图模型


##内置指令
- 指令拓展html标签的功能；
- ng-class="{red:true,blue:true}"
- ng-include:引入模板
```
 <div ng-include="'header.html'"></div>
```
- ng-switch on ng-switch-then
```
<li ng-repeat="item in items" ng-switch on="item">
            <span ng-switch-when="jmz">{{item}}</span>
        </li>
```

##自定义指令
```
 app.directive('tagName', function() {
            return {
                restrict: "A", //限制指令通过特定的方式来定义
                template: '<h1>这是个自定义的指令</h1>'
            };
        });
```

##数据绑定
- 单项数据绑定
1. 模型绑定到视图上；

- 双项数据绑定
1. 从视图输入操作，反应到model上；

- 数据双项绑定
1. ng-model
2. ng-bind ng-bind-template


##js小技巧

