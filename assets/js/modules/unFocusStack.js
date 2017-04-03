const unFocusStack = (_this_, el) => {
  el.setAttribute('data-focussed', 'false');
  el.classList.remove('focussed');

  // Reset element zIndexes
  layout(_this_);
}