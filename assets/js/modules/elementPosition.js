const getPositionInParent = (element) => {
  let _siblings = element.parentNode.parentNode.childNodes,
    siblings = [];
  // Strip out text nodes
  for( let i = 0; i < _siblings.length; i++ ){
    if( _siblings[i].nodeType !== 3 )
      siblings.push(_siblings[i]);
  }
  // Get index within siblings
  let index = -1;
  for( let i = 0; i < siblings.length; i++ ){
    if( siblings[i].getAttribute('data-stack-order') == element.parentNode.getAttribute('data-stack-order') ){
      index = i;
      break;
    }
  }
  return index;
}