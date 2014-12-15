var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "imageFiles");
var galleryList = gallery.getDirectoryListing();

var rowCount = 4;
var margin = 5;

var trueCanvasWidth = pWidth - margin * (rowCount+1);
var size = trueCanvasWidth/rowCount;

var mainWin = Ti.UI.createWindow({
	backgroundColor: "#cecece",
	statusBarStyle: Ti.UI.iPhone.StatusBar.GREY
});

var newWin = Ti.UI.createWindow({
	backgroundColor: "green"
});

var viewContainer = Ti.UI.createScrollView({
	layout: "horizontal",
	width: pWidth,
	contentWidth: pWidth,
	height: pHeight - 21,
	top: 20,
	backgroundImage: "backgroundIos.jpg",
	showVerticalScrollIndicator: true
});


for(var i = 0; i < galleryList.length; i++) {
	
	
	
	var view = Ti.UI.createView({
		backgroundColor: "#33CCFF",
		top: margin,
		left: margin,
		width: 100,
		height: 100,
		borderRadius: 1
	});
	
	var theImage = Ti.UI.createImageView({
	 	image: "imageFiles/" + galleryList[i],
	 	top: margin,
		left: margin,
		width: 90,
		height: 90,
	 });
	
	
	view.add(theImage);
	viewContainer.add(view);
}

mainWin.add(viewContainer);
mainWin.open();