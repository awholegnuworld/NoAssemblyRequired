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
if (jquery_attr.hasAttribute('js-jquery')) {
	var jquery_inject = document.createElement('script');
	jquery_inject.src = './jquery-3.6.0.min.js';
	document.getElementsByTagName('head')[0].appendChild(jquery_inject);
}
var bootstrapjs_attr = document.getElementsByTagName('html')[0];
if (bootstrapjs_attr.hasAttribute('js-bootstrap')) {
	var bootstrapjs_inject = document.createElement('script');
	bootstrapjs_inject.src = './bootstrap.bundle.min.js';
	document.getElementsByTagName('head')[0].appendChild(bootstrapjs_inject);
}
var d3_attr = document.getElementsByTagName('html')[0];
if (d3_attr.hasAttribute('js-d3')) {
	var d3_inject = document.createElement('script');
	d3_inject.src = './d3.js';
	document.getElementsByTagName('head')[0].appendChild(d3_inject);
}
var react_attr = document.getElementsByTagName('html')[0];
if (react_attr.hasAttribute('js-react')) {
	var react_inject = document.createElement('script');
	var reactdom_inject = document.createElement('script');
	react_inject.src = './react.js';
	reactdom_inject.src = './react-dom.js';
	document.getElementsByTagName('head')[0].appendChild(react_inject);
	document.getElementsByTagName('head')[0].appendChild(reactdom_inject);
}
var backbone_attr = document.getElementsByTagName('html')[0];
if (backbone_attr.hasAttribute('js-backbone')) {
	var backbone_inject = document.createElement('script');
	backbone_inject.src = './backbone.js';
	document.getElementsByTagName('head')[0].appendChild(backbone_inject);
}
var vue_attr = document.getElementsByTagName('html')[0];
if (vue_attr.hasAttribute('js-vue')) {
	var vue_inject = document.createElement('script');
	vue_inject.src = './vue.js';
	document.getElementsByTagName('head')[0].appendChild(vue_inject);
}
var bootstrapcss_attr = document.getElementsByTagName('html')[0];
if (bootstrapcss_attr.hasAttribute('css-bootstrap')) {
	var bootstrapcss_inject = document.createElement('link');
	bootstrapcss_inject.rel = 'stylesheet';
	bootstrapcss_inject.href = './bootstrap.css';
	document.getElementsByTagName('head')[0].appendChild(bootstrapcss_inject);
}
var bulma_attr = document.getElementsByTagName('html')[0];
if (bulma_attr.hasAttribute('css-bulma')) {
	var bulma_inject = document.createElement('link');
	bulma_inject.rel = 'stylesheet';
	bulma_inject.href = './bulma.css';
	document.getElementsByTagName('head')[0].appendChild(bulma_inject);
}
var uikit_attr = document.getElementsByTagName('html')[0];
if (uikit_attr.hasAttribute('css-uikit')) {
	var uikit_inject = document.createElement('link');
	uikit_inject.rel = 'stylesheet';
	uikit_inject.href = './uikit.min.css';
	document.getElementsByTagName('head')[0].appendChild(uikit_inject);
}
var uikitjs_attr = document.getElementsByTagName('html')[0];
if (uikitjs_attr.hasAttribute('js-uikit')) {
	var uikitjs_inject = document.createElement('script');
	uikitjs_inject.src = './uikit-icons.min.js';
	var uikitjs2_inject = document.createElement('script');
	uikitjs2_inject.src = './uikit.min.js';
	document.getElementsByTagName('head')[0].appendChild(uikitjs_inject);
	document.getElementsByTagName('head')[0].appendChild(uikitjs2_inject);
}
var material_attr = document.getElementsByTagName('html')[0];
if (material_attr.hasAttribute('css-materialize')) {
	var material_inject = document.createElement('link');
	material_inject.rel = 'stylesheet';
	material_inject.href = './materialize.min.css';
	var material2_inject = document.createElement('link');
	material2_inject.rel = 'stylesheet';
	material2_inject.href = './material-icons.css';
	document.getElementsByTagName('head')[0].appendChild(material_inject);
	document.getElementsByTagName('head')[0].appendChild(material2_inject);
}
var materialjs_attr = document.getElementsByTagName('html')[0];
if (materialjs_attr.hasAttribute('js-materialize')) {
	var materialjs_inject = document.createElement('script');
	materialjs_inject.src = './materialize.min.js';
	document.getElementsByTagName('head')[0].appendChild(materialjs_inject);
}