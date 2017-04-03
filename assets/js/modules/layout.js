const layout = (_this_) => {
  for( let i = 0; i < _this_.elements.length; i++ ){
    let index = Math.round( ( _this_.elements.length / (i+1) ) * 100 );
    if( _this_.elements[i].getAttribute('data-focussed') !== 'true' ){
      _this_.elements[i].style.zIndex = index;
    }

    // Update topZIndex
    _this_.topZIndex = ( index > _this_.topZIndex ? index : _this_.topZIndex );

    _this_.elements[i].style.top = (i+1) * _this_.initTop + 'px';
  }
}