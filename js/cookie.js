function showCookieNotice() {
    if (this.window.localStorage.getItem('bCookieHinweis')) {
        document.getElementById("cookiehinweis").style="display:none";
    }
}

function cookieOk() {
    document.getElementById("cookiehinweis").style="display:none";
    window.localStorage.setItem('bCookieHinweis', '1');
}

/* Nach Experiment:
localStorage.removeItem('bCookieHinweis');
*/
