function bgChange() {
    var address = $('#address').val();
    if (address.length < 1) {
        sweetAlert("Please type in an address!");
    }
    else {
        $('body').css({ "background": "url('https://maps.googleapis.com/maps/api/streetview?size=2000x2000&location=" + address + "&fov=120&key=AIzaSyA2gsiXBZZs90Ha2DoPsCCMzmzvf8z8ZMM') no-repeat center center fixed", "-webkit-background-size": "cover", "-moz-background-size": "cover", "-o-background-size": "cover", "background-size": "cover" });
    }
}
$(function () {
    var appInsights = require("applicationinsights");
    appInsights.setup("266fce99-7a60-40ac-91a9-b864281b87d1").start();
    $("h1").fitText(1.3, { minFontSize: '1px', maxFontSize: '34%' });
    $('form').submit(function (jqEvt) {
        jqEvt.preventDefault();
        bgChange();
    });
});
