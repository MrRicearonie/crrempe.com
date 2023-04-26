$(document).ready(function () {

// VERSION 1.0
    $("#vOne").mouseenter(function () {
        $("#vOne").addClass('button_over').removeClass('button_normal');
    }).mouseleave(function () {
        $("#vOne").addClass('button_normal').removeClass('button_over');
    }).click(function () {
        window.location = window.location.href.replace("pastSites.html", "past/version1/index.html");
    });

// VERSION 2.0
    $("#vTwo").mouseenter(function () {
        $("#vTwo").addClass('button_over').removeClass('button_normal');
    }).mouseleave(function () {
        $("#vTwo").addClass('button_normal').removeClass('button_over');
    }).click(function () {
        window.location = window.location.href.replace("pastSites.html", "../../past/version2/index.html");
    });
});