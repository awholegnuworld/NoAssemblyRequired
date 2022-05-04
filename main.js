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
		sassJSScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.9.12/sass.sync.min.js';
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
document.write("<script src='./Perl/webperl.js'></script>")