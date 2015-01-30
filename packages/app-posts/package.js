'use strict'

Package.describe({
    name: "test:posts",
    summary: "Post manager",
    version: "1.0.0"
});

Package.onUse(function(api){
    var both = ['client', 'server'];
    api.use(['coffeescript', 'iron:router'], both);
    
    api.use('standard-app-packages', 'client');
    
    api.addFiles([
        'lib/both/Routes.coffee',
        'lib/both/config.coffee'
    ], both);

    api.addFiles([
        'lib/client/R/R.html',
        'lib/client/C/C.html',
    ], 'client')
});
