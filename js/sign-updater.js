var urlDoc = "./test.txt";

$.ajaxSetup ({
    // Disable caching of AJAX responses
    cache: false
});

var lastUrl;
var currentUrl;

function getSignUrl() {
	$.get( urlDoc, function(data1, status1) {
		currentUrl = data1;
	});
}

function refreshFrame() {
	alert( currentUrl );
}

function loadSignUrl() {
	getSignUrl();
	if( currentUrl != lastUrl ) {
		refreshFrame();
		lastUrl = currentUrl;
	}
}

$(document).ready(function() {
	loadSignUrl();
});