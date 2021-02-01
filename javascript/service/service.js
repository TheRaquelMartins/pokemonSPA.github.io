define(['view/list'], function (viewList) {


    var externals = {};

    externals.fetchUrl = async function (data) {

        const response = await fetch(data);
        if (!response.ok) {
            return viewList.displayError();
        }
        return response.json();
    };

    return externals;
});