// ==UserScript==
// @name USUserJS
// @description GA test script 
// @author Valera Kabisov
// @license MIT
// @version 1.2
// ==/UserScript==

(function () {
	console.log('script started');
	var execute = function (body) {
		if(typeof body === "function") { body = "(" + body + ")();"; }
		var el = document.createElement("script");
		el.textContent = body;
		document.body.appendChild(el);
		return el;
	};

	execute(function() {
		console.log('script in work');
		      
	});
})();