const setScene = (_this_) => {
  // We need to set a max height to make sure that, when 3D transformed, the elements do not overreach the browser
  _this_.maxHeight = window.innerHeight / 2;
  _this_.maxWidth = window.innerWidth / 2;

  _this_.topZIndex = 0;
  _this_.initTop = _this_.maxHeight/4; // Rough idea to keep the first element from overflowing the top of the viewport

  // Apply initial top to stackery container to prevent the top stack being hidden
  _this_.container.style.marginTop = _this_.initTop + 'px';

  /*
  TODO: Combine any possible for loopes in reorder, layout, etc. for effiency
  */

  // Reorder dom elements
  _this_.elements = reorder(_this_);

  // set style top values
  layout(_this_);

  // On hover effect
  hoverReact(_this_);
}