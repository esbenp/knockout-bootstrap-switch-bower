requirejs.config({
    baseUrl: '../bower_components',
    paths: {
        dist: "../dist",
        jquery: "jquery/dist/jquery",
        knockout: "knockout/dist/knockout",
        "bootstrap-switch": "bootstrap-switch/dist/js/bootstrap-switch",
        "knockout-bootstrap-switch": "../dist/knockout-bootstrap-switch-bower"
    },
    shim: {
        "bootstrap-switch": ["jquery"],
        "knockout-bootstrap-switch": ["bootstrap-switch"]
    }
});

requirejs(["knockout", "knockout-bootstrap-switch"], function(ko, ko){
    var container = document.getElementById("container");
    ko.applyBindings({
        state: ko.observable(true)
    }, container);
});