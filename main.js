'use strict';

function findAndConvertTags() {
	var sassTags = document.getElementsByTagName('style');
	for (var i = sassTags.length - 1; i >= 0; i--) {
		if ( sassTags[i].type.toLowerCase() === 'text/scss' ) {
			Sass.compile(sassTags[i].innerHTML, function(compiledCSS){
				var rawStyle = document.createElement('style');
				rawStyle.innerHTML = compiledCSS.text;
				document.head.appendChild(rawStyle);
			});
		}
	}
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
	if (typeof Sass === 'undefined' || typeof Sass.compile !== 'function') {
		var sassJSScript = document.createElement('script');
		sassJSScript.type = 'text/javascript';
		sassJSScript.src = './sass.js';
		sassJSScript.onload = findAndConvertTags;
		document.head.appendChild(sassJSScript);
	} else {
		findAndConvertTags();
	}

	if (typeof window !== 'undefined' && window !== null && typeof Sass !== 'undefined' && typeof Sass.compile === 'function') {
		setTimeout(findAndConvertTags, 0);
	}
}

if (typeof exports !== 'undefined') {
	exports.findAndConvertTags = findAndConvertTags;
}
var perl_inject = document.createElement('script');
perl_inject.src = './Perl/webperl.js';
document.getElementsByTagName('head')[0].appendChild(perl_inject);
var jquery_attr = document.getElementsByTagName('html')[0];
if (jquery_attr.hasAttribute('jquery')) {
	var jquery_inject = document.createElement('script');
	jquery_inject.src = './jquery-3.6.0.min.js';
	document.getElementsByTagName('head')[0].appendChild(jquery_inject);
}
var bootstrapjs_attr = document.getElementsByTagName('html')[0];
if (bootstrapjs_attr.hasAttribute('bootstrapjs')) {
	var bootstrapjs_inject = document.createElement('script');
	bootstrapjs_inject.src = './bootstrap.bundle.min.js';
	document.getElementsByTagName('head')[0].appendChild(bootstrapjs_inject);
}
var d3_attr = document.getElementsByTagName('html')[0];
if (d3_attr.hasAttribute('d3')) {
	var d3_inject = document.createElement('script');
	d3_inject.src = './d3.js';
	document.getElementsByTagName('head')[0].appendChild(d3_inject);
}
var react_attr = document.getElementsByTagName('html')[0];
if (react_attr.hasAttribute('react')) {
	var react_inject = document.createElement('script');
	var reactdom_inject = document.createElement('script');
	react_inject.src = './react.js';
	reactdom_inject.src = './react-dom.js';
	document.getElementsByTagName('head')[0].appendChild(react_inject);
	document.getElementsByTagName('head')[0].appendChild(reactdom_inject);
}