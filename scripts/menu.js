// JavaScript Document
// Rollover Navigation


var imgHomeOver = new Image();
imgHomeOver.src = 'images/main/active_home.gif';

var imgHomeOut = new Image();
imgHomeOut.src = 'images/main/inactive_home.gif';

var imgHomeHere = new Image();
imgHomeHere.src = 'images/main/here_home.gif';

var imgCardOver = new Image();
imgCardOver.src = 'images/main/active_card.gif';

var imgCardOut = new Image();
imgCardOut.src = 'images/main/inactive_card.gif';

var imgCardHere = new Image();
imgCardHere.src = 'images/main/here_card.gif';

var imgBioOver = new Image();
imgBioOver.src = 'images/main/active_bio.gif';

var imgBioOut = new Image();
imgBioOut.src = 'images/main/inactive_bio.gif';

var imgBioHere = new Image();
imgBioHere.src = 'images/main/here_bio.gif';

var imgGalleryOver = new Image();
imgGalleryOver.src = 'images/main/active_gallery.gif';

var imgGalleryOut = new Image();
imgGalleryOut.src = 'images/main/inactive_gallery.gif';

var imgGalleryHere = new Image();
imgGalleryHere.src = 'images/main/here_gallery.gif';

var imgContactOver = new Image();
imgContactOver.src = 'images/main/active_contact.gif';

var imgContactOut = new Image();
imgContactOut.src = 'images/main/inactive_contact.gif';

var imgContactHere = new Image();
imgContactHere.src = 'images/main/here_contact.gif';

var imgNewOver = new Image();
imgNewOver.src = 'images/main/active_new.gif';

var imgNewOut = new Image();
imgNewOut.src = 'images/main/inactive_new.gif';

var imgNewHere = new Image();
imgNewHere.src = 'images/main/here_new.gif';

function swapImage(imgSrc, imgName){
	document.images[imgName].src = imgSrc;
	}