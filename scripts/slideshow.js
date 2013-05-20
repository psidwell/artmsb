// JavaScript Document
var scrollerwidth='150px'
var scrollerheight='210px'
var pausebetweenimages=2000;

//configure the below variable to change the images used in the slideshow. 
var largeImage = new Array()
largeImage[0] = "javascript:void(window.open('images/large/24.jpg', 'NeighborsFarm', 'width=625,height=310'))";
largeImage[1] = "javascript:void(window.open('images/large/23.jpg', 'CatholicChapel', 'width=525,height=650'))";
largeImage[2] = "javascript:void(window.open('images/large/22.jpg', 'AfterTheRain', 'width=625,height=500'))";
largeImage[3] = "javascript:void(window.open('images/large/21.jpg', 'ChiefTenFeathers', 'width=430,height=550'))";
largeImage[4] = "javascript:void(window.open('images/large/gateway.jpg', 'Gateway', 'width=425,height=600'))";
largeImage[5] = "javascript:void(window.open('images/large/feast.jpg', 'Feast', 'width=450,height=600'))";
largeImage[6] = "javascript:void(window.open('images/large/18.jpg', 'Nevermore', 'width=650,height=600'))";
largeImage[7] = "javascript:void(window.open('images/large/17.jpg', 'Unnamed', 'width=650,height=600'))";
largeImage[8] = "javascript:void(window.open('images/large/16.jpg', 'PershingSallyPort', 'width=205,height=260'))";
largeImage[9] = "javascript:void(window.open('images/large/15.jpg', 'WalkingWithFriends', 'width=515,height=405'))";
largeImage[10] = "javascript:void(window.open('images/large/14.jpg', 'SouthPasture', 'width=475,height=405'))";
largeImage[11] ="javascript:void(window.open('images/large/13.jpg', 'Sandbox', 'width=395,height=520'))"; 
largeImage[12] = "javascript:void(window.open('images/large/12.jpg', 'PianoPractice', 'width=500,height=495'))";
largeImage[13] = "javascript:void(window.open('images/large/11.jpg', 'Parkbench', 'width=535,height=380'))";
largeImage[14] = "javascript:void(window.open('images/large/10.jpg', 'NewKidOnTheBlock', 'width=365,height=270'))";
largeImage[15] = "javascript:void(window.open('images/large/9.jpg', 'MissPrissy', 'width=885,height=645'))";
largeImage[16] = "javascript:void(window.open('images/large/8.jpg', 'Unnamed', 'width=500,height=365'))";
largeImage[17] = "javascript:void(window.open('images/large/7.jpg', 'GeeseAndRabbit', 'width=165,height=220'))";
largeImage[18] = "javascript:void(window.open('images/large/6.jpg', 'CookinForThisFamilyJustWearsMeOut', 'width=400,height=510'))";
largeImage[19] = "javascript:void(window.open('images/large/5.jpg', 'CardinalsUnderOak', 'width=430,height=330'))";
largeImage[20] = "javascript:void(window.open('images/large/4.jpg', 'CardinalInJuniperTree', 'width=375,height=505'))";
largeImage[21] = "javascript:void(window.open('images/large/3.jpg', 'CannonAtTrophyPoint', 'width=660,height=505'))";
largeImage[22] = "javascript:void(window.open('images/large/2.jpg', 'Boatride', 'width=482,height=460'))";
largeImage[23] = "javascript:void(window.open('images/large/1.jpg', 'BattlefieldMonument', 'width=395,height=500'))";

// <alt> tags for slide show images.
var altTags = new Array()
altTags[0] = 'Neighbor\'s Farm';
altTags[1] = 'Catholic Chapel';
altTags[2] = 'After the Rain';
altTags[3] = 'Chief Ten Feathers';
altTags[4] = 'Gateway Arch';
altTags[5] = 'What a Feast!';
altTags[6] = 'Nevermore';
altTags[7] = 'Unnamed';
altTags[8] = 'Pershing Sally Port';
altTags[9] = 'Walking with Friends';
altTags[10] = 'South Pasture';
altTags[11] = 'Sandbox';
altTags[12] = 'Piano Practice';
altTags[13] = 'Parkbench';
altTags[14] = 'New Kid On The Block';
altTags[15] = 'Miss Prissy';
altTags[16] = 'Unnamed';
altTags[17] = 'Geese and Rabbit';
altTags[18] = 'Cookin\' For This Family Just Wears Me Out';
altTags[19] = 'Cardinals Under Oak';
altTags[20] = 'Cardinal in Juniper Tree';
altTags[21] = 'Cannon at Trophy Point';
altTags[22] = 'Boatride';
altTags[23] = 'Battlefield Monument';


var showNewImageFirst = 0;
var newImageID = 22;


var currentdate = 0;
var core = 0;
var ran = 60/largeImage.length;

var randomSlideIndex = 0;
var slideimages = new Array();
for(var i = 0; i < 22; i++){
	
	slideimages[i] = new Image();
	
	slideimages[i] = '<a href="' + largeImage[i] + '"><img src="images/slideshow/' + (largeImage.length - i) + '.jpg" alt="' + altTags[i] + 
		'.  Copyright &copy; 2004 - 2011. Marilyn Speck Ballard." border="0"></a><br /><div style="font:8pt,sans-serif;text-align:center"><em>' + altTags[i] + 
		'</em></div>';
}

function featuredImage()
{
	var randomFeaturedImage;
	
	randomFeaturedImage = Math.ceil(Math.random() * slideimages.length);
	
	if((randomFeaturedImage >= largeImage.length) || (randomFeaturedImage < 1) || 
		(randomFeaturedImage == null)){ randomFeaturedImage = 2; }
		
	document.write(slideimages[randomFeaturedImage]);
}


///////Do not edit past this line///////////////////////

var ie=document.all
var dom=document.getElementById

if (slideimages.length>2)
i=2
else
i=0

function move1(whichlayer){
tlayer=eval(whichlayer)
if (tlayer.top>0&&tlayer.top<=5){
tlayer.top=0
setTimeout("move1(tlayer)",pausebetweenimages)
setTimeout("move2(document.main.document.second)",pausebetweenimages)
return
}
if (tlayer.top>=tlayer.document.height*-1){
tlayer.top-=5
setTimeout("move1(tlayer)",50)
}
else{
tlayer.top=parseInt(scrollerheight)
tlayer.document.write(slideimages[i])
tlayer.document.close()
if (i==slideimages.length-1)
i=0
else
i++
}
}

function move2(whichlayer){
tlayer2=eval(whichlayer)
if (tlayer2.top>0&&tlayer2.top<=5){
tlayer2.top=0
setTimeout("move2(tlayer2)",pausebetweenimages)
setTimeout("move1(document.main.document.first)",pausebetweenimages)
return
}
if (tlayer2.top>=tlayer2.document.height*-1){
tlayer2.top-=5
setTimeout("move2(tlayer2)",50)
}
else{
tlayer2.top=parseInt(scrollerheight)
tlayer2.document.write(slideimages[i])
tlayer2.document.close()
if (i==slideimages.length-1)
i=0
else
i++
}
}

function move3(whichdiv){
tdiv=eval(whichdiv)
if (parseInt(tdiv.style.top)>0&&parseInt(tdiv.style.top)<=5){
tdiv.style.top=0+"px"
setTimeout("move3(tdiv)",pausebetweenimages)
setTimeout("move4(second2_obj)",pausebetweenimages)
return
}
if (parseInt(tdiv.style.top)>=tdiv.offsetHeight*-1){
tdiv.style.top=parseInt(tdiv.style.top)-5+"px"
setTimeout("move3(tdiv)",50)
}
else{
tdiv.style.top=scrollerheight
tdiv.innerHTML=slideimages[i]
if (i==slideimages.length-1)
i=0
else
i++
}
}

function move4(whichdiv){
tdiv2=eval(whichdiv)
if (parseInt(tdiv2.style.top)>0&&parseInt(tdiv2.style.top)<=5){
tdiv2.style.top=0+"px"
setTimeout("move4(tdiv2)",pausebetweenimages)
setTimeout("move3(first2_obj)",pausebetweenimages)
return
}
if (parseInt(tdiv2.style.top)>=tdiv2.offsetHeight*-1){
tdiv2.style.top=parseInt(tdiv2.style.top)-5+"px"
setTimeout("move4(second2_obj)",50)
}
else{
tdiv2.style.top=scrollerheight
tdiv2.innerHTML=slideimages[i]
if (i==slideimages.length-1)
i=0
else
i++
}
}

function startscroll(){
if (ie||dom){
first2_obj=ie? first2 : document.getElementById("first2")
second2_obj=ie? second2 : document.getElementById("second2")
move3(first2_obj)
second2_obj.style.top=scrollerheight
second2_obj.style.visibility='visible'
}
else if (document.layers){
document.main.visibility='show'
move1(document.main.document.first)
document.main.document.second.top=parseInt(scrollerheight)+5
document.main.document.second.visibility='show'
}
}

window.onload=startscroll
