# JS module for No focus outline

## How to us?

Add to package.json dependencies:

``` json
  "dependencies": {
    "@denysdesign/js-focus-outline": "denysdesign/js-focus-outline",
  }
```

Add to index.js:

``` JS
import focusOutline from '@denysdesign/js-focus-outline';

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        // Focus outline
        focusOutline();
    });
})();
```
