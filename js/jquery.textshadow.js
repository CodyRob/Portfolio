/* Created by Martin Hintzmann 2008 martin [a] hintzmann.dk
 * MIT (http://www.opensource.org/licenses/mit-license.php) licensed.
 *
 * Version: 0.1
 *
 * Requires:
 *   jQuery 1.2+
 */
(function($) {
	$.fn.textShadow = function(xOffset, yOffset, blurRadius, shadowColor, shadowOpacity) {
		if (!$.browser.msie) return;
		return this.each(function(){
			$(this).css({position:"relative"});
			var span=document.createElement("span");
			$(span).html($(this).html());
			$(this).append(span);
			$(span).css({
				position:	"absolute",
				zIndex:		"-1",	
				color:		shadowColor,
				left:			(-blurRadius+xOffset)+"px",
				top:			(-blurRadius+yOffset)+"px"
			});
			if (blurRadius != 0) {
				if (shadowOpacity != undefined) {
					$(span).css("filter", "progid:DXImageTransform.Microsoft.Blur(pixelradius="+blurRadius+", enabled='true', makeShadow='true', ShadowOpacity="+shadowOpacity+")");
				} else {
					$(span).css("filter", "progid:DXImageTransform.Microsoft.Blur(pixelradius="+blurRadius+", enabled='true')");
				}
			}				
	  });
	};
})(jQuery);