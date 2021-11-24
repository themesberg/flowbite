// css for docs
import './docs.css';

function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function () {
        console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    });
}

function initiateCopyToClipboard(element) {
    var textToCopy = element.getElementsByClassName("code-preview")[0].innerHTML;
    var button = element.getElementsByClassName("copy-to-clipboard-button")[0];
    var alert = document.getElementById('copied-code-alert');
    button.addEventListener("click", function () {
        copyTextToClipboard(textToCopy);
        alert.classList.remove('opacity-0');
        alert.classList.add('opacity-100');

        setTimeout(function () {
            alert.classList.add('opacity-0');
            alert.classList.remove('opacity-100');
        }, 3000);
    });
}

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById('currentYear').textContent = new Date().getFullYear();

    var codeExamples = document.getElementsByClassName("code-example");
    for (var i = 0; i < codeExamples.length; i++) {
        initiateCopyToClipboard(codeExamples.item(i));
    }

});

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
// localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
// localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme')