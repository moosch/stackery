const hoverReact = (_this_) => {
  for( let i = 0; i < _this_.elements.length; i++ ){
    /*
    No longer using...for now
    */
    // Resize element
    // resizeElement(_this_, _this_.elements[i]);

    // Hover
    _this_.elements[i].getElementsByTagName('img')[0].addEventListener('mouseover',function(evt){
        spaceout(_this_,evt);
    });
    _this_.elements[i].getElementsByTagName('img')[0].addEventListener('mouseout',function(evt){
        layout(_this_);
    });
    // // On click, focus
    _this_.elements[i].getElementsByTagName('img')[0].addEventListener('click',function(evt){
        focusStack(_this_, evt);
    });
  }
}