# Stakery

A UI for presenting screens of your app

## Getting started

Include the CSS in your document header:
```html
<link rel="stylesheet" type="text/css" href="/dist/css/styles.min.css">
```

Then build out your stack markup like so:

```html
<div id="yourId" class="stackery">

  <div class="stackery--stack" data-stack-order="1">
    <img src="assets/images/screen-1.jpg" width="360" height="640" alt="Device design 1">
  </div>

  <div class="stackery--stack" data-stack-order="2">
    <img src="assets/images/screen-2.jpg" width="360" height="640" alt="Device design 2">
  </div>

  <div class="stackery--stack" data-stack-order="3.1">
    <img src="assets/images/screen-3.1.jpg" width="360" height="640" alt="Device design 3.1">
  </div>

</div>
```

Include the JavaScript in the footer and attach scroll progress to document body:

```html
<script src="/dist/js/scripts.js"></script>
```
```js
new Stackery( document.getElementById('yourId') );
```


### An addition

You can set a custom order using `data-stack-order` and setting an `int` or `float`
```htmls
<div class="stackery--stack" data-stack-order="3.1">
  <img src="assets/images/screen-3.1.jpg" width="360" height="640">
</div>
```


### License

PetitePageProgress is MIT Licensed

Copyright (c) 2017 [@moosch](https://github.com/moosch)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.