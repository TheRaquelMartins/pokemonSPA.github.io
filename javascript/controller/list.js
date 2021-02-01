define(['view/list', 'service/service'], function (viewList, service) {

    var internals = {};
    var externals = {};

    var ApiUrl = 'https://api.pokemontcg.io/v1/cards';
    var newURL;
    var searchBarInput;
    var searching = false;

    internals.reRoute = function (id) {
        window.location.hash = 'details';
    };

    internals.homeButton = function () {

        $('#home').click(function (event) {
            event.preventDefault();
            searching = false;
            $('#searchBar').val("");
            internals.start();
            window.location.hash = 'list';
        });
    };

    internals.start = function () {

        if (!searching) {

            service.fetchUrl(ApiUrl)
                .then(function (data) {
                    viewList.displayCharacters(data, internals.reRoute)
                });
        } else {  
           
            service.fetchUrl(newURL)
            .then(function (data) {
                viewList.displayCharacters(data, internals.reRoute);
            });
        };

        $('#submitBTN').click(function (event) {

            searching = true;

            event.preventDefault();

            searchBarInput = $('#searchBar').val();

            newURL = ApiUrl + '?name=' + searchBarInput;

            service.fetchUrl(newURL)
                .then(function (data) {
                    viewList.displayCharacters(data, internals.reRoute);
                });
        });

    };

    externals.init = function () {
        internals.homeButton();
        internals.start();
        viewList;
    };

    return externals;
});