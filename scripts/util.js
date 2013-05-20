/**
 * function getCopyrightTag
 * Will capture the years needed for the copy write information. 
 * This function will capture the initial year and current year
 * and display as a string.
**/
function getCopyrightTag() {
	
	var initialYear = 2004;
	var currentYear = new Date();
	return initialYear + ' - ' + currentYear.getFullYear();
	
}
/**
 * copywriteDates will hold the text needed to display
 */
var copywriteDates = getCopyrightTag();

function getArticle(){
	var url = "http://www.wetcanvas.com/Articles2/35425/528/";
	document.open(url, 'WetCanvas', 'locationbar,scrollbars,menubar,toolbar,width=800,height=600');
}

function mousealert(event) {
	var message = "Contact the company for copyrights and licensing.";
	
	try {
		if (event.button > 1) { 
			window.alert(message);
			return false;
		}
	} catch(e) {
		return false;		
	}
}

//Disable right mouse click Script
//By Maximus (maximus@nsimail.com) w/ mods by DynamicDrive
//For full source code, visit http://www.dynamicdrive.com


var message = {
	rightClick : "Right click is disabled!"
};

///////////////////////////////////
function clickIE4(){
	if (event.button==2){
		window.alert(message);
		return false;
	}
}

function clickNS4(e){
	try {
		if(document.layers || document.getElementById && !document.all) {
			if (e.which==2 || e.which==3){
				window.alert(message.rightClick);
				return false;
			}
		}
	} catch(exception) {
		return false;
	}
}


if (document.layers) {
	document.captureEvents(Event.MOUSEDOWN);
	document.onmousedown=clickNS4;

} else if (document.all && !document.getElementById) {
	document.onmousedown=clickIE4;
	
}

document.oncontextmenu = new Function("window.alert(message.rightClick);return false;");
document.onmousedown = mousealert(Event);

