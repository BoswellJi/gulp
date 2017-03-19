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
4. 内置与自定义

##模板
- {{}} 

##指令
- 内置与自定义


## 服务
- 可以将服务理解成根据angular规则来定义的公共类库，然后根据angular的依赖注入机制来在每个需要调用的地方使用；
- 创建的三种方式
    + providers，
    + factory，
    + service
- controller中的大部分业务逻辑持久化数据应该放到service中去
- 内置与自定义


##过滤器
- 将获取的数据进行一定规则的格式化等操作；
- 使用方式{{item | filterName}}
- 内置于自定义
