/* eslint-disable @typescript-eslint/no-var-requires */
const svgToDataUri = require('mini-svg-data-uri');
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const [baseFontSize, { lineHeight: baseLineHeight }] =
    defaultTheme.fontSize.base;
const { spacing, borderWidth, borderRadius, boxShadow } = defaultTheme;

module.exports = plugin.withOptions(function (options = {}) {
    // Enable forms and tooltip by default if not specified in options
    const {
        charts = true,
        datatables = true,
        forms = true,
        tooltips = true,
        wysiwyg = true,
    } = options;

    return function ({ addBase, addComponents, theme }) {
        // tooltip and popover styles
        if (tooltips) {
            addBase({
                // remove from v2.x+ END
                [['.tooltip-arrow', '.tooltip-arrow:before']]: {
                    position: 'absolute',
                    width: '8px',
                    height: '8px',
                    background: 'inherit',
                },
                [['.tooltip-arrow']]: {
                    visibility: 'hidden',
                },
                [['.tooltip-arrow:before']]: {
                    content: '""',
                    visibility: 'visible',
                    transform: 'rotate(45deg)',
                },
                [`[data-tooltip-style^='light'] + .tooltip > .tooltip-arrow:before`]:
                    {
                        'border-style': 'solid',
                        'border-color': 'var(--color-gray-200)',
                    },
                [`[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='top'] > .tooltip-arrow:before`]:
                    {
                        'border-bottom-width': '1px',
                        'border-right-width': '1px',
                    },
                [`[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='right'] > .tooltip-arrow:before`]:
                    {
                        'border-bottom-width': '1px',
                        'border-left-width': '1px',
                    },
                [`[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='bottom'] > .tooltip-arrow:before`]:
                    {
                        'border-top-width': '1px',
                        'border-left-width': '1px',
                    },
                [`[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='left'] > .tooltip-arrow:before`]:
                    {
                        'border-top-width': '1px',
                        'border-right-width': '1px',
                    },
                [`.tooltip[data-popper-placement^='top'] > .tooltip-arrow`]: {
                    bottom: '-4px',
                },
                [`.tooltip[data-popper-placement^='bottom'] > .tooltip-arrow`]:
                    {
                        top: '-4px',
                    },
                [`.tooltip[data-popper-placement^='left'] > .tooltip-arrow`]: {
                    right: '-4px',
                },
                [`.tooltip[data-popper-placement^='right'] > .tooltip-arrow`]: {
                    left: '-4px',
                },
                ['.tooltip.invisible > .tooltip-arrow:before']: {
                    visibility: 'hidden',
                },
                [['[data-popper-arrow]', '[data-popper-arrow]:before']]: {
                    position: 'absolute',
                    width: '8px',
                    height: '8px',
                    background: 'inherit',
                },
                ['[data-popper-arrow]']: {
                    visibility: 'hidden',
                },
                ['[data-popper-arrow]:before']: {
                    content: '""',
                    visibility: 'visible',
                    transform: 'rotate(45deg)',
                },
                ['[data-popper-arrow]:after']: {
                    content: '""',
                    visibility: 'visible',
                    transform: 'rotate(45deg)',
                    position: 'absolute',
                    width: '9px',
                    height: '9px',
                    background: 'inherit',
                },
                [`[role="tooltip"] > [data-popper-arrow]:before`]: {
                    'border-style': 'solid',
                    'border-color': 'var(--color-gray-200)',
                },
                [`.dark [role="tooltip"] > [data-popper-arrow]:before`]: {
                    'border-style': 'solid',
                    'border-color': 'var(--color-gray-600)',
                },
                [`[role="tooltip"] > [data-popper-arrow]:after`]: {
                    'border-style': 'solid',
                    'border-color': 'var(--color-gray-200)',
                },
                [`.dark [role="tooltip"] > [data-popper-arrow]:after`]: {
                    'border-style': 'solid',
                    'border-color': 'var(--color-gray-600)',
                },
                [`[data-popover][role="tooltip"][data-popper-placement^='top'] > [data-popper-arrow]:before`]:
                    {
                        'border-bottom-width': '1px',
                        'border-right-width': '1px',
                    },
                [`[data-popover][role="tooltip"][data-popper-placement^='top'] > [data-popper-arrow]:after`]:
                    {
                        'border-bottom-width': '1px',
                        'border-right-width': '1px',
                    },
                [`[data-popover][role="tooltip"][data-popper-placement^='right'] > [data-popper-arrow]:before`]:
                    {
                        'border-bottom-width': '1px',
                        'border-left-width': '1px',
                    },
                [`[data-popover][role="tooltip"][data-popper-placement^='right'] > [data-popper-arrow]:after`]:
                    {
                        'border-bottom-width': '1px',
                        'border-left-width': '1px',
                    },
                [`[data-popover][role="tooltip"][data-popper-placement^='bottom'] > [data-popper-arrow]:before`]:
                    {
                        'border-top-width': '1px',
                        'border-left-width': '1px',
                    },
                [`[data-popover][role="tooltip"][data-popper-placement^='bottom'] > [data-popper-arrow]:after`]:
                    {
                        'border-top-width': '1px',
                        'border-left-width': '1px',
                    },
                [`[data-popover][role="tooltip"][data-popper-placement^='left'] > [data-popper-arrow]:before`]:
                    {
                        'border-top-width': '1px',
                        'border-right-width': '1px',
                    },
                [`[data-popover][role="tooltip"][data-popper-placement^='left'] > [data-popper-arrow]:after`]:
                    {
                        'border-top-width': '1px',
                        'border-right-width': '1px',
                    },
                [`[data-popover][role="tooltip"][data-popper-placement^='top'] > [data-popper-arrow]`]:
                    {
                        bottom: '-5px',
                    },
                [`[data-popover][role="tooltip"][data-popper-placement^='bottom'] > [data-popper-arrow]`]:
                    {
                        top: '-5px',
                    },
                [`[data-popover][role="tooltip"][data-popper-placement^='left'] > [data-popper-arrow]`]:
                    {
                        right: '-5px',
                    },
                [`[data-popover][role="tooltip"][data-popper-placement^='right'] > [data-popper-arrow]`]:
                    {
                        left: '-5px',
                    },
                ['[role="tooltip"].invisible > [data-popper-arrow]:before']: {
                    visibility: 'hidden',
                },
                ['[role="tooltip"].invisible > [data-popper-arrow]:after']: {
                    visibility: 'hidden',
                },
            });
        }

        // form styles
        if (forms) {
            addBase({
                [[
                    "[type='text']",
                    "[type='email']",
                    "[type='url']",
                    "[type='password']",
                    "[type='number']",
                    "[type='date']",
                    "[type='datetime-local']",
                    "[type='month']",
                    "[type='search']",
                    "[type='tel']",
                    "[type='time']",
                    "[type='week']",
                    '[multiple]',
                    'textarea',
                    'select',
                ]]: {
                    appearance: 'none',
                    'background-color': '#fff',
                    'border-color': 'var(--color-gray-500)',
                    'border-width': borderWidth['DEFAULT'],
                    'border-radius': borderRadius.none,
                    'padding-top': spacing[2],
                    'padding-right': spacing[3],
                    'padding-bottom': spacing[2],
                    'padding-left': spacing[3],
                    'font-size': baseFontSize,
                    'line-height': baseLineHeight,
                    '--tw-shadow': '0 0 #0000',
                    '&:focus': {
                        outline: '2px solid transparent',
                        'outline-offset': '2px',
                        '--tw-ring-inset': 'var(--tw-empty,/*!*/ /*!*/)',
                        '--tw-ring-offset-width': '0px',
                        '--tw-ring-offset-color': '#fff',
                        '--tw-ring-color': 'var(--color-blue-600)',
                        '--tw-ring-offset-shadow': `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
                        '--tw-ring-shadow': `var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
                        'box-shadow': `var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`,
                        'border-color': 'var(--color-blue-600)',
                    },
                },
                [['input::placeholder', 'textarea::placeholder']]: {
                    color: 'var(--color-gray-500)',
                    opacity: '1',
                },
                ['::-webkit-datetime-edit-fields-wrapper']: {
                    padding: '0',
                },
                ['input[type="time"]::-webkit-calendar-picker-indicator']: {
                    background: 'none',
                },
                ['select:not([size])']: {
                    'background-image': `url("${svgToDataUri(
                        `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="${theme(
                                'colors.gray.500',
                                colors.gray[500]
                            )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                          </svg>`
                    )}")`,
                    'background-position': `right ${spacing[3]} center`,
                    'background-repeat': `no-repeat`,
                    'background-size': `0.75em 0.75em`,
                    'padding-right': spacing[10],
                    'print-color-adjust': `exact`,
                },
                [[`:is([dir=rtl]) select:not([size])`]]: {
                    backgroundPosition: `left ${spacing[3]} center`,
                    paddingRight: spacing[3],
                    paddingLeft: 0,
                },
                ['[multiple]']: {
                    'background-image': 'initial',
                    'background-position': 'initial',
                    'background-repeat': 'unset',
                    'background-size': 'initial',
                    'padding-right': spacing[3],
                    'print-color-adjust': 'unset',
                },
                [[`[type='checkbox']`, `[type='radio']`]]: {
                    appearance: 'none',
                    padding: '0',
                    'print-color-adjust': 'exact',
                    display: 'inline-block',
                    'vertical-align': 'middle',
                    'background-origin': 'border-box',
                    'user-select': 'none',
                    'flex-shrink': '0',
                    height: spacing[4],
                    width: spacing[4],
                    color: 'var(--color-blue-600)',
                    'background-color': '#fff',
                    'border-color': '--color-gray-500',
                    'border-width': borderWidth['DEFAULT'],
                    '--tw-shadow': '0 0 #0000',
                },
                [`[type='checkbox']`]: {
                    'border-radius': borderRadius['none'],
                },
                [`[type='radio']`]: {
                    'border-radius': '100%',
                },
                [[`[type='checkbox']:focus`, `[type='radio']:focus`]]: {
                    outline: '2px solid transparent',
                    'outline-offset': '2px',
                    '--tw-ring-inset': 'var(--tw-empty,/*!*/ /*!*/)',
                    '--tw-ring-offset-width': '2px',
                    '--tw-ring-offset-color': '#fff',
                    '--tw-ring-color': 'var(--color-blue-600)',
                    '--tw-ring-offset-shadow': `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
                    '--tw-ring-shadow': `var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
                    'box-shadow': `var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`,
                },
                [[
                    `[type='checkbox']:checked`,
                    `[type='radio']:checked`,
                    `.dark [type='checkbox']:checked`,
                    `.dark [type='radio']:checked`,
                ]]: {
                    'border-color': `transparent !important`,
                    'background-color': `currentColor !important`,
                    'background-size': `0.55em 0.55em`,
                    'background-position': `center`,
                    'background-repeat': `no-repeat`,
                },
                [`[type='checkbox']:checked`]: {
                    'background-image': `url("${svgToDataUri(
                        `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M1 5.917 5.724 10.5 15 1.5"/>
                            </svg>`
                    )}")`,
                    'background-repeat': `no-repeat`,
                    'background-size': `0.55em 0.55em`,
                    'print-color-adjust': `exact`,
                },
                [`[type='radio']:checked`]: {
                    'background-image': `url("${svgToDataUri(
                        `<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>`
                    )}")`,
                    'background-size': `1em 1em`,
                },
                [`.dark [type='radio']:checked`]: {
                    'background-image': `url("${svgToDataUri(
                        `<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>`
                    )}")`,
                    'background-size': `1em 1em`,
                },
                [`[type='checkbox']:indeterminate`]: {
                    'background-image': `url("${svgToDataUri(
                        `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M0.5 6h14"/>
                            </svg>`
                    )}")`,
                    'background-color': `currentColor !important`,
                    'border-color': `transparent !important`,
                    'background-position': `center`,
                    'background-repeat': `no-repeat`,
                    'background-size': `0.55em 0.55em`,
                    'print-color-adjust': `exact`,
                },
                [[
                    `[type='checkbox']:indeterminate:hover`,
                    `[type='checkbox']:indeterminate:focus`,
                ]]: {
                    'border-color': 'transparent !important',
                    'background-color': 'currentColor !important',
                },
                [`[type='file']`]: {
                    background: 'unset',
                    'border-color': 'inherit',
                    'border-width': '0',
                    'border-radius': '0',
                    padding: '0',
                    'font-size': 'unset',
                    'line-height': 'inherit',
                },
                [`[type='file']:focus`]: {
                    outline: `1px auto inherit`,
                },
                [[`input[type=file]::file-selector-button`]]: {
                    color: 'white',
                    background: 'var(--color-gray-800)',
                    border: 0,
                    'font-weight': theme('fontWeight.medium'),
                    'font-size': theme('fontSize.sm')[0],
                    cursor: 'pointer',
                    'padding-top': spacing[2.5],
                    'padding-bottom': spacing[2.5],
                    'padding-left': spacing[8],
                    'padding-right': spacing[4],
                    'margin-inline-start': '-1rem',
                    'margin-inline-end': '1rem',
                    '&:hover': {
                        background: 'var(--color-gray-700)',
                    },
                },
                [[`:is([dir=rtl]) input[type=file]::file-selector-button`]]: {
                    paddingRight: spacing[8],
                    paddingLeft: spacing[4],
                },
                [[`.dark input[type=file]::file-selector-button`]]: {
                    color: 'white',
                    background: 'var(--color-gray-600)',
                    '&:hover': {
                        background: 'var(--color-gray-500)',
                    },
                },
                [[`input[type="range"]::-webkit-slider-thumb`]]: {
                    height: spacing[5],
                    width: spacing[5],
                    background: 'var(--color-blue-600)',
                    'border-radius': borderRadius.full,
                    border: 0,
                    appearance: 'none',
                    '-moz-appearance': 'none',
                    '-webkit-appearance': 'none',
                    cursor: 'pointer',
                },
                [[`input[type="range"]:disabled::-webkit-slider-thumb`]]: {
                    background: 'var(--color-gray-400)',
                },
                [[`.dark input[type="range"]:disabled::-webkit-slider-thumb`]]:
                    {
                        background: 'var(--color-gray-500)',
                    },
                [[`input[type="range"]:focus::-webkit-slider-thumb`]]: {
                    outline: '2px solid transparent',
                    'outline-offset': '2px',
                    '--tw-ring-offset-shadow':
                        'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
                    '--tw-ring-shadow':
                        'var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
                    'box-shadow':
                        'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
                    '--tw-ring-opacity': 1,
                    '--tw-ring-color':
                        'rgb(164 202 254 / var(--tw-ring-opacity))',
                },
                [[`input[type="range"]::-moz-range-thumb`]]: {
                    height: spacing[5],
                    width: spacing[5],
                    background: 'var(--color-blue-600)',
                    'border-radius': borderRadius.full,
                    border: 0,
                    appearance: 'none',
                    '-moz-appearance': 'none',
                    '-webkit-appearance': 'none',
                    cursor: 'pointer',
                },
                [[`input[type="range"]:disabled::-moz-range-thumb`]]: {
                    background: 'var(--color-gray-400)',
                },
                [[`.dark input[type="range"]:disabled::-moz-range-thumb`]]: {
                    background: 'var(--color-gray-500)',
                },
                [[`input[type="range"]::-moz-range-progress`]]: {
                    background: 'var(--color-blue-500)',
                },
                [[`input[type="range"]::-ms-fill-lower`]]: {
                    background: 'var(--color-blue-500)',
                },
                [[`input[type="range"].range-sm::-webkit-slider-thumb`]]: {
                    height: spacing[4],
                    width: spacing[4],
                },
                [[`input[type="range"].range-lg::-webkit-slider-thumb`]]: {
                    height: spacing[6],
                    width: spacing[6],
                },
                [[`input[type="range"].range-sm::-moz-range-thumb`]]: {
                    height: spacing[4],
                    width: spacing[4],
                },
                [[`input[type="range"].range-lg::-moz-range-thumb`]]: {
                    height: spacing[6],
                    width: spacing[6],
                },
                // remove from v2.x+
                [['.toggle-bg:after']]: {
                    content: '""',
                    position: 'absolute',
                    top: spacing[0.5],
                    left: spacing[0.5],
                    background: 'white',
                    'border-color': 'var(--color-gray-300)',
                    'border-width': borderWidth['DEFAULT'],
                    'border-radius': borderRadius.full,
                    height: theme('height.5'),
                    width: theme('width.5'),
                    'transition-property':
                        'background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter',
                    'transition-duration': '.15s',
                    'box-shadow':
                        'var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
                },
                [['input:checked + .toggle-bg:after']]: {
                    transform: 'translateX(100%);',
                    'border-color': 'white',
                },
                [['input:checked + .toggle-bg']]: {
                    background: 'var(--color-blue-600)',
                    'border-color': 'var(--color-blue-600)',
                },
            });
        }

        if (wysiwyg) {
            addComponents({
                '.selectedCell': {
                    backgroundColor: 'var(--color-gray-50)',
                },
                '.dark .selectedCell': {
                    backgroundColor: 'var(--color-gray-700)',
                },
            });
        }

        // datatable styles
        if (datatables) {
            addComponents({
                '.datatable-wrapper': {
                    width: '100%',
                },
                '.datatable-wrapper .datatable-top': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'column-reverse',
                    alignItems: 'start',
                    gap: `${theme('spacing.4', spacing[4])}`,
                    marginBottom: `${theme('spacing.4', spacing[4])}`,
                    '@media (min-width: 640px)': {
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                    },
                },
                '.datatable-wrapper .datatable-search .datatable-input, .datatable-wrapper .datatable-input':
                    {
                        color: 'var(--color-gray-900)',
                        fontSize: `${theme('fontSize.sm')[0]}`,
                        border: `1px solid var(--color-gray-300)`,
                        borderRadius: `${theme(
                            'borderRadius.lg',
                            borderRadius.lg
                        )}`,
                        backgroundColor: 'var(--color-gray-50)',
                        minWidth: '16rem',
                    },
                '.dark .datatable-wrapper .datatable-search .datatable-input, .dark .datatable-wrapper .datatable-input':
                    {
                        color: 'white',
                        backgroundColor: 'var(--color-gray-800)',
                        border: `1px solid var(--color-gray-700)`,
                    },
                '.datatable-wrapper thead th .datatable-input': {
                    backgroundColor: 'white',
                    fontWeight: `${theme('fontWeight.normal')}`,
                    color: 'var(--color-gray-900)',
                    paddingTop: `.35rem`,
                    paddingBottom: `.35rem`,
                    minWidth: '0',
                },
                '.dark .datatable-wrapper thead th .datatable-input': {
                    backgroundColor: 'var(--color-gray-700)',
                    borderColor: 'var(--color-gray-600)',
                    color: 'white',
                },
                '.datatable-wrapper .datatable-top .datatable-dropdown': {
                    color: 'var(--color-gray-500)',
                    fontSize: `${theme('fontSize.sm')[0]}`,
                },
                '.dark .datatable-wrapper .datatable-top .datatable-dropdown': {
                    color: 'var(--color-gray-400)',
                },
                '.datatable-wrapper .datatable-top .datatable-dropdown .datatable-selector':
                    {
                        backgroundColor: 'var(--color-gray-50)',
                        color: 'var(--color-gray-900)',
                        fontSize: `${theme('fontSize.sm')[0]}`,
                        border: `1px solid var(--color-gray-300)`,
                        borderRadius: `${theme(
                            'borderRadius.lg',
                            borderRadius.lg
                        )}`,
                        marginRight: `${theme('spacing.1', spacing[1])}`,
                        minWidth: '4rem',
                    },
                '.dark .datatable-wrapper .datatable-top .datatable-dropdown .datatable-selector':
                    {
                        backgroundColor: 'var(--color-gray-800)',
                        border: `1px solid var(--color-gray-700)`,
                        color: 'white',
                    },
                '.datatable-wrapper .datatable-container thead tr.search-filtering-row th':
                    {
                        paddingTop: '0',
                    },
                '.datatable-wrapper .datatable-search .datatable-input:focus': {
                    borderColor: 'var(--color-blue-600)',
                },
                '.datatable-wrapper .datatable-container': {
                    overflowX: 'auto',
                },
                '.datatable-wrapper .datatable-table': {
                    width: '100%',
                    fontSize: `${theme('fontSize.sm')[0]}`,
                    color: 'var(--color-gray-500)',
                    textAlign: 'left',
                },
                '.dark .datatable-wrapper .datatable-table': {
                    color: 'var(--color-gray-400)',
                },
                '.datatable-wrapper .datatable-table thead': {
                    fontSize: `${theme('fontSize.xs')[0]}`,
                    color: 'var(--color-gray-500)',
                    backgroundColor: 'var(--color-gray-50)',
                },
                '.dark .datatable-wrapper .datatable-table thead': {
                    color: 'var(--color-gray-400)',
                    backgroundColor: 'var(--color-gray-800)',
                },
                '.datatable-wrapper .datatable-table thead th': {
                    whiteSpace: 'nowrap',
                },
                '.datatable-wrapper .datatable-table thead th, .datatable-wrapper .datatable-table tbody th, .datatable-wrapper .datatable-table tbody td':
                    {
                        width: 'auto !important',
                        paddingTop: `${theme('spacing.3', spacing[3])}`,
                        paddingBottom: `${theme('spacing.3', spacing[3])}`,
                        paddingLeft: `${theme('spacing.6', spacing[6])}`,
                        paddingRight: `${theme('spacing.6', spacing[6])}`,
                    },
                '.datatable-wrapper .datatable-table thead th .datatable-sorter, .datatable-wrapper .datatable-table thead th':
                    {
                        textTransform: 'uppercase',
                    },
                '.datatable-wrapper .datatable-table thead th .datatable-sorter:hover, .datatable-wrapper .datatable-table thead th.datatable-ascending .datatable-sorter, .datatable-wrapper .datatable-table thead th.datatable-descending .datatable-sorter':
                    {
                        color: 'var(--color-gray-900)',
                    },
                '.dark .datatable-wrapper .datatable-table thead th .datatable-sorter:hover, .dark .datatable-wrapper .datatable-table thead th.datatable-ascending .datatable-sorter, .dark .datatable-wrapper .datatable-table thead th.datatable-descending .datatable-sorter':
                    {
                        color: 'white',
                    },
                '.datatable-wrapper .datatable-table tbody tr.selected': {
                    backgroundColor: 'var(--color-gray-100)',
                },
                '.dark .datatable-wrapper .datatable-table tbody tr.selected': {
                    backgroundColor: 'var(--color-gray-700)',
                },
                '.datatable-wrapper .datatable-table tbody tr': {
                    borderBottom: `1px solid var(--color-gray-200)`,
                },
                '.dark .datatable-wrapper .datatable-table tbody tr': {
                    borderBottom: `1px solid var(--color-gray-700)`,
                },
                '.datatable-wrapper .datatable-table .datatable-empty': {
                    textAlign: 'center',
                },
                '.datatable-wrapper .datatable-bottom': {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    marginTop: `${theme('spacing.4', spacing[4])}`,
                    gap: `${theme('spacing.4', spacing[4])}`,
                    '@media (min-width: 640px)': {
                        flexDirection: 'row',
                        alignItems: 'center',
                    },
                },
                '.datatable-wrapper .datatable-bottom .datatable-info': {
                    color: 'var(--color-gray-500)',
                    fontSize: `${theme('fontSize.sm')[0]}`,
                },
                '.dark .datatable-wrapper .datatable-bottom .datatable-info': {
                    color: 'var(--color-gray-400)',
                },
                '.datatable-wrapper .datatable-bottom .datatable-pagination .datatable-pagination-list':
                    {
                        display: 'flex',
                        alignItems: 'center',
                        height: spacing[8],
                        fontSize: `${theme('fontSize.sm')[0]}`,
                    },
                '.datatable-wrapper .datatable-bottom .datatable-pagination .datatable-pagination-list-item-link':
                    {
                        display: 'flex',
                        alignItems: 'center',
                        color: 'var(--color-gray-500)',
                        fontWeight: `${theme('fontWeight.medium')}`,
                        paddingLeft: `${theme('spacing.3', spacing[3])}`,
                        paddingRight: `${theme('spacing.3', spacing[3])}`,
                        height: spacing[8],
                        fontSize: `${theme('fontSize.sm')[0]}`,
                        borderTop: `1px solid var(--color-gray-300)`,
                        borderBottom: `1px solid var(--color-gray-300)`,
                        borderRight: `1px solid var(--color-gray-300)`,
                    },
                '.dark .datatable-wrapper .datatable-bottom .datatable-pagination .datatable-pagination-list-item-link':
                    {
                        color: 'var(--color-gray-400)',
                        borderColor: 'var(--color-gray-700)',
                    },
                '.datatable-wrapper .datatable-bottom .datatable-pagination .datatable-pagination-list-item:first-of-type, .datatable-wrapper .datatable-bottom .datatable-pagination .datatable-pagination-list-item:last-of-type':
                    {
                        position: 'relative',
                    },
                '.datatable-wrapper .datatable-bottom .datatable-pagination .datatable-pagination-list-item:first-of-type .datatable-pagination-list-item-link, .datatable-wrapper .datatable-bottom .datatable-pagination .datatable-pagination-list-item:last-of-type .datatable-pagination-list-item-link':
                    {
                        color: 'transparent',
                    },
                '.dark .datatable-wrapper .datatable-bottom .datatable-pagination .datatable-pagination-list-item:first-of-type .datatable-pagination-list-item-link, .dark .datatable-wrapper .datatable-bottom .datatable-pagination .datatable-pagination-list-item:last-of-type .datatable-pagination-list-item-link':
                    {
                        color: 'transparent',
                    },
                '.datatable-wrapper .datatable-bottom .datatable-pagination .datatable-pagination-list-item:first-of-type .datatable-pagination-list-item-link::after':
                    {
                        content: `url("${svgToDataUri(
                            `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                                    <path stroke="${theme(
                                        'colors.gray.500',
                                        colors.gray[500]
                                    )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 8-4 4 4 4"/>
                                </svg>`
                        )}")`,
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '1.3rem',
                        height: '1.3rem',
                        transform: 'translate(-50%, -50%)',
                    },
                '.datatable-wrapper .datatable-bottom .datatable-pagination .datatable-pagination-list-item:first-of-type .datatable-pagination-list-item-link:hover::after':
                    {
                        content: `url("${svgToDataUri(
                            `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                                    <path stroke="${theme(
                                        'colors.gray.900',
                                        colors.gray[900]
                                    )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 8-4 4 4 4"/>
                                </svg>`
                        )}")`,
                    },
                '.dark .datatable-wrapper .datatable-bottom .datatable-pagination .datatable-pagination-list-item:first-of-type .datatable-pagination-list-item-link::after':
                    {
                        content: `url("${svgToDataUri(
                            `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                                    <path stroke="${theme(
                                        'colors.gray.400',
                                        colors.gray[400]
                                    )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 8-4 4 4 4"/>
                                </svg>`
                        )}")`,
                    },
                '.dark .datatable-wrapper .datatable-bottom .datatable-pagination .datatable-pagination-list-item:first-of-type .datatable-pagination-list-item-link:hover::after':
                    {
                        content: `url("${svgToDataUri(
                            `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                                    <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 8-4 4 4 4"/>
                                </svg>`
                        )}")`,
                    },
                '.datatable-wrapper .datatable-bottom .datatable-pagination .datatable-pagination-list-item:last-of-type .datatable-pagination-list-item-link::after':
                    {
                        content: `url("${svgToDataUri(
                            `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                                <path stroke="${theme(
                                    'colors.gray.500',
                                    colors.gray[500]
                                )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"/>
                                </svg>
                                `
                        )}")`,
                        position: 'absolute',
                        top: '50%',
                        right: '50%',
                        width: '1.3rem',
                        height: '1.3rem',
                        transform: 'translate(50%, -50%)',
                    },
                '.datatable-wrapper .datatable-bottom .datatable-pagination .datatable-pagination-list-item:last-of-type .datatable-pagination-list-item-link:hover::after':
                    {
                        content: `url("${svgToDataUri(
                            `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                                <path stroke="${theme(
                                    'colors.gray.900',
                                    colors.gray[900]
                                )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"/>
                                </svg>
                                `
                        )}")`,
                    },
                '.dark .datatable-wrapper .datatable-bottom .datatable-pagination .datatable-pagination-list-item:last-of-type .datatable-pagination-list-item-link::after':
                    {
                        content: `url("${svgToDataUri(
                            `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                                <path stroke="${theme(
                                    'colors.gray.400',
                                    colors.gray[400]
                                )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"/>
                                </svg>
                                `
                        )}")`,
                    },
                '.dark .datatable-wrapper .datatable-bottom .datatable-pagination .datatable-pagination-list-item:last-of-type .datatable-pagination-list-item-link:hover::after':
                    {
                        content: `url("${svgToDataUri(
                            `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                                <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"/>
                                </svg>
                                `
                        )}")`,
                    },
                '.datatable-wrapper .datatable-bottom .datatable-pagination .datatable-pagination-list-item:first-of-type .datatable-pagination-list-item-link':
                    {
                        borderTopLeftRadius: `${theme(
                            'borderRadius.lg',
                            borderRadius.lg
                        )}`,
                        borderBottomLeftRadius: `${theme(
                            'borderRadius.lg',
                            borderRadius.lg
                        )}`,
                        borderLeft: `1px solid var(--color-gray-300)`,
                    },
                '.dark .datatable-wrapper .datatable-bottom .datatable-pagination .datatable-pagination-list-item:first-of-type .datatable-pagination-list-item-link':
                    {
                        borderLeft: `1px solid var(--color-gray-700)`,
                    },
                '.datatable-wrapper .datatable-bottom .datatable-pagination .datatable-pagination-list-item:last-of-type .datatable-pagination-list-item-link':
                    {
                        borderTopRightRadius: `${theme(
                            'borderRadius.lg',
                            borderRadius.lg
                        )}`,
                        borderBottomRightRadius: `${theme(
                            'borderRadius.lg',
                            borderRadius.lg
                        )}`,
                        borderLeft: 0,
                    },
                '.datatable-wrapper .datatable-bottom .datatable-pagination .datatable-pagination-list-item-link:hover':
                    {
                        backgroundColor: 'var(--color-gray-50)',
                        color: 'var(--color-gray-700)',
                    },
                '.dark .datatable-wrapper .datatable-bottom .datatable-pagination .datatable-pagination-list-item-link:hover':
                    {
                        backgroundColor: 'var(--color-gray-700)',
                        color: 'white',
                    },
            });
        }

        // chart styles
        if (charts) {
            addComponents({
                '.apexcharts-canvas .apexcharts-tooltip': {
                    backgroundColor: 'white !important',
                    color: `var(--color-gray-700) !important`,
                    border: '0 !important',
                    borderRadius: `${theme(
                        'borderRadius.DEFAULT',
                        borderRadius.DEFAULT
                    )} !important`,
                    // padding: `${theme('spacing.3', spacing[3])}`,
                    boxShadow: `${theme(
                        'boxShadow.md',
                        boxShadow.md
                    )} !important`,
                },
                '.dark .apexcharts-canvas .apexcharts-tooltip': {
                    backgroundColor: `var(--color-gray-700) !important`,
                    color: `var(--color-gray-400) !important`,
                    borderColor: 'transparent !important',
                    boxShadow: `${theme(
                        'boxShadow.md',
                        boxShadow.md
                    )} !important`,
                },
                '.apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title':
                    {
                        paddingTop: `${theme(
                            'spacing.2',
                            spacing[2]
                        )} !important`,
                        paddingBottom: `${theme(
                            'spacing.2',
                            spacing[2]
                        )} !important`,
                        paddingRight: `${theme(
                            'spacing.3',
                            spacing[3]
                        )} !important`,
                        paddingLeft: `${theme(
                            'spacing.3',
                            spacing[3]
                        )} !important`,
                        marginBottom: `${theme(
                            'spacing.3',
                            spacing[3]
                        )} !important`,
                        backgroundColor: `var(--color-gray-100) !important`,
                        borderBottomColor: `var(--color-gray-200) !important`,
                        fontSize: `${theme('fontSize.sm')[0]} !important`,
                        fontWeight: `${theme(
                            'fontWeight.normal',
                            defaultTheme.fontWeight.normal
                        )} !important`,
                        color: `var(--color-gray-500) !important`,
                    },
                '.dark .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title':
                    {
                        backgroundColor: `var(--color-gray-600) !important`,
                        borderColor: `var(--color-gray-500) !important`,
                        color: `var(--color-gray-500) !important`,
                    },
                '.apexcharts-canvas .apexcharts-xaxistooltip': {
                    color: `var(--color-gray-500) !important`,
                    paddingTop: `${theme('spacing.2', spacing[2])} !important`,
                    paddingBottom: `${theme(
                        'spacing.2',
                        spacing[2]
                    )} !important`,
                    paddingRight: `${theme(
                        'spacing.3',
                        spacing[3]
                    )} !important`,
                    paddingLeft: `${theme('spacing.3', spacing[3])} !important`,
                    borderColor: `transparent !important`,
                    backgroundColor: 'white !important',
                    borderRadius: `${theme(
                        'borderRadius.DEFAULT',
                        borderRadius.DEFAULT
                    )} !important`,
                    boxShadow: `${theme(
                        'boxShadow.md',
                        boxShadow.md
                    )} !important`,
                },
                '.dark .apexcharts-canvas .apexcharts-xaxistooltip': {
                    color: `var(--color-gray-400) !important`,
                    backgroundColor: `var(--color-gray-700) !important`,
                },
                '.apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-text-y-label':
                    {
                        color: `var(--color-gray-500) !important`,
                        fontSize: `${theme('fontSize.sm')[0]} !important`,
                    },
                '.dark .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-text-y-label':
                    {
                        color: `var(--color-gray-400) !important`,
                    },
                '.apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-text-y-value':
                    {
                        color: 'var(--color-gray-900)',
                        fontSize: `${theme('fontSize.sm')[0]} !important`,
                    },
                ':is([dir=rtl]) .apexcharts-tooltip .apexcharts-tooltip-marker':
                    {
                        marginRight: `${theme(
                            'spacing.0',
                            spacing[0]
                        )} !important`,
                        marginLeft: `${theme(
                            'spacing.1.5',
                            spacing[1.5]
                        )} !important`,
                    },
                '.dark .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-text-y-value':
                    {
                        color: 'white !important',
                    },
                '.apexcharts-canvas .apexcharts-xaxistooltip-text': {
                    fontWeight: `${theme(
                        'fontWeight.normal',
                        defaultTheme.fontWeight.normal
                    )} !important`,
                    fontSize: `${theme('fontSize.sm')[0]} !important`,
                },
                '.apexcharts-canvas .apexcharts-xaxistooltip:after, .apexcharts-canvas .apexcharts-xaxistooltip:before':
                    {
                        borderBottomColor: 'white !important',
                    },
                '.apexcharts-canvas .apexcharts-xaxistooltip:after': {
                    borderWidth: '8px !important',
                    marginLeft: '-8px !important',
                },
                '.apexcharts-canvas .apexcharts-xaxistooltip:before': {
                    borderWidth: '10px !important',
                    marginLeft: '-10px !important',
                },
                '.dark .apexcharts-canvas .apexcharts-xaxistooltip:after, .dark .apexcharts-canvas .apexcharts-xaxistooltip:before':
                    {
                        borderBottomColor: `var(--color-gray-700) !important`,
                    },
                '.apexcharts-canvas .apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-y-group':
                    {
                        padding: '0 !important',
                    },
                '.apexcharts-canvas .apexcharts-tooltip-series-group.apexcharts-active':
                    {
                        paddingLeft: `${theme(
                            'spacing.3',
                            spacing[3]
                        )} !important`,
                        paddingRight: `${theme(
                            'spacing.3',
                            spacing[3]
                        )} !important`,
                        paddingBottom: `${theme(
                            'spacing.3',
                            spacing[3]
                        )} !important`,
                        backgroundColor: 'white !important',
                        color: `var(--color-gray-500) !important`,
                    },
                '.dark .apexcharts-canvas .apexcharts-tooltip-series-group.apexcharts-active':
                    {
                        backgroundColor: `var(--color-gray-700) !important`,
                        color: `var(--color-gray-400) !important`,
                    },
                '.apexcharts-canvas .apexcharts-tooltip-series-group.apexcharts-active:first-of-type':
                    {
                        paddingTop: `${theme(
                            'spacing.3',
                            spacing[3]
                        )} !important`,
                    },
                '.apexcharts-canvas .apexcharts-legend': {
                    padding: '0 !important',
                },
                '.apexcharts-canvas .apexcharts-legend-text': {
                    fontSize: `${theme('fontSize.xs')[0]} !important`,
                    fontWeight: `${theme(
                        'fontWeight.medium',
                        defaultTheme.fontWeight.medium
                    )} !important`,
                    paddingLeft: `${theme('spacing.5', spacing[5])} !important`,
                    color: `var(--color-gray-500) !important`,
                },
                ':is([dir=rtl]) .apexcharts-canvas .apexcharts-legend-text': {
                    paddingRight: `${theme(
                        'spacing.2',
                        spacing[2]
                    )} !important`,
                },
                '.apexcharts-canvas .apexcharts-legend-text:not(.apexcharts-inactive-legend):hover':
                    {
                        color: `var(--color-gray-900) !important`,
                    },
                '.dark .apexcharts-canvas .apexcharts-legend-text': {
                    color: `var(--color-gray-400) !important`,
                },
                '.dark .apexcharts-canvas .apexcharts-legend-text:not(.apexcharts-inactive-legend):hover':
                    {
                        color: `white !important`,
                    },
                '.apexcharts-canvas .apexcharts-legend-series': {
                    marginLeft: `${theme('spacing.2', spacing[2])} !important`,
                    marginRight: `${theme('spacing.2', spacing[2])} !important`,
                    marginBottom: `${theme(
                        'spacing.1',
                        spacing[1]
                    )} !important`,
                    display: 'flex !important',
                    alignItems: 'center !important',
                },
                '.apexcharts-datalabels-group .apexcharts-text.apexcharts-datalabel-value':
                    {
                        fill: `var(--color-gray-900) !important`,
                        fontSize: `${theme('fontSize.3xl')} !important`,
                        fontWeight: `${theme(
                            'fontWeight.bold',
                            defaultTheme.fontWeight.bold
                        )} !important`,
                    },
                '.dark .apexcharts-canvas .apexcharts-datalabels-group .apexcharts-text.apexcharts-datalabel-value':
                    {
                        fill: `white !important`,
                    },
                '.apexcharts-canvas .apexcharts-datalabels-group .apexcharts-text.apexcharts-datalabel-label':
                    {
                        fill: `var(--color-gray-500) !important`,
                        fontSize: `${theme('fontSize.base')} !important`,
                        fontWeight: `${theme(
                            'fontWeight.normal',
                            defaultTheme.fontWeight.normal
                        )} !important`,
                    },
                '.dark .apexcharts-canvas .apexcharts-datalabels-group .apexcharts-text.apexcharts-datalabel-label':
                    {
                        fill: `var(--color-gray-400) !important`,
                    },
                '.apexcharts-canvas .apexcharts-datalabels .apexcharts-text.apexcharts-pie-label':
                    {
                        fontSize: `${theme('fontSize.xs')} !important`,
                        fontWeight: `${theme(
                            'fontWeight.semibold',
                            defaultTheme.fontWeight.semibold
                        )} !important`,
                        textShadow: `${theme(
                            'boxShadow.none',
                            boxShadow.none
                        )} !important`,
                        filter: `none !important`,
                    },
                '.apexcharts-gridline, .apexcharts-xcrosshairs, .apexcharts-ycrosshairs':
                    {
                        stroke: `var(--color-gray-200) !important`,
                    },
                '.dark .apexcharts-gridline, .dark .apexcharts-xcrosshairs, .dark .apexcharts-ycrosshairs':
                    {
                        stroke: `var(--color-gray-700) !important`,
                    },
            });
        }
    };
});
