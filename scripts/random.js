// JavaScript Document
// Random Banner
function banner(){
	var bannerImages = new Array();
	for(var i = 0; i < 17; i++){
		bannerImages[i] = new Image();
		bannerImages[i].src = (i + 1) + ".jpg";
		}
		
	var randomImageIndex = Math.ceil(Math.random() * 16);
	
	if(randomImageIndex < 1)
		randomImageIndex = 0;
	
	if(randomImageIndex > 16)
		randomImageIndex = 16;

	document.write('<img src="' + bannerImages[randomImageIndex].src 
			+ '" width="750" alt=" Copyright &copy; 2004 - 2011. Marilyn Speck Ballard.">');
}