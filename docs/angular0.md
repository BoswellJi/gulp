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

##mvc
1. m    model数据，存，取，但是数据的逻辑处理不在这里；
2. v    viewUI,显示数据，用户交互；
3. c    controller,处理v传过来的数据，放回model,处理model传过来的数据，在view中显示；
- 放代码
- 桥梁  m  <->  c

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

##过滤器
- 将获取的数据进行一定规则的格式化等操作；
- 使用方式{{item | filterName}}

##angular程序与服务器之间的数据交互
- 使用controller('c',function($scope,$http){})中的$http进行交互
- $http.get(url,{params:{}}); 返回一个promise对象
- promise.then(function(res){},function(err){})
```
  $http.get('../data/data.json', {
                params: {
                    a: 'a',
                    responseType:'json'
                }
            }).then(function(res) {
                console.log(res)
            }, function(err) {
                console.log(err);
   });

   $http.get('../data/data.json', {
                params: {
                    a: 'a'
                },
                responseType: 'json'
            }).success(function(res) {}).error(function(err) {});
```

##事件
- 在angular中事件相当于一个指令，都是以ng-开头；ng-click="fn()"
- angular中的事件处理函数绑定在$scope上；
- 传入事件处理函数的事件对象都是ev,处理函数的作用域指向$scope===this