$(document).ready(function(){
	$(".popup1").popup({
			//would you like a transparent layer underneath the popup?
		transparentLayer: true, 
			//set the opacity percentage of the transparent layer
		transparentOpacity: 70,
			//set true for navigation options between popups of the same title attribute
		gallery: true, 
			//add a counter for gallery
		galleryCounter: true,
			//height in pixels of the gallery title box
		titleHeight: 40, 
			//height in pixels of the gallery navigation box
		//controlHeight: 20, 
			//add a description box underneath the gallery image
		//imageDesc: true,
			//set whether the box with image in it will resize to the image size
		autoSize: true, 
			//when autoSize is set to false, or no image then set the dimensions of the box in pixels
		//boxWidth: 400, 
			//when autoSize is set to false, or no image then set the dimensions of the box in pixels
		//boxHeight: 300, 
			//centers the image in a fixed size box
		//centerImage: true, 
			//set the width of the padding around the box for your drop shadows
		//shadowLength: 42,
			//transition speed from one box to the next
		//transition: 500, 
			//custom class for the popup box
		popupID: "fixedGallery", 
			//custom class for the popup content
		//contentClass: "popupContent",
			//class the close button has
		//closeBox: "popupClose", 
			//set whether you want to be able to close the box or not 
		//hasCloseButton: true, 
			//set  whether the box centers itself when the browser resizes
		//centerOnResize: true, 
			//file path to the loading image
		loaderPath: "css/img/loader.gif", 
			//"hidden" or "visible", can set the css overflow attribute on or off
		//overflow: "visible",
			//allows user to specify an ajax call to a resource
		//ajax: false, 
			//jQuery needs the data type to be specified http://api.jquery.com/jQuery.ajax/
		//ajaxType: "text", 
			//allow for the user to specify the top position of the popup
		//fixedTop: false, 
			//allow for the user to specify the left position of the popup
		//fixedLeft: false, 
			//call back function when the box opens
		onOpen : function() {
			console.log("opened the box .popup1");
		},
		onClose : function() {
			console.log("closed the box .popup1");
		}
	});
	$(".popup2").popup({
		transparentLayer: true, 
		transparentOpacity: 70,
		gallery: true, 
		galleryCounter: true,
		titleHeight: 40, 
		imageDesc: true,
		autoSize: true, 
		popupID: "fixedGallery", 
		loaderPath: "css/img/loader.gif", 
		onOpen : function() {
			console.log("opened the box .popup1");
		},
		onClose : function() {
			console.log("closed the box .popup1");
		}
	});
	$(".popup3").popup({
		transparentLayer: true, 
		transparentOpacity: 70,
		gallery: true, 
		galleryCounter: false,
		autoSize: true, 
		popupID: "fixedGallery", 
		loaderPath: "css/img/loader.gif", 
		onOpen : function() {
			console.log("opened the box .popup1");
		},
		onClose : function() {
			console.log("closed the box .popup1");
		}
	});
	$(".popup4").popup({
		transparentLayer: true, 
		transparentOpacity: 70,
		gallery: true, 
		galleryCounter: true,
		titleHeight: 40, 
		imageDesc: true,
		autoSize: false, 
		boxWidth: 800, 
		boxHeight: 685, 
		centerImage: false, 
		popupID: "fixedGallery", 
		loaderPath: "css/img/loader.gif", 
		onOpen : function() {
			console.log("opened the box .popup1");
		},
		onClose : function() {
			console.log("closed the box .popup1");
		}
	});
});