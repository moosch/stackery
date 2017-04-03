const resizeElement = (_this_, index) => {
  /*
  TODO: Check if stack contains image and resize, otherwise set a max height with overflow scroll perhaps
  */

  // Get ratio to set a max width based on maxHeight var
  /*
  NOTE: Positioned absolute elements sometimes have no width/height so we have to use the image within.
  */
  // var s = window.getComputedStyle(el.firstElementChild,null);
  var s = window.getComputedStyle(_this_.elements[index].getElementsByTagName('img')[0],null);

  if( s == 'undefined' ) return;

  var ratio = parseFloat(s.height) / parseFloat(s.width);
  _this_.elements[index].style.maxWidth = (_this_.maxHeight / ratio) + 'px';
  _this_.elements[index].style.maxHeight = _this_.maxWidth + 'px';
}