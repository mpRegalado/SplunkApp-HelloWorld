/* customview.js */

require([
    "/static/app/hello_world/demoview.js",
    "splunkjs/mvc/simplexml/ready!"
], function(DemoView) {

    // Create a custom view
    var customView = new DemoView({
        id: "hello_world",
        el: $("#mycustomview")
    }).render();

});
