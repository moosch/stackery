const spaceout = (_this_, event) => {

  var index = getPositionInParent(event.target);

  // Check if element is already focussed, if do don't move anything
  if( _this_.elements[index].getAttribute('data-focussed') === 'true' )
    return;

  // Apply style.top variables
  var variant = _this_.maxHeight/4;
  for( let i = 0; i < _this_.elements.length; i++ ){

    // For each before reduce top
    if( i < index ){

      _this_.elements[i].style.top = ((i+1)*_this_.initTop) - variant + 'px';

    // For each after increase top
    } else if( i > index ){

      _this_.elements[i].style.top = ((i+1)*_this_.initTop) + variant + 'px';

    }

  }
}