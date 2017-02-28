## Service Provider
    - angular提供的服务Service
    - 自己定义的服务
    ```
    var testMod = angular.module('test', []);

        //依赖注入 定义Service 
        testMod.factory('serviceTest', ['$http', function($http) {
            return {
                fnInit: function(e) {
                    console.log(e)
                }
            };
        }]);

        // 调用服务
        testMod.controller('testController', ['$scope', 'serviceTest', function($scope, serviceTest) {
            serviceTest.fnInit('这里调用的是我们自己的服务');
        }]);
    ```
    - 第三方的服务

## service用来干什么？
- 多个controllr公共的方法，定义在service中，相当于react中的minxs
- 每个service都是单例，使用时不需实例化；
- 都是由内部的$injector service来实例化

## service factory Provider
![图片](./img/provider.png)



## angular中的service
1. $scope

2. $http
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
3. $filter
    - 自定义filter
    ```
     var testMod = angular.module('test', []);
        testMod.filter('filter1', function() {
            return function(item) {
                return item + 2;
            }
        });
        testMod.controller('testController', function() {

        });
    ```

