require.config({
    paths: {
        "jquery": "./lib/jquery",
        'lodash':"./lib/lodash"
    },
    shim: {
        'lodash': {
            exports: '_'
        } 
    }
});

require(['jquery','lodash'], function ($,_) {
    

});