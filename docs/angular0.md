##angular:
1. 数据双向绑定
2. 依赖注入
- 自己定义参数（名称，数量，顺序）的函数
- 比如：ng.controller('c1',function($scope,$http){});
- 自己使用什么参数，就传什么参数；
3. 完全接管UI
4. 拓展了html的功能

##angular注意点
1. 与js原生代码不互通；
2. ng-app="字符串"  angular自己的东西用字符串
3. scr="{{}}"       html的东西显示用模板



##angular api
1. var mod1=angular.module('param',[]);
 - param:ng-app，代表这个页面的某个模块；
2. mod1.controller('param',function($scope){ var a=0; $scope.a=0; });
 - param:这个controller的名称；
 - $scope:所有这个controller中需要的东西
 - $scope:作用域，window.a=0; var a=0;
3. controller的不同写法：
 - mod1.controller('c1',[$scope,$http,function(a,b){}])

##模板
- {{}} 

##指令
1. ng-model="str"          
2. ng-bind="str"  
3. ng-init="a=0"  初始化ng中使用变量
4. ng-click="funName"    angular自己的事件
5. ng-show="true"
6. ng-hide="true"
7. ng-clack  当元素中的数据没有加载过来，元素隐藏
8. ng-bind-template ="{{name}}{{age}}"

##过滤器
- 将获取的数据进行一定规则的格式化等操作；
- 使用方式{{item | filterName}}

##事件
- 在angular中事件相当于一个指令，都是以ng-开头；ng-click="fn()"
- angular中的事件处理函数绑定在$scope上；
- 传入事件处理函数的事件对象都是ev,处理函数的作用域指向$scope===this