/**
 * Calculate the offset of the given iframe relative to the top window.
 * - Walks up the iframe chain, checking the offset of each one till it reaches top
 * - Only works with friendly iframes. https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy#Cross-origin_script_API_access
 * - Takes into account scrolling, but comes up with a result relative to
 *   top iframe, regardless of being visibile withing intervening frames.
 *
 * @param window win    the iframe we're interested in (e.g. window)
 * @param object dims   an object containing the offset so far:
 *                          { left: [x], top: [y] }
 *                          (optional - initializes with 0,0 if undefined)
 * @return dims object above
 */
var computeFrameOffset = function(win, dims) {
	// initialize our result variable
	if (typeof dims === 'undefined') {
		var dims = { top: 0, left: 0 };
	}

	// find our <iframe> tag within our parent window
	var frames = win.parent.document.getElementsByTagName('iframe');
	var frame;
	var found = false;

	for (var i=0, len=frames.length; i<len; i++) {
		frame = frames[i];
		if (frame.contentWindow == win) {
			found = true;
			break;
		}
	}

	// add the offset & recur up the frame chain
	if (found) {
		var rect = frame.getBoundingClientRect();
		dims.left += rect.left;
		dims.top += rect.top;
		if (win !== top) {
			computeFrameOffset(win.parent, dims);
		}
	}
	return dims;
};


$(document).ready(function(){

	$('.modal').on('show.bs.modal', function (e) {

		// Do nothing if not in iframe
		if (top.location == self.document.location) return;

		// get iframe offset
		var frameOffset = computeFrameOffset(window);
		var offSetTop = frameOffset.top * -1 + 10;
		$(this).find('.modal-dialog').css('margin-top', offSetTop);

	});

});
