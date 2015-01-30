'use strict'

Package.describe({
    name: "test:layout",
    summary: "Module manage app layout",
    version: "1.0.0"    
});

Package.onUse(function(api){
    var both = ['client', 'server'];
    // Use Packages
    api.use([
        'templating',
        'less',
        'jquery',
        'session'
    ], 'client');

    api.use(['coffeescript', 'iron:router'], both);
    // Add files Both side
    api.addFiles([
        'lib/both/Namespace.coffee',
        'lib/both/Routes.coffee'
    ], both);
    // Add files Server side
    // Add files Client side
    api.addFiles([
        'lib/clients/common/header.html',
        'lib/clients/common/header.coffee',
        'lib/clients/common/footer.html',
        'lib/clients/common/footer.coffee',
        'lib/clients/common/sidebar.html',
        'lib/clients/common/sidebar.coffee',
        'lib/clients/common/top-nav.html',
        'lib/clients/common/top-nav.coffee',
        'lib/clients/layout/main.html',
        'lib/clients/layout/main.coffee',
        'lib/clients/share/loading.html',
        'lib/clients/share/notfound.html',
        'lib/clients/home.html',
        'lib/clients/login.html',
    ], 'client');
});
