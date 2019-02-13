$(document).ready(function () {
    $(".about").click(function () {
        $("#aboutDiv").toggle();
        $("#overlay").toggle();

    });

    $(".howToPlay").click(function () {
        $("#howToPlayDiv").toggle();
        $("#overlay").toggle();
    });

    $(".closeAbout").click(function () {
        $("#aboutDiv").hide();
        $("#overlay").hide();
        $("#gameIframe")[0].contentWindow.focus();
    });

    $(".closeHowToPlay").click(function () {
        $("#howToPlayDiv").hide();
        $("#overlay").hide();
        $("#gameIframe")[0].contentWindow.focus();
    });
});