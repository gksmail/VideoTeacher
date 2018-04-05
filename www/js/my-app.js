// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log(navigator.device.capture);
    document.querySelector("#takeVideo").addEventListener("touchend", function() {
        console.log("Take video");
        navigator.device.capture.captureVideo(captureSuccess, captureError, {limit: 1});
    }, false);
    console.log("Device is ready!");
});


function init() {
    
    
    
}

function captureError(e) {
    console.log("capture error: "+JSON.stringify(e));
}

function captureSuccess(s) {
    console.log("Success");
    console.dir(s[0]);
    var v = "<video controls='controls'>";
    v += "<source src='" + s[0].fullPath + "' type='video/mp4'>";
    v += "</video>";
    document.querySelector("#videoArea").innerHTML = v;
}

// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
//        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
//    myApp.alert('Here comes About page');
})

