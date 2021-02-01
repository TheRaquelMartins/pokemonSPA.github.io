define(function () {
    var internals = {};
    var externals = {};

    internals.routes = {
        list: { hash: '#list', controller: 'list'},
        details: { hash: '#details', controller: 'details'}
    };

    internals.defaultRoute = internals.routes.list;

    internals.initController = function (route) {
        require(['controller/' + route.controller], function (controller) {
            controller.init();
        });
    };

    internals.getRoute = function () {
        return Object.values(internals.routes).find(function (route) {
            return window.location.hash === route.hash;
        });
    };

    externals.init = function () {
        internals.initController(
            internals.getRoute() || internals.defaultRoute
        );

        window.onhashchange = function () {
            try {
                internals.initController(internals.getRoute());
            } catch (error) {
                window.location.hash = internals.defaultRoute.hash;
            }
        };
    };

    return externals;
});
