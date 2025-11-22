// css for docs
import docsearch from '@docsearch/js';
import { codeToHtml } from 'shiki';
import { createCssVariablesTheme } from 'shiki/core';
import QRCode from 'qrcode';
import { Octokit } from 'octokit';

const codeBlockElements = document.getElementsByClassName('shiki-code-block');

const customShikiTheme = createCssVariablesTheme({
    name: 'custom-theme',
    variablePrefix: '--shiki-',
    variableDefaults: {},
    fontStyle: true,
});

// Convert HTMLCollection to Array before using forEach
Array.from(codeBlockElements).forEach(async (e) => {
    // Get the text content instead of innerHTML to preserve HTML entities
    const code = e.textContent;
    const language = e.getAttribute('data-language');
    const html = await codeToHtml(code, {
        lang: language,
        theme: customShikiTheme,
    });
    e.innerHTML = html;
});

// Algolia docsearch
docsearch({
    container: '#docsearch',
    appId: 'JUWZAHYJQ9',
    indexName: 'flowbite',
    apiKey: '63250f7f96b4ea48c49dbd149aab687c',
    placeholder: 'Search documentation',
});

docsearch({
    container: '#docsearch-mobile',
    appId: 'JUWZAHYJQ9',
    indexName: 'flowbite',
    apiKey: '63250f7f96b4ea48c49dbd149aab687c',
    placeholder: 'Search documentation',
});

// copy to clipboard
const fallbackCopyTextToClipboard = (text) => {
    var textArea = document.createElement('textarea');
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';

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
};

const copyTextToClipboard = (text) => {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(
        function () {
            console.log('Async: Copying to clipboard was successful!');
        },
        function (err) {
            console.error('Async: Could not copy text: ', err);
        }
    );
};

const initiateCopyToClipboard = (element) => {
    var button = element.getElementsByClassName('copy-to-clipboard-button')[0];
    var copyText = button.getElementsByClassName('copy-text')[0];
    var copyIcon = button.getElementsByClassName('copy-icon')[0];
    var copiedIcon = button.getElementsByClassName('copied-icon')[0];
    button.addEventListener('click', function () {
        var textToCopy = '';
        if (
            button.getAttribute('data-clipboard-content-type') === 'javascript'
        ) {
            textToCopy = element
                .querySelector('[data-clipboard-content-javascript]')
                .getAttribute('data-clipboard-content-javascript');
        } else {
            textToCopy = element
                .querySelector('[data-clipboard-content-html]')
                .getAttribute('data-clipboard-content-html');
        }
        copyTextToClipboard(textToCopy);
        copyText.innerHTML = 'Copied';
        copyIcon.classList.add('hidden');
        copiedIcon.classList.remove('hidden');
        setTimeout(() => {
            copyText.innerHTML = 'Copy';
            copyIcon.classList.remove('hidden');
            copiedIcon.classList.add('hidden');
        }, 2000);
    });
};

Array.from(document.getElementsByClassName('copy-clipboard-simple')).forEach(
    (e) => {
        var copyText = e.getElementsByClassName('copy-text')[0];
        var copyIcon = e.getElementsByClassName('copy-icon')[0];
        var copiedIcon = e.getElementsByClassName('copied-icon')[0];
        var textarea = e.querySelector('textarea[data-clipboard-content]');
        e.addEventListener('click', () => {
            var textToCopy = textarea.value;
            copyTextToClipboard(textToCopy);
            copyText.innerHTML = 'Copied';
            copyIcon.classList.add('hidden');
            copiedIcon.classList.remove('hidden');
            setTimeout(() => {
                copyText.innerHTML = 'Copy';
                copyIcon.classList.remove('hidden');
                copiedIcon.classList.add('hidden');
            }, 2000);
        });
    }
);

const initiateToggleCodeTabs = (element) => {
    const toggleHTMLCodeButton = element.querySelector(
        '[data-toggle-html-code'
    );
    const toggleJavaScriptCodeButton = element.querySelector(
        '[data-toggle-javascript-code'
    );
    const htmlCodeWrapper = element.querySelector('[data-code-wrapper-html]');
    const javaScriptCodeWrapper = element.querySelector(
        '[data-code-wrapper-javascript]'
    );
    const copyClipboardButton = element.getElementsByClassName(
        'copy-to-clipboard-button'
    )[0];

    if (toggleJavaScriptCodeButton) {
        toggleHTMLCodeButton.addEventListener('click', () => {
            javaScriptCodeWrapper.classList.add('hidden');
            htmlCodeWrapper.classList.remove('hidden');
            copyClipboardButton.setAttribute(
                'data-clipboard-content-type',
                'html'
            );
            toggleHTMLCodeButton.classList.add('!bg-neutral-tertiary');
            toggleJavaScriptCodeButton.classList.remove('!bg-neutral-tertiary');
            expandCode(element);
        });

        toggleJavaScriptCodeButton.addEventListener('click', () => {
            htmlCodeWrapper.classList.add('hidden');
            javaScriptCodeWrapper.classList.remove('hidden');
            copyClipboardButton.setAttribute(
                'data-clipboard-content-type',
                'javascript'
            );
            toggleHTMLCodeButton.classList.remove('!bg-neutral-tertiary');
            toggleJavaScriptCodeButton.classList.add('!bg-neutral-tertiary');
            expandCode(element);
        });
    }
};

const expandCode = (element) => {
    var expandCodeButton = element.querySelector('[data-expand-code]');
    var codeWrapperEl = element.querySelector('[data-code-wrapper]');

    expandCodeButton.classList.remove('hidden');
    codeWrapperEl.classList.remove('max-h-72');
    expandCodeButton.classList.add('hidden');
};

const initiateExpandCode = (element) => {
    var expandCodeButton = element.querySelector('[data-expand-code]');
    var codeWrapperEl = element.querySelector('[data-code-wrapper]');
    var codeWrapperHeight = codeWrapperEl.offsetHeight;

    if (codeWrapperHeight > 250) {
        expandCodeButton.classList.remove('hidden');
    }

    expandCodeButton.addEventListener('click', () => {
        codeWrapperEl.classList.remove('max-h-72');
        expandCodeButton.classList.add('hidden');
    });
};

const updateiFrameDarkMode = (iFrame, theme) => {
    if (iFrame.contentDocument && iFrame.contentDocument.documentElement) {
        let html = iFrame.contentDocument.documentElement;

        if (theme === 'dark') {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }
};

const updateiFrameRTL = (iFrame, direction) => {
    if (iFrame.contentDocument && iFrame.contentDocument.documentElement) {
        let html = iFrame.contentDocument.documentElement;

        if (direction === 'rtl') {
            html.setAttribute('dir', 'rtl');
        } else {
            html.removeAttribute('dir');
        }
    }
};

const updatePreviewThemeToggleButton = (darkModeButtonEl, theme) => {
    const moonIconEl = darkModeButtonEl.querySelector(
        '[data-toggle-icon="moon"]'
    );
    const sunIconEl = darkModeButtonEl.querySelector(
        '[data-toggle-icon="sun"]'
    );
    const tooltipId = darkModeButtonEl.getAttribute('data-tooltip-target');
    let buttonTextEl = null;
    if (tooltipId) {
        buttonTextEl = document.getElementById(
            darkModeButtonEl.getAttribute('data-tooltip-target')
        );
    }

    if (theme === 'dark') {
        darkModeButtonEl.setAttribute('data-toggle-dark', 'dark');
        moonIconEl.classList.add('hidden');
        sunIconEl.classList.remove('hidden');
        if (tooltipId) {
            buttonTextEl.querySelector('.tooltip-text').textContent =
                'Toggle light mode';
        }
    } else {
        darkModeButtonEl.setAttribute('data-toggle-dark', 'light');
        moonIconEl.classList.remove('hidden');
        sunIconEl.classList.add('hidden');
        if (tooltipId) {
            buttonTextEl.querySelector('.tooltip-text').textContent =
                'Toggle dark mode';
        }
    }
};

const initiatePreviewState = (element) => {
    var codePreviewWrapper = element.getElementsByClassName(
        'code-preview-wrapper'
    )[0];
    var iframeCodeEl = element.getElementsByClassName('iframe-code')[0];
    var darkModeButton = element.getElementsByClassName(
        'toggle-dark-state-example'
    )[0];
    var fullViewButton = element.getElementsByClassName('toggle-full-view')[0];
    var tabletViewButton =
        element.getElementsByClassName('toggle-tablet-view')[0];
    var mobileViewButton =
        element.getElementsByClassName('toggle-mobile-view')[0];
    var RTLButton = element.getElementsByClassName('toggle-rtl')[0];

    if (RTLButton) {
        RTLButton.addEventListener('click', () => {
            var RTLstate = RTLButton.getAttribute('data-toggle-direction');

            if (RTLstate === 'ltr') {
                RTLButton.setAttribute('data-toggle-direction', 'rtl');
                updateiFrameRTL(iframeCodeEl, 'rtl');
                RTLButton.textContent = 'LTR';
                RTLButton.nextElementSibling.querySelector(
                    '.tooltip-text'
                ).textContent = 'Toggle LTR mode';
            }

            if (RTLstate === 'rtl') {
                RTLButton.setAttribute('data-toggle-direction', 'ltr');
                updateiFrameRTL(iframeCodeEl, 'ltr');
                RTLButton.textContent = 'RTL';
                RTLButton.nextElementSibling.querySelector(
                    '.tooltip-text'
                ).textContent = 'Toggle RTL mode';
            }
        });
    }

    if (darkModeButton) {
        darkModeButton.addEventListener('click', function () {
            const theme = darkModeButton.getAttribute('data-toggle-dark');
            const inverseTheme = theme === 'dark' ? 'light' : 'dark';
            const cssTheme = localStorage.getItem('css-theme');
            const direction = RTLButton.getAttribute('data-toggle-direction');

            iframeCodeEl.contentWindow.location.reload();

            iframeCodeEl.classList.add('opacity-0');
            codePreviewWrapper.classList.add(inverseTheme);
            iframeCodeEl.onload = () => {
                codePreviewWrapper.classList.remove(theme);
                updateiFrameHeight(iframeCodeEl);
                updateiFrameDarkMode(iframeCodeEl, inverseTheme);
                updateiFrameRTL(iframeCodeEl, direction);
                updateiFrameTheme(iframeCodeEl, cssTheme);
                updatePreviewThemeToggleButton(darkModeButton, inverseTheme);
                setiFrameDataLoaded(iframeCodeEl);
            };

            setTimeout(() => {
                iframeCodeEl.classList.remove('opacity-0');
            }, 500);
        });
    }

    if (mobileViewButton) {
        mobileViewButton.addEventListener('click', () => {
            const theme = darkModeButton.getAttribute('data-toggle-dark');
            const cssTheme = localStorage.getItem('css-theme');
            const direction = RTLButton.getAttribute('data-toggle-direction');
            iframeCodeEl.classList.add('max-w-sm');
            iframeCodeEl.classList.add('max-w-lg');
            iframeCodeEl.contentWindow.location.reload();
            iframeCodeEl.classList.add('opacity-0');
            iframeCodeEl.onload = () => {
                updateiFrameHeight(iframeCodeEl);
                updateiFrameDarkMode(iframeCodeEl, theme);
                updateiFrameRTL(iframeCodeEl, direction);
                updateiFrameTheme(iframeCodeEl, cssTheme);
                setiFrameDataLoaded(iframeCodeEl);
            };
            setTimeout(() => {
                iframeCodeEl.classList.remove('opacity-0');
            }, 500);
        });
    }

    if (tabletViewButton) {
        tabletViewButton.addEventListener('click', () => {
            const theme = darkModeButton.getAttribute('data-toggle-dark');
            const cssTheme = localStorage.getItem('css-theme');
            const direction = RTLButton.getAttribute('data-toggle-direction');
            iframeCodeEl.classList.add('max-w-lg');
            iframeCodeEl.classList.remove('max-w-sm');
            iframeCodeEl.contentWindow.location.reload();
            iframeCodeEl.classList.add('opacity-0');
            iframeCodeEl.onload = () => {
                updateiFrameHeight(iframeCodeEl);
                updateiFrameDarkMode(iframeCodeEl, theme);
                updateiFrameRTL(iframeCodeEl, direction);
                updateiFrameTheme(iframeCodeEl, cssTheme);
                setiFrameDataLoaded(iframeCodeEl);
            };
            setTimeout(() => {
                iframeCodeEl.classList.remove('opacity-0');
            }, 500);
        });
    }

    if (fullViewButton) {
        fullViewButton.addEventListener('click', () => {
            const theme = darkModeButton.getAttribute('data-toggle-dark');
            const cssTheme = localStorage.getItem('css-theme');
            const direction = RTLButton.getAttribute('data-toggle-direction');
            iframeCodeEl.classList.remove('max-w-sm', 'max-w-lg');
            iframeCodeEl.contentWindow.location.reload();
            iframeCodeEl.classList.add('opacity-0');
            iframeCodeEl.onload = () => {
                updateiFrameHeight(iframeCodeEl);
                updateiFrameDarkMode(iframeCodeEl, theme);
                updateiFrameRTL(iframeCodeEl, direction);
                updateiFrameTheme(iframeCodeEl, cssTheme);
                setiFrameDataLoaded(iframeCodeEl);
            };
            setTimeout(() => {
                iframeCodeEl.classList.remove('opacity-0');
            }, 500);
        });
    }
};

const updateiFrameHeight = (iFrame) => {
    setTimeout(() => {
        iFrame.nextElementSibling.classList.add('hidden');
        iFrame.style.height =
            iFrame.contentWindow.document.body.scrollHeight + 'px';
    }, 500);
};

const updateiFrameCodeElsDarkMode = (theme) => {
    var iframeCodeEls = document.querySelectorAll('.iframe-code');
    iframeCodeEls.forEach((iframeCodeEl) => {
        const cssTheme = localStorage.getItem('css-theme');

        console.log(theme);

        iframeCodeEl.contentWindow.location.reload();
        iframeCodeEl.classList.add('opacity-0');

        iframeCodeEl.onload = () => {
            updateiFrameDarkMode(iframeCodeEl, theme);
            updateiFrameTheme(iframeCodeEl, cssTheme);
            setiFrameDataLoaded(iframeCodeEl);
        };

        setTimeout(() => {
            iframeCodeEl.classList.remove('opacity-0');
        }, 500);
    });
};

/**
 * Updates the theme for a specific iframe element
 * @param {HTMLIFrameElement} iframeEl - The iframe element to update
 * @param {string} themeAttribute - The theme attribute value to apply
 * @returns {boolean} - Whether the update was successful
 */
const updateiFrameTheme = (iframeEl, themeAttribute) => {
    try {
        // Make sure the iframe has loaded
        if (
            iframeEl.contentDocument &&
            iframeEl.contentDocument.documentElement
        ) {
            // Set the data-theme attribute on the iframe's html element
            iframeEl.contentDocument.documentElement.setAttribute(
                'data-theme',
                themeAttribute
            );
            console.log('Updated iframe theme attribute:', themeAttribute);
            return true;
        }
        return false;
    } catch (e) {
        console.error('Error updating iframe theme:', e);
        return false;
    }
};

/**
 * Updates the theme for all iframe elements
 * @param {string} themeAttribute - The theme attribute value to apply
 */
const updateiFrameThemes = (themeAttribute) => {
    const iframeCodeEls = document.querySelectorAll('.iframe-code');
    const theme = localStorage.getItem('color-theme');

    iframeCodeEls.forEach((iframeCodeEl) => {
        iframeCodeEl.contentWindow.location.reload();
        iframeCodeEl.classList.add('opacity-0');

        iframeCodeEl.onload = () => {
            updateiFrameDarkMode(iframeCodeEl, theme);
            updateiFrameTheme(iframeCodeEl, themeAttribute);
            setiFrameDataLoaded(iframeCodeEl);
        };

        setTimeout(() => {
            iframeCodeEl.classList.remove('opacity-0');
        }, 500);
    });
};

const initializeCodeExamples = (theme) => {
    const codeExampleEls = document.querySelectorAll('.code-example');

    codeExampleEls.forEach((c) => {
        const iframe = c.querySelector('.iframe-code');
        updateiFrameHeight(iframe);
        updateiFrameDarkMode(iframe, theme);
        initiateCopyToClipboard(c);
        initiateExpandCode(c);
        initiateToggleCodeTabs(c);

        if (localStorage.getItem('css-theme')) {
            const themeObj = themes.find(
                (t) => t.name === localStorage.getItem('css-theme')
            );
            if (themeObj) {
                updateiFrameTheme(iframe, themeObj.attribute);
            }
        }

        setiFrameDataLoaded(iframe);
    });
};

const setiFrameDataLoaded = (iframe) => {
    if (iframe.contentDocument && iframe.contentDocument.documentElement) {
        iframe.contentDocument.documentElement.setAttribute(
            'data-loaded',
            'true'
        );
    }
};

const updateButtonThemeToggleEls = (theme) => {
    const buttonThemeToggleEls = document.querySelectorAll(
        '.toggle-dark-state-example'
    );
    buttonThemeToggleEls.forEach((b) => {
        updatePreviewThemeToggleButton(b, theme);
    });
};

window.addEventListener('load', () => {
    // set menu item location scroll
    const currentHref = window.location.href;
    const sidebarItemEls = document.querySelectorAll('[data-sidebar-item]');
    const sidenav = document.getElementById('navWrapper');
    const sidenavHeight = sidenav.clientHeight;

    sidebarItemEls.forEach((s) => {
        if (s.href === currentHref) {
            const itemHeight = s.clientHeight;
            sidenav.scrollTop =
                s.offsetTop - sidenavHeight / 2 + itemHeight / 2;
        }
    });

    // toggle dark mode
    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    var themeToggleLightIcon = document.getElementById(
        'theme-toggle-light-icon'
    );

    // Change the icons inside the button based on previous settings
    if (
        localStorage.getItem('color-theme') === 'dark' ||
        (!('color-theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        themeToggleLightIcon.classList.remove('hidden');
        initializeCodeExamples('dark');
        updateButtonThemeToggleEls('dark');
    } else {
        themeToggleDarkIcon.classList.remove('hidden');
        initializeCodeExamples('light');
        updateButtonThemeToggleEls('light');
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
                updateiFrameCodeElsDarkMode('dark');
                updateButtonThemeToggleEls('dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
                updateiFrameCodeElsDarkMode('light');
                updateButtonThemeToggleEls('light');
            }

            // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
                updateiFrameCodeElsDarkMode('light');
                updateButtonThemeToggleEls('light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
                updateiFrameCodeElsDarkMode('dark');
                updateButtonThemeToggleEls('dark');
            }
        }
    });

    // sidebar functionality
    const sidebar = document.getElementById('sidebar');

    const toggleSidebarMobile = (
        sidebar,
        sidebarBackdrop,
        toggleSidebarMobileHamburger,
        toggleSidebarMobileClose
    ) => {
        sidebar.classList.toggle('hidden');
        sidebarBackdrop.classList.toggle('hidden');
        toggleSidebarMobileHamburger.classList.toggle('hidden');
        toggleSidebarMobileClose.classList.toggle('hidden');
    };

    const toggleSidebarMobileEl = document.getElementById(
        'toggleSidebarMobile'
    );
    const sidebarBackdrop = document.getElementById('sidebarBackdrop');
    const toggleSidebarMobileHamburger = document.getElementById(
        'toggleSidebarMobileHamburger'
    );
    const toggleSidebarMobileClose = document.getElementById(
        'toggleSidebarMobileClose'
    );

    toggleSidebarMobileEl.addEventListener('click', () => {
        toggleSidebarMobile(
            sidebar,
            sidebarBackdrop,
            toggleSidebarMobileHamburger,
            toggleSidebarMobileClose
        );
    });

    sidebarBackdrop.addEventListener('click', () => {
        toggleSidebarMobile(
            sidebar,
            sidebarBackdrop,
            toggleSidebarMobileHamburger,
            toggleSidebarMobileClose
        );
    });

    // current year
    document.getElementById('currentYear').textContent =
        new Date().getFullYear();

    // copy to clipboard
    var codeExamples = document.querySelectorAll('.code-example');
    codeExamples.forEach((c) => {
        initiatePreviewState(c);
    });
    // toc menu item activation
    const deactivateMenuEl = (el) => {
        el.classList.remove(
            '!border-brand',
            '!after:opacity-100',
            '!text-fg-brand',
            'dark:!border-fg-brand',
            'dark:!text-fg-brand'
        );
    };

    const allMenuEls = document.querySelectorAll('#TableOfContents [href]');
    const activateMenuEl = (el) => {
        allMenuEls.forEach((el) => {
            deactivateMenuEl(el);
        });
        el.classList.add(
            '!border-brand',
            '!after:opacity-100',
            '!text-fg-brand',
            'dark:!border-fg-brand',
            'dark:!text-fg-brand'
        );
    };

    // anchor change activate menu element
    let anchorChanged = false;
    window.addEventListener('hashchange', () => {
        anchorChanged = true;
        const menuEl = document.querySelector(
            `#TableOfContents [href="${location.hash}"]`
        );
        activateMenuEl(menuEl);
        setTimeout(() => {
            anchorChanged = false;
        }, 99);
    });

    // toc on scroll activation
    const contentAnchorTags = document.querySelectorAll(
        '#mainContent > h2 > span[id], #mainContent > h3 > span[id], #mainContent > h4 > span[id], #mainContent > h5 > span[id], #mainContent > h6 > span[id]'
    );
    contentAnchorTags.forEach((anchorEl) => {
        window.addEventListener('scroll', () => {
            var element = anchorEl;
            var position = element.getBoundingClientRect();

            // checking whether fully visible
            if (
                position.top + 140 >= 0 &&
                position.bottom + 140 <= window.innerHeight
            ) {
                const menuEl = document.querySelector(
                    `#TableOfContents [href="#${element.id}"]`
                );
                if (!anchorChanged) {
                    activateMenuEl(menuEl);
                }
            }
        });
    });
});

const themes = [
    {
        name: 'modern',
        attribute: 'modern',
    },
    {
        name: 'minimal',
        attribute: 'minimal',
    },
    {
        name: 'enterprise',
        attribute: 'enterprise',
    },
    {
        name: 'playful',
        attribute: 'playful',
    },
    {
        name: 'mono',
        attribute: 'mono',
    },
];

// Function to apply a specific CSS theme by changing the data-theme attribute
const applyCssTheme = (themeName) => {
    const themeObj = themes.find((t) => t.name === themeName);
    if (!themeObj) return;

    // Update main document theme attribute
    document.documentElement.setAttribute('data-theme', themeObj.attribute);

    // Update iframes
    updateiFrameThemes(themeObj.attribute);

    // Save the selected theme to localStorage
    localStorage.setItem('css-theme', themeName);
};

// Load saved CSS theme on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedCssTheme = localStorage.getItem('css-theme');
    if (savedCssTheme) {
        applyCssTheme(savedCssTheme);
    }
});

const themeSelectorButtons = document.querySelectorAll('.theme-select-button');
themeSelectorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const theme = button.getAttribute('data-css-theme');
        applyCssTheme(theme);
    });
});

const modifyQRCodeSVG = (svgString) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgString, 'image/svg+xml');
    const svg = doc.querySelector('svg');

    if (svg) {
        svg.classList.add('text-heading');
        const paths = svg.querySelectorAll('path');
        paths.forEach((path) => {
            if (path.hasAttribute('fill')) {
                path.setAttribute('fill', 'none');
            }
            if (path.hasAttribute('stroke')) {
                path.setAttribute('stroke', 'currentColor');
            }
        });
    }

    return new XMLSerializer().serializeToString(doc);
};

const updateQRCodeIframesValue = (value, level = 'M') => {
    const iframeCodeEls = document.querySelectorAll('.iframe-code');
    iframeCodeEls.forEach((iframeCodeEl) => {
        if (iframeCodeEl.contentDocument) {
            updateQRCodeiFrameValue(iframeCodeEl, value, level);
        }
    });
};

const updateQRCodeiFrameValue = (iframe, value, level = 'M') => {
    const iframeQRCodeEl = iframe.contentDocument.getElementById('qrcode');
    if (iframeQRCodeEl && value) {
        QRCode.toString(
            iframeQRCodeEl,
            value,
            { errorCorrectionLevel: level },
            function (_err, svg) {
                iframeQRCodeEl.innerHTML = modifyQRCodeSVG(svg);
            }
        );
    }
};

const QRCodeEl = document.getElementById('qrcode');
const QRCodeValInput = document.getElementById('qr_code_value');
const QRCodeLevelButtons = document.querySelectorAll('[data-qr-code-level]');
const QRCodeCopySVGButton = document.getElementById('copy-qr-code-button');
const saveQRCodeButton = document.getElementById('save-qr-code-button');

if (QRCodeEl) {
    // default value
    QRCode.toString(
        QRCodeEl,
        'https://flowbite.com',
        { errorCorrectionLevel: 'M' },
        function (_err, svg) {
            QRCodeEl.innerHTML = modifyQRCodeSVG(svg);
        }
    );
    updateQRCodeIframesValue('https://flowbite.com', 'M');

    QRCodeValInput.addEventListener('keyup', function () {
        const value = this.value;
        const QrCodeLevel = document
            .querySelector('[data-qr-code-active="true"]')
            ?.getAttribute('data-qr-code-level');
        if (value && QrCodeLevel) {
            QRCode.toString(
                QRCodeEl,
                value,
                { errorCorrectionLevel: QrCodeLevel },
                function (_err, svg) {
                    QRCodeEl.innerHTML = modifyQRCodeSVG(svg);
                }
            );
            updateQRCodeIframesValue(value, QrCodeLevel);
        }
    });

    QRCodeLevelButtons.forEach((button) => {
        button.addEventListener('click', function () {
            const level = this.getAttribute('data-qr-code-level');
            const value = QRCodeValInput.value || 'https://flowbite.com';
            const isActive =
                this.getAttribute('data-qr-code-active') === 'true';

            if (isActive) return;

            button.setAttribute('data-qr-code-active', 'true');

            // Deactivate other buttons
            QRCodeLevelButtons.forEach((btn) => {
                if (btn !== button) {
                    btn.setAttribute('data-qr-code-active', 'false');
                }
            });

            QRCode.toString(
                QRCodeEl,
                value,
                { errorCorrectionLevel: level },
                function (_err, svg) {
                    QRCodeEl.innerHTML = modifyQRCodeSVG(svg);
                }
            );
            updateQRCodeIframesValue(value, level);
        });
    });

    QRCodeCopySVGButton.addEventListener('click', function () {
        const svgContent = QRCodeEl.innerHTML;
        navigator.clipboard.writeText(svgContent);

        // Show success state
        const defaultIcon = QRCodeCopySVGButton.querySelector(
            '#default-copy-qr-code-icon'
        );
        const successIcon = QRCodeCopySVGButton.querySelector(
            '#success-copy-qr-code-icon'
        );
        const copyText =
            QRCodeCopySVGButton.querySelector('#copy-qr-code-text');

        if (defaultIcon && successIcon && copyText) {
            defaultIcon.classList.add('hidden');
            successIcon.classList.remove('hidden');
            copyText.textContent = 'Copied!';

            // Reset after 2 seconds
            setTimeout(() => {
                defaultIcon.classList.remove('hidden');
                successIcon.classList.add('hidden');
                copyText.textContent = 'Copy as SVG';
            }, 2000);
        }
    });

    saveQRCodeButton.addEventListener('click', function () {
        // TODO: Implement save as file functionality
        console.log('Save QR code as file clicked');

        // Get the SVG content
        const svgContent = QRCodeEl.innerHTML;

        // Create a blob from the SVG content
        const blob = new Blob([svgContent], { type: 'image/svg+xml' });

        // Create a download link
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'qrcode.svg';

        // Trigger the download
        document.body.appendChild(a);
        a.click();

        // Clean up
        setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 100);
    });
}

// get github stars

// GitHub API: https://developer.github.com/v3/repos/#get
let res = await fetch('https://api.github.com/repos/themesberg/flowbite');
let json = await res.json();

const formatStarCount = (count) => {
    if (count >= 1000) {
        const thousands = count / 1000;
        return thousands % 1 === 0
            ? `${thousands}k`
            : `${thousands.toFixed(1)}k`;
    }
    return count.toString();
};

document.getElementById('github_stars').textContent = formatStarCount(
    json.stargazers_count
);
