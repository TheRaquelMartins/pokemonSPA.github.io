define(['view/details', 'view/list', 'controller/list', 'service/service'], function (detailsView, listView, listController, service) {

    var internals = {};
    var externals = {};

    var ApiUrl = 'https://api.pokemontcg.io/v1/cards';
    var newURL;

    internals.reRoute = function () {
        window.location.hash = 'list';
    };

    internals.backButton = function () {
        
        $('#backButton').click(function (event) {
            event.preventDefault();
            window.location.hash = 'list';
            listController.init();
        });
    };

    internals.start = function () {

        newURL = ApiUrl + '/' + listView.getDetailsId();

        service.fetchUrl(newURL)
            .then(function (data) {
                detailsView.displayCharacter(data, internals.backButton())
            });
    };

    externals.init = function () {
        internals.start();
        detailsView;
    };

    return externals;
});
