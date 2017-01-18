var gulp = require('gulp');                   //gulp本身
var less = require('gulp-less');              //编译less为css文件
var concat = require('gulp-concat');          //合并css文件
var minifycss = require('gulp-minify-css');   //压缩css文件
var rename = require('gulp-rename');          //将文件名重新命名
var watch = require('gulp-watch');            //检测文件是否改动
var sourcemaps = require('gulp-sourcemaps');  //确保本地已安装gulp-sourcemaps [cnpm install gulp-sourcemaps --save-dev]
var notify = require('gulp-notify');          //当发生异常时提示错误 确保本地安装gulp-notify和gulp-plumber
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');   //配合谷歌浏览器reload插件，实时进行刷新执行的less,或者js
var autoprefixer = require('gulp-autoprefixer');   //css文件添加前缀问题
var concat = require('gulp-concat');                //合并css文件介绍请求
var uglify = require('gulp-uglify');            //压缩js文件
var babel = require('gulp-babel');
var browserSync = require('browser-sync').create();
var webserver=require('gulp-webserver');

// 编译less文件
gulp.task('lessback', function () {
    gulp.src('src/less/*.less')
        .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') })) //提示
        .pipe(sourcemaps.init())    //less源码初始化
        .pipe(less())               //将less编译为css
        .pipe(minifycss())          //兼容IE7及以下需设置compatibility属性 .pipe(cssmin({compatibility: 'ie7'})),css进行压缩
        .pipe(sourcemaps.write())   //输出less源码
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove: true //是否去掉不必要的前缀 默认：true 
        }))
        .pipe(concat('all.css'))//合并后的文件名
        .pipe(gulp.dest('lib/css')) //输出
        .pipe(livereload());        //实时刷新
});

// 监听less文件
gulp.task('testWatch', function () {
    livereload.listen(); //实时刷新
    gulp.watch('src/less/*.less', ['lessback']); //当所有less文件发生改变时，调用testLess任务
});


// 编译es6/7文件
gulp.task('es67Task', function () {
    gulp.src('src/js/*.js')
        .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') })) //提示
        .pipe(sourcemaps.init())       //js源码初始化
        .pipe(babel({
            presets: ['es2015','stage-2','stage-3']  //对es6语法进行编译为es5
        }))
        .pipe(uglify())                //压缩js
        .pipe(concat('all.js'))     //合并js
        .pipe(sourcemaps.write())     //输出js源码
        .pipe(gulp.dest('lib/js'))     //输出js
        .pipe(livereload());           //实时刷新js
});

// 监控js文件夹下的变化
gulp.task('jsWatch', function () {
    livereload.listen();
    gulp.watch('src/js/*.js', ['es67Task']); //当所有js文件发生改变时，调用es67Task任务
});

//对html文件进行的处理
gulp.task('html', function() {
     gulp.src("src/html/*.html")
        .pipe(gulp.dest('lib'))
        .pipe(livereload())
        .pipe(notify({ errorHandler: notify.onError('Error: <%= error.message %>') }));
});
// 对html文件进行检测，异动就执行html任务
gulp.task('htmlWatch',function(){
     livereload.listen();
    gulp.watch('src/html/*.html',['html']);
});


//Server
gulp.task('server', function() {
  gulp.src('lib')
    .pipe(webserver({       //浏览器自动打开加上自动刷新
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['testWatch', 'jsWatch','htmlWatch','server']);
