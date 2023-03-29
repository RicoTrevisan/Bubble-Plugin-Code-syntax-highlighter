function(instance, properties, context) {
    
         
    instance.data.nextStyle = properties.style;
          
    if (!!properties.dynamicStyle) {
        console.log(`!properties.dynamicStyle: ${!properties.dynamicStyle}`);
        instance.data.nextStyle = properties.dynamicStyle;
    }
    
    console.log("currentstyle: " + instance.data.currentStyle);
	console.log("nextstyle: " + instance.data.nextStyle);
      
    if (instance.data.currentStyle !== instance.data.nextStyle) {
        console.log(`properties.nextStyle: ${instance.data.nextStyle}`);
    	document
        	.querySelector(`link[title="${instance.data.nextStyle}"]`)
        	.removeAttribute("disabled");
//        	.setAttribute("disabled", "true");
        document
            .querySelector(`link[title="${instance.data.currentStyle}"]`)
            .setAttribute("disabled", "disabled");
//        	.setAttribute("disabled", "false");
		instance.data.currentStyle = instance.data.nextStyle;
    }
        
}