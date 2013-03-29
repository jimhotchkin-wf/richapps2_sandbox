({
    baseUrl: 'js',

    //Comment this line out to get
    //minified content.
    optimize: 'none',

    name:'main',
    out:'js/main.opt.js',

    //Instruct the r.js optimizer to
    //convert commonjs-looking code
    //to AMD style, which is needed for
    //the optimizer to properly trace
    //dependencies.
    cjsTranslate: true
})
