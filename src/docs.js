import docsearch from '@docsearch/js';

// Algolia docsearch
const initDocSearch = () => {
  const searchConfig = {
    appId: 'JUWZAHYJQ9',
    indexName: 'flowbite',
    apiKey: '63250f7f96b4ea48c49dbd149aab687c',
    placeholder: 'Search documentation',
  };

  docsearch({ ...searchConfig, container: '#docsearch' });
  docsearch({ ...searchConfig, container: '#docsearch-mobile' });
};

// Fallback for older browsers
const fallbackCopyTextToClipboard = (text) => {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand('copy');
    console.log(`Fallback: Copying text command was ${successful ? 'successful' : 'unsuccessful'}`);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
};

const copyTextToClipboard = (text) => {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }

  navigator.clipboard.writeText(text)
    .then(() => console.log('Async: Copying to clipboard was successful!'))
    .catch((err) => console.error('Async: Could not copy text: ', err));
};

// Clipboard copy function initialization
const initiateCopyToClipboard = (element) => {
  const button = element.querySelector('.copy-to-clipboard-button');
  const alert = document.getElementById('copied-code-alert');
  const copyText = button.querySelector('.copy-text');

  button.addEventListener('click', () => {
    const contentType = button.getAttribute('data-clipboard-content-type');
    const textToCopy = element.querySelector(`[data-clipboard-content-${contentType}]`).getAttribute(`data-clipboard-content-${contentType}`);

    copyTextToClipboard(textToCopy);
    alert.classList.remove('opacity-0', 'hidden');
    alert.classList.add('opacity-100', 'flex');
    copyText.innerHTML = 'Copied';

    setTimeout(() => {
      alert.classList.add('opacity-0', 'hidden');
      alert.classList.remove('opacity-100', 'flex');
      copyText.innerHTML = 'Copy';
    }, 3000);
  });
};

// Toggle code between HTML/JS
const initiateToggleCodeTabs = (element) => {
  const toggleHTMLCodeButton = element.querySelector('[data-toggle-html-code]');
  const toggleJavaScriptCodeButton = element.querySelector('[data-toggle-javascript-code]');
  const htmlCodeWrapper = element.querySelector('[data-code-wrapper-html]');
  const javaScriptCodeWrapper = element.querySelector('[data-code-wrapper-javascript]');
  const copyClipboardButton = element.querySelector('.copy-to-clipboard-button');

  if (toggleJavaScriptCodeButton) {
    toggleHTMLCodeButton.addEventListener('click', () => {
      javaScriptCodeWrapper.classList.add('hidden');
      htmlCodeWrapper.classList.remove('hidden');
      copyClipboardButton.setAttribute('data-clipboard-content-type', 'html');
      toggleHTMLCodeButton.classList.add('!bg-gray-200', 'dark:!bg-gray-700');
      toggleJavaScriptCodeButton.classList.remove('!bg-gray-200', 'dark:!bg-gray-700');
      expandCode(element);
    });

    toggleJavaScriptCodeButton.addEventListener('click', () => {
      htmlCodeWrapper.classList.add('hidden');
      javaScriptCodeWrapper.classList.remove('hidden');
      copyClipboardButton.setAttribute('data-clipboard-content-type', 'javascript');
      toggleHTMLCodeButton.classList.remove('!bg-gray-200', 'dark:!bg-gray-700');
      toggleJavaScriptCodeButton.classList.add('!bg-gray-200', 'dark:!bg-gray-700');
      expandCode(element);
    });
  }
};

// Expand code block
const expandCode = (element) => {
  const expandCodeButton = element.querySelector('[data-expand-code]');
  const codeWrapperEl = element.querySelector('[data-code-wrapper]');
  expandCodeButton.classList.remove('hidden');
  codeWrapperEl.classList.remove('max-h-72');
  expandCodeButton.classList.add('hidden');
};

const initiateExpandCode = (element) => {
  const expandCodeButton = element.querySelector('[data-expand-code]');
  const codeWrapperEl = element.querySelector('[data-code-wrapper]');
  const codeWrapperHeight = codeWrapperEl.offsetHeight;

  if (codeWrapperHeight > 250) {
    expandCodeButton.classList.remove('hidden');
  }

  expandCodeButton.addEventListener('click', () => {
    codeWrapperEl.classList.remove('max-h-72');
    expandCodeButton.classList.add('hidden');
  });
};

// Dark mode and RTL updates
const updateiFrameDarkMode = (iFrame, theme) => {
  const html = iFrame.contentDocument.querySelector('html');
  html.classList.toggle('dark', theme === 'dark');
};

const updateiFrameRTL = (iFrame, direction) => {
  const html = iFrame.contentDocument.querySelector('html');
  html.setAttribute('dir', direction === 'rtl' ? 'rtl' : '');
};

// Initialize dark mode toggle for previews
const updatePreviewThemeToggleButton = (darkModeButtonEl, theme) => {
  const moonIconEl = darkModeButtonEl.querySelector('[data-toggle-icon="moon"]');
  const sunIconEl = darkModeButtonEl.querySelector('[data-toggle-icon="sun"]');
  const tooltipId = darkModeButtonEl.getAttribute('data-tooltip-target');
  const buttonTextEl = tooltipId ? document.getElementById(tooltipId) : null;

  if (theme === 'dark') {
    darkModeButtonEl.setAttribute('data-toggle-dark', 'dark');
    moonIconEl.classList.add('hidden');
    sunIconEl.classList.remove('hidden');
    if (buttonTextEl) {
      buttonTextEl.querySelector('.tooltip-text').textContent = 'Toggle light mode';
    }
  } else {
    darkModeButtonEl.setAttribute('data-toggle-dark', 'light');
    moonIconEl.classList.remove('hidden');
    sunIconEl.classList.add('hidden');
    if (buttonTextEl) {
      buttonTextEl.querySelector('.tooltip-text').textContent = 'Toggle dark mode';
    }
  }
};

const updateButtonThemeToggleEls = (theme) => {
  document.querySelectorAll('.toggle-dark-state-example').forEach((b) => {
    updatePreviewThemeToggleButton(b, theme);
  });
};

// Initialize preview and theme management
const initializePreviewState = (element) => {
  const codePreviewWrapper = element.querySelector('.code-preview-wrapper');
  const iframeCodeEl = element.querySelector('.iframe-code');
  const darkModeButton = element.querySelector('.toggle-dark-state-example');
  const fullViewButton = element.querySelector('.toggle-full-view');
  const tabletViewButton = element.querySelector('.toggle-tablet-view');
  const mobileViewButton = element.querySelector('.toggle-mobile-view');
  const RTLButton = element.querySelector('.toggle-rtl');

  if (darkModeButton) {
    darkModeButton.addEventListener('click', () => {
      const state = darkModeButton.getAttribute('data-toggle-dark');
      const newTheme = state === 'light' ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      localStorage.setItem('color-theme', newTheme);
      updateiFrameCodeElsDarkMode(newTheme);
      updateButtonThemeToggleEls(newTheme);
    });
  }

  if (mobileViewButton) {
    mobileViewButton.addEventListener('click', () => {
      iframeCodeEl.classList.add('max-w-sm');
      iframeCodeEl.classList.remove('max-w-lg');
      iframeCodeEl.contentWindow.location.reload();
      iframeCodeEl.onload = () => {
        updateiFrameHeight(iframeCodeEl);
        updateiFrameDarkMode(iframeCodeEl, darkModeButton.getAttribute('data-toggle-dark'));
        updateiFrameRTL(iframeCodeEl, RTLButton.getAttribute('data-toggle-direction'));
      };
    });
  }

  if (tabletViewButton) {
    tabletViewButton.addEventListener('click', () => {
      iframeCodeEl.classList.add('max-w-lg');
      iframeCodeEl.classList.remove('max-w-sm');
      iframeCodeEl.contentWindow.location.reload();
      iframeCodeEl.onload = () => {
        updateiFrameHeight(iframeCodeEl);
        updateiFrameDarkMode(iframeCodeEl, darkModeButton.getAttribute('data-toggle-dark'));
        updateiFrameRTL(iframeCodeEl, RTLButton.getAttribute('data-toggle-direction'));
      };
    });
  }

  if (fullViewButton) {
    fullViewButton.addEventListener('click', () => {
      iframeCodeEl.classList.remove('max-w-sm', 'max-w-lg');
      iframeCodeEl.contentWindow.location.reload();
      iframeCodeEl.onload = () => {
        updateiFrameHeight(iframeCodeEl);
        updateiFrameDarkMode(iframeCodeEl, darkModeButton.getAttribute('data-toggle-dark'));
        updateiFrameRTL(iframeCodeEl, RTLButton.getAttribute('data-toggle-direction'));
      };
    });
  }
};

const updateiFrameHeight = (iFrame) => {
  setTimeout(() => {
    iFrame.nextElementSibling.classList.add('hidden');
    iFrame.style.height = `${iFrame.contentWindow.document.body.scrollHeight}px`;
  }, 100);
};

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', () => {
  initDocSearch();
});
