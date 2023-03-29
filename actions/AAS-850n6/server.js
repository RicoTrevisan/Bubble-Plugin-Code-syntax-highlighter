function(properties, context) {

	hljs = require('highlightjs');
//	const highlighted_html = hljs.highlightAuto(properties.html).value;
    
	return {

        highlighted_html: hljs.highlightAuto(properties.html).value

    };

}