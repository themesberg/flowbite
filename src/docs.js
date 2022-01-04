// css for docs
import './docs.css';
import docsearch from '@docsearch/js';

docsearch({
    container: '#docsearch',
    appId: 'JUWZAHYJQ9',
    indexName: 'flowbite',
    apiKey: '63250f7f96b4ea48c49dbd149aab687c',
    placeholder: 'Search documentation'
});

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
    var copyText = button.getElementsByClassName('copy-text')[0];
    button.addEventListener("click", function () {
        copyTextToClipboard(textToCopy);
        alert.classList.remove('opacity-0');
        alert.classList.add('opacity-100');
        copyText.innerHTML = 'Copied';

        setTimeout(function () {
            alert.classList.add('opacity-0');
            alert.classList.remove('opacity-100');
            copyText.innerHTML = 'Copy';
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

var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {

    // toggle icons
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

});

const sidebar = document.getElementById('sidebar');

const toggleSidebarMobile = (sidebar, sidebarBackdrop, toggleSidebarMobileHamburger, toggleSidebarMobileClose) => {
    sidebar.classList.toggle('hidden');
    sidebarBackdrop.classList.toggle('hidden');
    toggleSidebarMobileHamburger.classList.toggle('hidden');
    toggleSidebarMobileClose.classList.toggle('hidden');
}

const toggleSidebarMobileEl = document.getElementById('toggleSidebarMobile');
const sidebarBackdrop = document.getElementById('sidebarBackdrop');
const toggleSidebarMobileHamburger = document.getElementById('toggleSidebarMobileHamburger');
const toggleSidebarMobileClose = document.getElementById('toggleSidebarMobileClose');

toggleSidebarMobileEl.addEventListener('click', () => {
    toggleSidebarMobile(sidebar, sidebarBackdrop, toggleSidebarMobileHamburger, toggleSidebarMobileClose);
});

sidebarBackdrop.addEventListener('click', () => {
    toggleSidebarMobile(sidebar, sidebarBackdrop, toggleSidebarMobileHamburger, toggleSidebarMobileClose);
});