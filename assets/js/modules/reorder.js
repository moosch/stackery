const reorder = (_this_) => {
  // Convert to array rather than collection
  var items = Array.prototype.slice.call(_this_.elements);

  items.sort(function(a, b){
    // If item has no data-stack-order just leave in place
    var aO = a.getAttribute('data-stack-order');
    var bO = b.getAttribute('data-stack-order');
    
    if( aO === null ) aO = getPositionInParent(a.getElementsByTagName('img')[0]);

    if( bO === null ) bO = getPositionInParent(b.getElementsByTagName('img')[0]);

    return aO > bO;
  });

  // reatach the sorted elements
  var parent;
  for(let i = 0, len = items.length; i < len; i++) {
    parent = items[i].parentNode;
    var detatchedItem = parent.removeChild(items[i]);
    parent.appendChild(detatchedItem);
  }

  // Add any images to array
  _this_.images = _this_.container.getElementsByTagName('img');

  return parent.getElementsByClassName('stackery--stack');
}