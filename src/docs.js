// css for docs
import './flowbite.css';
import './docs.css';
import docsearch from '@docsearch/js';

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
    var textToCopy = element
        .querySelector('[data-clipboard-content]')
        .getAttribute('data-clipboard-content');
    var button = element.getElementsByClassName('copy-to-clipboard-button')[0];
    var alert = document.getElementById('copied-code-alert');
    var copyText = button.getElementsByClassName('copy-text')[0];
    button.addEventListener('click', function () {
        copyTextToClipboard(textToCopy);
        alert.classList.remove('opacity-0', 'hidden');
        alert.classList.add('opacity-100', 'flex');
        copyText.innerHTML = 'Copied';

        setTimeout(function () {
            alert.classList.add('opacity-0', 'hidden');
            alert.classList.remove('opacity-100', 'flex');
            copyText.innerHTML = 'Copy';
        }, 3000);
    });
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
    let html = iFrame.contentDocument.querySelector('html');

    if (theme === 'dark') {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
};

const updatePreviewThemeToggleButton = (buttonEl, theme) => {
    const moonIconEl = buttonEl.querySelector('[data-toggle-icon="moon"]');
    const sunIconEl = buttonEl.querySelector('[data-toggle-icon="sun"]');
    const tooltipId = buttonEl.getAttribute('data-tooltip-target');
    let buttonTextEl = null;
    if (tooltipId) {
        buttonTextEl = document.getElementById(
            buttonEl.getAttribute('data-tooltip-target')
        );
    }

    if (theme === 'dark') {
        buttonEl.setAttribute('data-toggle-dark', 'dark');
        moonIconEl.classList.add('hidden');
        sunIconEl.classList.remove('hidden');
        if (tooltipId) {
            buttonTextEl.textContent = 'Toggle light mode';
        }
    } else {
        buttonEl.setAttribute('data-toggle-dark', 'light');
        moonIconEl.classList.remove('hidden');
        sunIconEl.classList.add('hidden');
        if (tooltipId) {
            buttonTextEl.textContent = 'Toggle dark mode';
        }
    }
};

const initiateToggleDarkState = (element) => {
    var codePreviewWrapper = element.getElementsByClassName(
        'code-preview-wrapper'
    )[0];
    var iframeCodeEl = element.getElementsByClassName('iframe-code')[0];
    var button = element.getElementsByClassName('toggle-dark-state-example')[0];
    var fullViewButton = element.getElementsByClassName('toggle-full-view')[0];
    var tabletViewButton =
        element.getElementsByClassName('toggle-tablet-view')[0];
    var mobileViewButton =
        element.getElementsByClassName('toggle-mobile-view')[0];

    if (button) {
        button.addEventListener('click', function () {
            var state = button.getAttribute('data-toggle-dark');

            if (state === 'light') {
                codePreviewWrapper.classList.add('dark');
                updatePreviewThemeToggleButton(button, 'dark');
                updateiFrameDarkMode(iframeCodeEl, 'dark');
            }
            if (state === 'dark') {
                codePreviewWrapper.classList.remove('dark');
                updatePreviewThemeToggleButton(button, 'light');
                updateiFrameDarkMode(iframeCodeEl, 'light');
            }
        });
    }

    if (mobileViewButton) {
        mobileViewButton.addEventListener('click', () => {
            const theme = button.getAttribute('data-toggle-dark');
            iframeCodeEl.classList.add('max-w-sm');
            iframeCodeEl.classList.add('max-w-lg');
            iframeCodeEl.contentWindow.location.reload();
            iframeCodeEl.classList.add('opacity-0');
            iframeCodeEl.onload = () => {
                updateiFrameHeight(iframeCodeEl);
                updateiFrameDarkMode(iframeCodeEl, theme);
            };
            setTimeout(() => {
                iframeCodeEl.classList.remove('opacity-0');
            }, 500);
        });
    }
    if (tabletViewButton) {
        tabletViewButton.addEventListener('click', () => {
            const theme = button.getAttribute('data-toggle-dark');
            iframeCodeEl.classList.add('max-w-lg');
            iframeCodeEl.classList.remove('max-w-sm');
            iframeCodeEl.contentWindow.location.reload();
            iframeCodeEl.classList.add('opacity-0');
            iframeCodeEl.onload = () => {
                updateiFrameHeight(iframeCodeEl);
                updateiFrameDarkMode(iframeCodeEl, theme);
            };
            setTimeout(() => {
                iframeCodeEl.classList.remove('opacity-0');
            }, 500);
        });
    }
    if (fullViewButton) {
        fullViewButton.addEventListener('click', () => {
            const theme = button.getAttribute('data-toggle-dark');
            iframeCodeEl.classList.remove('max-w-sm', 'max-w-lg');
            iframeCodeEl.contentWindow.location.reload();
            iframeCodeEl.classList.add('opacity-0');
            iframeCodeEl.onload = () => {
                updateiFrameHeight(iframeCodeEl);
                updateiFrameDarkMode(iframeCodeEl, theme);
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
    const iframeCodeEls = document.querySelectorAll('.iframe-code');
    iframeCodeEls.forEach((i) => {
        updateiFrameDarkMode(i, theme);
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
    });
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
        initiateToggleDarkState(c);
    });
    // toc menu item activation
    const deactivateMenuEl = (el) => {
        el.classList.remove(
            '!border-blue-700',
            '!after:opacity-100',
            '!text-blue-700',
            'dark:!border-blue-500',
            'dark:!text-blue-500'
        );
    };

    const allMenuEls = document.querySelectorAll('#TableOfContents [href]');
    const activateMenuEl = (el) => {
        allMenuEls.forEach((el) => {
            deactivateMenuEl(el);
        });
        el.classList.add(
            '!border-blue-700',
            '!after:opacity-100',
            '!text-blue-700',
            'dark:!border-blue-500',
            'dark:!text-blue-500'
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
