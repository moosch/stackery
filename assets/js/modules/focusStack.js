const focusStack = (_this_, event) => {
	let el = event.target.parentNode;

  if( el.getAttribute('data-focussed') === 'true' ){
    unFocusStack(_this_,el);
    return;
  }

  // Unfocus all others
  let currentFocussed = _this_.container.getElementsByClassName('focussed');
  for( let i = 0; i < currentFocussed.length; i++ )
    currentFocussed[i].classList.remove('focussed');

  el.setAttribute('data-focussed', 'true');
  el.classList.add('focussed');

  el.style.zIndex = _this_.topZIndex+10;
}