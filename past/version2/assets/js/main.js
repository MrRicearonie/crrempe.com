// Do this when page loads
$(document).ready(function () {
    var project = 0;
    var pastSite = "https://www.crrempe.com/SiteBeta/pastSites.html";

    $("#hi").removeClass("hiStart").addClass("hiEnd");

    setTimeout(function(){
        $("#hi").removeClass("hiEnd").addClass("hiStart");
        setTimeout(function () {
            $("#hi").addClass('hidden');
            $("#myPic").removeClass('opacityZero');
            setTimeout(function () {
                $("#myPic").removeClass("myPicPositionStart").addClass("myPicPositionEnd");
                $("#about").removeClass("aboutStart").addClass("aboutEnd");
                $("#projects_button").addClass("button_enter")
                started = 1;
                setTimeout(function() {
                    $('.rightsideCover').addClass("hidden");
                    $("#about").addClass('front').removeClass('back');
                }, 500);
            }, 500);
        }, 1000);
    }, 1500);

// PROJECTS BUTTON
    $("#projects_button").mouseenter(function(){
        $("#projects_button").addClass('projects_button_over').removeClass('projects_button_normal');
    }).mouseleave(function(){
        $("#projects_button").addClass('projects_button_normal').removeClass('projects_button_over');
    }).click(function(){
        goToProjects();
    });

// ABOUT BUTTON
    $("#about_button").mouseenter(function () {
        $("#about_button").addClass('about_button_over').removeClass('about_button_normal');
    }).mouseleave(function () {
        $("#about_button").addClass('about_button_normal').removeClass('about_button_over');
    }).click(function () {
        goToAbout();
    });

// UW WEBSITE
    $("#uwWebsite").mouseenter(function() {
        $("#uwWebsite").addClass("uwWebsite_over").removeClass("uwWebsite_normal");
    }).mouseleave(function () {
        $("#uwWebsite").addClass("uwWebsite_normal").removeClass("uwWebsite_over");
    }).click(function () {
        window.open('https://mrricearonie.github.io/portfolio/');
    });

// ASTRANNO WEBSITE
    $("#astrannoWebsite").mouseenter(function () {
        $("#astrannoWebsite").addClass('astrannoWebsite_over').removeClass('astrannoWebsite_normal');
    }).mouseleave(function () {
        $("#astrannoWebsite").addClass('astrannoWebsite_normal').removeClass('astrannoWebsite_over');
    }).click(function () {
        window.open('https://www.astranno.com');
    });

// WIFICONNECT WEBSITE
    $("#wificonnectWebsite").mouseenter(function () {
        $("#wificonnectWebsite").addClass('wificonnectWebsite_over').removeClass('wificonnectWebsite_normal');
    }).mouseleave(function () {
        $("#wificonnectWebsite").addClass('wificonnectWebsite_normal').removeClass('wificonnectWebsite_over');
    }).click(function () {
        window.open('https://www.wificonnect.xyz');
    });

// WIFICONNECT APPSTORE
    $("#wificonnectApp").mouseenter(function () {
        $("#wificonnectApp").addClass('wificonnectWebsite_over').removeClass('wificonnectWebsite_normal');
    }).mouseleave(function () {
        $("#wificonnectApp").addClass('wificonnectWebsite_normal').removeClass('wificonnectWebsite_over');
    }).click(function () {
        window.open('https://itunes.apple.com/us/app/wi-fi-connect/id1049217112');
    });

// PFPROULETTE WEBSITE
    $("#pfprouletteWebsite").mouseenter(function () {
        $("#pfprouletteWebsite").addClass('pfproulette_over').removeClass('pfproulette_normal');
    }).mouseleave(function () {
        $("#pfprouletteWebsite").addClass('pfproulette_normal').removeClass('pfproulette_over');
    }).click(function () {
        window.open('https://pfproulette.com');
    });

// PAST SITES WEBSITE
    $("#pastWebsite").mouseenter(function () {
        $("#pastWebsite").addClass('past_over').removeClass('past_normal');
    }).mouseleave(function () {
        $("#pastWebsite").addClass('past_normal').removeClass('past_over');
    }).click(function () {
        window.open("https://www.crrempe.com/pastSites.html");
    });

// For the projects page, for next add 1 to project, for previous sub 1 from project
// Set project -1 to prevProject and project +1 to nextProject

// NEXT PROJECT
    $("#next_button").mouseenter(function(){
        $("#next_button").addClass('project_button_over').removeClass('project_button_normal');
    }).mouseleave(function(){
        $("#next_button").removeClass('project_button_over').addClass('project_button_normal');
    }).click(function(){
        console.log(project)
        if (project == 4) {
            project = 0;
        } else {
            project = project + 1;
        }

        $('.prevProject').each(function () {
            $(this).addClass('otherProject').removeClass('prevProject');
        });

        $('.currentProject').each(function () {
            $(this).addClass('prevProject').removeClass('currentProject');
        });

        $('.nextProject').each(function () {
            $(this).addClass('currentProject').removeClass('nextProject');
        });

        switch (project) {
            case 0:
                $("#uw").addClass('nextProject').removeClass('otherProject');
                $("#uwIconBox").addClass('nextProject').removeClass('otherProject');
                break;
            case 1:
                $("#astranno").addClass('nextProject').removeClass('otherProject');
                $("#astrannoIconBox").addClass('nextProject').removeClass('otherProject');
                break;
            case 2:
                $("#wificonnect").addClass('nextProject').removeClass('otherProject');
                $("#wificonnectIconBox").addClass('nextProject').removeClass('otherProject');
                break;
            case 3:
                $("#pastSites").addClass('nextProject').removeClass('otherProject');
                $("#pastSitesIconBox").addClass('nextProject').removeClass('otherProject');
                break;
            default:
                $("#pfproulette").addClass('nextProject').removeClass('otherProject');
                $("#pfprouletteIconBox").addClass('nextProject').removeClass('otherProject');
                break;
        }
    });

// PREVIOUS PROJECT
    $("#prev_button").mouseenter(function () {
        $("#prev_button").addClass('project_button_over').removeClass('project_button_normal');
     }).mouseleave(function () {
        $("#prev_button").removeClass('project_button_over').addClass('project_button_normal');
    }).click(function () {
        if (project == 0) {
            project = 4;
        } else {
            project = project - 1;
        }

        $('.nextProject').each(function() {
            $(this).addClass('otherProject').removeClass('nextProject');
        });

        $('.currentProject').each(function () {
            $(this).addClass('nextProject').removeClass('currentProject');
        });

        $('.prevProject').each(function () {
            $(this).addClass('currentProject').removeClass('prevProject');
        });

        switch (project) {
            case 0:
                $("#pastSites").addClass('prevProject').removeClass('otherProject');
                $("#pastSitesIconBox").addClass('prevProject').removeClass('otherProject');
                break;
            case 1:
                $("#pfproulette").addClass('prevProject').removeClass('otherProject');
                $("#pfprouletteIconBox").addClass('prevProject').removeClass('otherProject');
                break;
            case 2:
                $("#uw").addClass('prevProject').removeClass('otherProject');
                $("#uwIconBox").addClass('prevProject').removeClass('otherProject');
                break;
            case 3:
                $("#astranno").addClass('prevProject').removeClass('otherProject');
                $("#astrannoIconBox").addClass('prevProject').removeClass('otherProject');
                break;
            default:
                $("#wificonnect").addClass('prevProject').removeClass('otherProject');
                $("#wificonnectIconBox").addClass('prevProject').removeClass('otherProject');
                break;
        }
    });
});

function goToProjects() {
    page = 1;
    $("#projects_button").removeClass('button_enter').addClass('button_pressed');
    $("#myPic").addClass("myPicPositionProjects transitionSpeed").removeClass("myPicPositionEnd myPicTransStart");
    $("#about").addClass("aboutTransition transitionSpeed back").removeClass("aboutEnd aboutStartTrans front");
    $("#projects").removeClass('projectsHide');
    $("#icons").removeClass('iconsHide');
    setTimeout(function () {
        $("#projects_button").addClass('hidden');
        $("#about_button").addClass('button_enter').removeClass('hidden');
        $("#next_button").removeClass('arrow_hidden').addClass('arrow_show_next');
        $("#prev_button").removeClass('arrow_hidden').addClass('arrow_show_prev');
    }, 500);
}

function goToAbout() {
    page = 0;
    $("#next_button").addClass('arrow_hidden').removeClass('arrow_show_next');
    $("#prev_button").addClass('arrow_hidden').removeClass('arrow_show_prev');
    $("#about_button").removeClass('button_enter').addClass('button_pressed');
    $("#myPic").removeClass("myPicPositionProjects").addClass("myPicPositionEnd");
    $("#about").removeClass("aboutTransition back").addClass("aboutEnd front");
    $("#projects").addClass('projectsHide');
    $("#icons").addClass('iconsHide');
    setTimeout(function () {
        $("#about_button").addClass('hidden');
        $("#projects_button").addClass('button_enter').removeClass('hidden');
    }, 500);
}

// Move between about and projects with scroll
function scrollWheel(event) {
    if (started == 1) {
        event.preventDefault();
    
        scale += event.deltaY * -0.01;
    
        // Restrict scale
        scale = Math.min(Math.max(.125, scale), 1);

        if (scale < 0.5) {
            if (page == 0) {
                goToProjects();
            }
        } else {
            if (page == 1) {
                goToAbout();
            }
        }
    }
}

var page = 0;
var scale = 0;
var started = 0;

// If the window is large enough for non-mobile site, scrollwheel = switch page
if ($(window).width() > 991) {
    const el = document.querySelector('.content');
    el.onwheel = scrollWheel;
}

$(window).resize(function() {
    console.log($(window).width());
    if ($(window).width() > 991) {
        const el = document.querySelector('.content');
        el.onwheel = scrollWheel;
    } else {
        const el = document.querySelector('.content');
        el.onwheel = null;
    }
});

