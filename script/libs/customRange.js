/**
 * Created by Ihor on 07.10.2018.
 */
$("document").ready(function() {
    $(".slider").rangeslider();
});
$.fn.rangeslider = function(options) {
    var obj = this;
    var defautValue = obj.attr("value");
    obj.wrap("<span class='range-slider'></span>");
    obj.after("<span class='slider-container'><span class='bar'><span></span></span><span class='bar-btn'></span></span>");
    obj.attr("oninput", "updateSlider(this)");
    updateSlider(this);
    return obj;
};
function updateSlider(passObj) {
    var obj = $(passObj);
    var value = obj.val();
    var min = obj.attr("min");
    var max = obj.attr("max");
    var range = (max - min);
    var percentage = Math.round((value - min ) * 100 / range);
    var nextObj = obj.next();
    nextObj.find("span.bar-btn").css("left", 'calc(' + percentage + "% + 5px" + ')');
    nextObj.find("span.bar > span").css("width", 'calc(' + percentage + "% + 0px" + ')');
    nextObj.find("span.bar-btn").text(value);
};