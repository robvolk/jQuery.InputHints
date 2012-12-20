jQuery Input Hints Plugin
=========================

jQuery Form Input Hints plugin automatically displays placeholder text on input textboxes.  Placeholder text is an HTML5 feature that only works well on the latest browsers, except of course, for IE.  This plugin works across all major browsers.
I wrote this code to be as simple and easy to use as possible.

DEMO: http://blog.robvolk.com/2009/01/jquery-form-input-hints.html

jQuery Plugin Page: http://plugins.jquery.com/project/InputHints


USEAGE

<script type="text/javascript">
$(function() {
	// hook up placeholder text on any input with a placeholder attribute
    $('input[placeholder]').inputHints();
});
</script>

<input type="text" placeholder="Hint Text!" />
