define(function () {

    var internals = {};
    var externals = {
        id: null,
    };

    internals.cleanDivs = function () {

        $('#character')
            .empty();

        $('#characterDetails')
            .empty();

        $('#details')
            .empty();

        $('#attacks')
            .empty();

        $('#backButton')
            .empty();
    }

    externals.displayError = function () {
        
        internals.cleanDivs();

        $('#character')
            .append($('<div>')
                .append($('<h3>')
                    .append('Something went wrong, please try again...')
                    .css('color', 'red')));
    };

    externals.getDetailsId = function () {
        return externals.id;
    }

    externals.displayCharacters = function (data, onClick) {

        internals.cleanDivs();

        data.cards.forEach(function (result) {

            var img = $('<img>').addClass('dynamic').attr('src', result.imageUrl);
            var header = $('<h3>').append(result.name);

            $('#character')
                .append($('<div>').click(function () {
                    externals.id = result.id;
                    return onClick(result.id);
                })
                    .addClass('pokemon')
                    .append(img)
                    .append(header));
        })
    };

    return externals;

});