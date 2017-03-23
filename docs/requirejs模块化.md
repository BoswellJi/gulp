### requirejs.config() 配置模块
1. 写在主模块的头部
2. paths:各个模块加载路径
3. baseUrl:指定模块根目录
4. shim: 兼容不支持amd模块化的js库
5. 插件使用

```
requirejs.config({
	baseUrl:'js'
	paths:{
		moduleName:'module path/ network path',
		underscore:'paths'
	},
	shim:{
		underscore:{
			deps:['依赖模块1','依赖模块2'],  //有就有，没有就为空
			exports:'_'
		}
	}
});
```