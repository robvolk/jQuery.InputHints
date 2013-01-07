jQuery Input Hints Plugin
=========================

jQuery Form Input Hints plugin automatically displays placeholder text on input textboxes.  Placeholder text is an HTML5 feature that only works well on the latest browsers, except of course, for IE.  This plugin works across all major browsers.
I wrote this code to be as simple and easy to use as possible.

DEMO: http://robvolk.com/jquery-form-input-hints-plugin/

GitHub Project Page: https://github.com/robvolk/jQuery.InputHints

jQuery Plugin Page: http://plugins.jquery.com/project/InputHints


USEAGE

<script type="text/javascript">
<!--
$(function() {
	// hook up placeholder text on any input with a placeholder attribute
    $('input[placeholder]').inputHints();
});
-->
</script>

<style>
input.hint { color: #888; }
</style>

<input type="text" placeholder="Hint Text!" />
</pre>

<pre>
&lt;script type="text/javascript"&gt;
$(function () {
    // hook up placeholder text on any input with a placeholder attribute
    <span style="background-color: yellow;">$('input[placeholder]').inputHints();</span>
});
&lt;/script&gt;

&lt;style&gt;
input.hint { color: #888; }
&lt;/style&gt;

&lt;input type="text" placeholder="Hint Text!" /&gt;
</pre>