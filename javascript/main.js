requirejs.config({
    baseUrl: './javascript'
});

requirejs(['router'], function(router){
    $(document).ready(router.init);
});