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

const fallbackCopyTextToClipboard = text => {
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

const copyTextToClipboard = text => {
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

const initiateCopyToClipboard = element => {
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

const initiateToggleDarkState = element => {
  var codePreviewWrapper = element.getElementsByClassName('code-preview-wrapper')[0];
  var iframeCodeEl = element.getElementsByClassName('iframe-code')[0];
  var button = element.getElementsByClassName("toggle-dark-state-example")[0];
  var fullViewButton = element.getElementsByClassName("toggle-full-view")[0];
  var tabletViewButton = element.getElementsByClassName("toggle-tablet-view")[0];
  var mobileViewButton = element.getElementsByClassName("toggle-mobile-view")[0];
  var moonIcon = element.querySelector('[data-toggle-icon="moon"]');
  var sunIcon = element.querySelector('[data-toggle-icon="sun"]');

  if (button) {
    button.addEventListener('click', function () {
      var state = button.getAttribute('data-toggle-dark');

      if (state === 'light') {
        codePreviewWrapper.classList.add('dark');
        button.setAttribute('data-toggle-dark', 'dark');
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
      }
      if (state === 'dark') {
        codePreviewWrapper.classList.remove('dark');
        button.setAttribute('data-toggle-dark', 'light');
        moonIcon.classList.remove('hidden');
        sunIcon.classList.add('hidden');
      }
    })
  }

  if (mobileViewButton) {
    mobileViewButton.addEventListener('click', () => {
      iframeCodeEl.classList.add('max-w-sm')
      iframeCodeEl.classList.add('max-w-lg')
    })
  }
  if (tabletViewButton) {
    tabletViewButton.addEventListener('click', () => {
      iframeCodeEl.classList.add('max-w-lg')
      iframeCodeEl.classList.remove('max-w-sm')
    })
  }
  if (fullViewButton) {
    fullViewButton.addEventListener('click', () => {
      iframeCodeEl.classList.remove('max-w-sm', 'max-w-lg')
    })
  }

}

// toggle dark mode
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

// sidebar functionality
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

window.addEventListener('DOMContentLoaded', () => {

  // copy to clipboard
  document.getElementById('currentYear').textContent = new Date().getFullYear();

  var codeExamples = document.getElementsByClassName("code-example");
  for (var i = 0; i < codeExamples.length; i++) {
    initiateCopyToClipboard(codeExamples.item(i));
    initiateToggleDarkState(codeExamples.item(i));
  }

  // toc menu item activation
  const deactivateMenuEl = el => {
    el.classList.remove('!border-blue-700', '!after:opacity-100', '!text-blue-700', 'dark:!border-blue-500', 'dark:!text-blue-500')
  }

  const allMenuEls = document.querySelectorAll('#TableOfContents [href]')
  const activateMenuEl = el => {
    allMenuEls.forEach(el => {
      deactivateMenuEl(el)
    })
    el.classList.add('!border-blue-700', '!after:opacity-100', '!text-blue-700', 'dark:!border-blue-500', 'dark:!text-blue-500')
  }

  // anchor change activate menu element
  let anchorChanged = false;
  window.addEventListener('hashchange', () => {
    anchorChanged = true;
    const menuEl = document.querySelector(`#TableOfContents [href="${location.hash}"]`)
    activateMenuEl(menuEl)
    setTimeout(() => {
      anchorChanged = false;
    }, 99)
  })

  // toc on scroll activation
  const contentAnchorTags = document.querySelectorAll('#mainContent > h2 > span[id], #mainContent > h3 > span[id], #mainContent > h4 > span[id], #mainContent > h5 > span[id], #mainContent > h6 > span[id]')
  contentAnchorTags.forEach(anchorEl => {
    window.addEventListener('scroll', () => {
      var element = anchorEl;
      var position = element.getBoundingClientRect();

      // checking whether fully visible
      if (position.top + 140 >= 0 && position.bottom + 140 <= window.innerHeight) {
        const menuEl = document.querySelector(`#TableOfContents [href="#${element.id}"]`)
        if (!anchorChanged) {
          activateMenuEl(menuEl)
        }
      }
    });
  })

});
