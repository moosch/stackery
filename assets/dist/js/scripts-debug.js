'use strict';

var getPositionInParent = function getPositionInParent(element) {
  var _siblings = element.parentNode.parentNode.childNodes,
      siblings = [];
  // Strip out text nodes
  for (var i = 0; i < _siblings.length; i++) {
    if (_siblings[i].nodeType !== 3) siblings.push(_siblings[i]);
  }
  // Get index within siblings
  var index = -1;
  for (var _i = 0; _i < siblings.length; _i++) {
    if (siblings[_i].getAttribute('data-stack-order') == element.parentNode.getAttribute('data-stack-order')) {
      index = _i;
      break;
    }
  }
  return index;
};
'use strict';

var focusStack = function focusStack(_this_, event) {
  var el = event.target.parentNode;

  if (el.getAttribute('data-focussed') === 'true') {
    unFocusStack(_this_, el);
    return;
  }

  // Unfocus all others
  var currentFocussed = _this_.container.getElementsByClassName('focussed');
  for (var i = 0; i < currentFocussed.length; i++) {
    currentFocussed[i].classList.remove('focussed');
  }el.setAttribute('data-focussed', 'true');
  el.classList.add('focussed');

  el.style.zIndex = _this_.topZIndex + 10;
};
'use strict';

var hoverReact = function hoverReact(_this_) {
    for (var i = 0; i < _this_.elements.length; i++) {
        /*
        No longer using...for now
        */
        // Resize element
        // resizeElement(_this_, _this_.elements[i]);

        // Hover
        _this_.elements[i].getElementsByTagName('img')[0].addEventListener('mouseover', function (evt) {
            spaceout(_this_, evt);
        });
        _this_.elements[i].getElementsByTagName('img')[0].addEventListener('mouseout', function (evt) {
            layout(_this_);
        });
        // // On click, focus
        _this_.elements[i].getElementsByTagName('img')[0].addEventListener('click', function (evt) {
            focusStack(_this_, evt);
        });
    }
};
'use strict';

var layout = function layout(_this_) {
  for (var i = 0; i < _this_.elements.length; i++) {
    var index = Math.round(_this_.elements.length / (i + 1) * 100);
    if (_this_.elements[i].getAttribute('data-focussed') !== 'true') {
      _this_.elements[i].style.zIndex = index;
    }

    // Update topZIndex
    _this_.topZIndex = index > _this_.topZIndex ? index : _this_.topZIndex;

    _this_.elements[i].style.top = (i + 1) * _this_.initTop + 'px';
  }
};
'use strict';

var reorder = function reorder(_this_) {
  // Convert to array rather than collection
  var items = Array.prototype.slice.call(_this_.elements);

  items.sort(function (a, b) {
    return a.getAttribute('data-stack-order').localeCompare(b.getAttribute('data-stack-order'));
  });

  // reatach the sorted elements
  for (var i = 0, len = items.length; i < len; i++) {
    var parent = items[i].parentNode;
    var detatchedItem = parent.removeChild(items[i]);
    parent.appendChild(detatchedItem);
  }

  // Add any images to array
  _this_.images = _this_.container.getElementsByTagName('img');

  return parent.getElementsByClassName('stackery--stack');
};
'use strict';

var resizeElement = function resizeElement(_this_, index) {
  /*
  TODO: Check if stack contains image and resize, otherwise set a max height with overflow scroll perhaps
  */

  // Get ratio to set a max width based on maxHeight var
  /*
  NOTE: Positioned absolute elements sometimes have no width/height so we have to use the image within.
  */
  // var s = window.getComputedStyle(el.firstElementChild,null);
  var s = window.getComputedStyle(_this_.elements[index].getElementsByTagName('img')[0], null);

  if (s == 'undefined') return;

  var ratio = parseFloat(s.height) / parseFloat(s.width);
  _this_.elements[index].style.maxWidth = _this_.maxHeight / ratio + 'px';
  _this_.elements[index].style.maxHeight = _this_.maxWidth + 'px';
};
'use strict';

var setScene = function setScene(_this_) {
  // We need to set a max height to make sure that, when 3D transformed, the elements do not overreach the browser
  _this_.maxHeight = window.innerHeight / 2;
  _this_.maxWidth = window.innerWidth / 2;

  _this_.topZIndex = 0;
  _this_.initTop = _this_.maxHeight / 4; // Rough idea to keep the first element from overflowing the top of the viewport

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
};
'use strict';

var spaceout = function spaceout(_this_, event) {

  var index = getPositionInParent(event.target);

  // Check if element is already focussed, if do don't move anything
  if (_this_.elements[index].getAttribute('data-focussed') === 'true') return;

  // Apply style.top variables
  var variant = _this_.maxHeight / 4;
  for (var i = 0; i < _this_.elements.length; i++) {

    // For each before reduce top
    if (i < index) {

      _this_.elements[i].style.top = (i + 1) * _this_.initTop - variant + 'px';

      // For each after increase top
    } else if (i > index) {

      _this_.elements[i].style.top = (i + 1) * _this_.initTop + variant + 'px';
    }
  }
};
'use strict';

var unFocusStack = function unFocusStack(_this_, el) {
  el.setAttribute('data-focussed', 'false');
  el.classList.remove('focussed');

  // Reset element zIndexes
  layout(_this_);
};
'use strict';

var Stackery = function Stackery(el) {

  var _this_ = {

    container: el,
    elements: [],
    // We need to set a max height to make sure that, when 3D transformed, the elements do not overreach the browser
    maxHeight: window.innerHeight / 2,
    maxWidth: window.innerWidth / 2,
    topZIndex: 0,
    initTop: 0, // Rough idea to keep the first element from overflowing the top of the viewport
    mages: []
  };

  // Att stacks
  _this_.elements = _this_.container.getElementsByClassName('stackery--stack');
  // Rough idea to keep the first element from overflowing the top of the viewport
  _this_.initTop = _this_.maxHeight / 4;

  // Apply initial top to stackery container to prevent the top stack being hidden
  _this_.container.style.marginTop = _this_.initTop + 'px';

  setScene(_this_);

  // All ready!
  _this_.container.classList.add('ready');

  window.addEventListener('resize', function () {
    setScene(_this_);
  });
};