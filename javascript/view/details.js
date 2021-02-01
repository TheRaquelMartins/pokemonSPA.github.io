define(function () {

    var internals = {};
    var externals = {};

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
    };

    externals.displayCharacter = function (data, onClick) {

        internals.cleanDivs();

        var dataResult = data.card;

        var img = $('<img>').addClass('dynamic').attr('src', dataResult.imageUrl);
        var header = $('<h2>').append(dataResult.name);

        $('#characterDetails')
            .append($('<div>')
                .addClass('pokemon')
                .append(img)
                .append(header));

        var type = $('<h2>').append('Pokemon Type').append($('<h3>').append($('<div>').append(dataResult.types)));
        var supertype = $('<h2>').append('Super Type').append($('<h3>').append($('<div>').append(dataResult.supertype)));
        var evolvesFrom = $('<h2>').append('Evolves From').append($('<h3>').append($('<div>').append(dataResult.evolvesFrom)));
        var weakness;

        dataResult.weaknesses.forEach(function (result) {

            weakness = $('<h3>').append($('<div>').append(result.type).append(' ' + result.value));
        });

        $('#details')
            .append($('<div>')
                .append(type)
                .append(supertype)
                .append(evolvesFrom)
                .append($('<h2>')
                    .append('Weaknesses'))
                .append(weakness)
                .append($('<h2>')
                    .append('Attacks')));

        dataResult.attacks.forEach(function (result) {

            var attack = $('<h3>').append(result.name + ' - ').append(result.text);

            $('#attacks')
                .append($('<div>')
                    .append(attack));
        });

        var backButton = $('<img>').attr('src', './resources/backbutton.png')

        $('#backButton')
            .click(onClick)
            .append(backButton)
            .append($('<h4>')
                .append('BACK'));
    };

    return externals;
});
