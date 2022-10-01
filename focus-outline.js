"use strict";

import './scss/no-focus-outline.scss';

export default function focusOutline() {
    window.addEventListener('keyup', (e) => {
        if (e.which === 9) {
            document.documentElement.classList.remove('js-no-focus-outline');
        }
    });
}