const reorder = (_this_) => {
  // Convert to array rather than collection
  var items = Array.prototype.slice.call(_this_.elements);

  items.sort(function(a, b){
    return a.getAttribute('data-stack-order').localeCompare(b.getAttribute('data-stack-order'));
  });

  // reatach the sorted elements
  for(let i = 0, len = items.length; i < len; i++) {
    var parent = items[i].parentNode;
    var detatchedItem = parent.removeChild(items[i]);
    parent.appendChild(detatchedItem);
  }

  // Add any images to array
  _this_.images = _this_.container.getElementsByTagName('img');

  return parent.getElementsByClassName('stackery--stack');
}