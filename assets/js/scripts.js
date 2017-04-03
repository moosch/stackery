const Stackery = (el) => {

  let _this_ = {

    container     : el,
    elements      : [],
    // We need to set a max height to make sure that, when 3D transformed, the elements do not overreach the browser
    maxHeight     : window.innerHeight / 2,
    maxWidth      : window.innerWidth / 2,
    topZIndex     : 0,
    initTop       : 0, // Rough idea to keep the first element from overflowing the top of the viewport
    mages         : []
  }

  // Att stacks
  _this_.elements = _this_.container.getElementsByClassName('stackery--stack');
  // Rough idea to keep the first element from overflowing the top of the viewport
  _this_.initTop = _this_.maxHeight/4;

  // Apply initial top to stackery container to prevent the top stack being hidden
  _this_.container.style.marginTop = _this_.initTop + 'px';

  setScene(_this_);

  // All ready!
  _this_.container.classList.add('ready');

  window.addEventListener('resize', function(){
    setScene(_this_);
  });

}


