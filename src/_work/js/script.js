var	cssSwitch = document.querySelector('.js-cssSwitch'),
	linkOld	  = document.getElementById('csslight'),
	linkNew   = document.createElement('link');
cssSwitch.addEventListener('click', function(event) {
	event.preventDefault();
	if (document.getElementById('csslight')) {
		linkOld.parentElement.removeChild(linkOld);
	}
	else {
		document.head.appendChild(linkNew);
		linkNew.setAttribute('rel', 'stylesheet');
		linkNew.setAttribute('href', 'css/style-light.css');
		linkNew.id = 'csslight';
		linkOld = linkNew;
	}
});