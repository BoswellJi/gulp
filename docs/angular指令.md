## 指令

### angular内置指令
1. ng-model="str"          
2. ng-bind="str"  
3. ng-init="a=0"  			 初始化ng中使用变量
4. ng-click="funName"        angular自己的事件
5. ng-show="true"
6. ng-hide="true"
7. ng-clack                  当元素中的数据没有加载过来，元素隐藏
8. ng-bind-template ="{{name}}{{age}}"
9. ng-value="9-9"：          可以写表达式
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

### 自定义angular指令
```
app.directive('tagName', function() {
            return {
                restrict: "ECAM", //限制指令通过特定的方式来定义
                template: '<h1>这是个自定义的指令</h1>'
                templateUrl:'../index.html'
            };
});
四种使用方式：
<hello></hello>
<div hello></div>
<div class="hello"></div>
<!-- directive:hello -->
<div></div>
```

### 指令的运行原理
- link
- compile
![angular-directive运行机制](./img/directive运行原理.png)

### 第三方指令库
- angular-ui

### Directive思想的起源与原理概述
