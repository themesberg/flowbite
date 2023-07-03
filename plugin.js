/* eslint-disable @typescript-eslint/no-var-requires */
const svgToDataUri = require('mini-svg-data-uri');
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const [baseFontSize, { lineHeight: baseLineHeight }] =
    defaultTheme.fontSize.base;
const { spacing, borderWidth, borderRadius } = defaultTheme;

module.exports = plugin(
    function ({ addBase, theme }) {
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
                'border-color': theme('colors.gray.500', colors.gray[500]),
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
                    '--tw-ring-color': theme(
                        'colors.blue.600',
                        colors.blue[600]
                    ),
                    '--tw-ring-offset-shadow': `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
                    '--tw-ring-shadow': `var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
                    'box-shadow': `var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`,
                    'border-color': theme('colors.blue.600', colors.blue[600]),
                },
            },
            [['input::placeholder', 'textarea::placeholder']]: {
                color: theme('colors.gray.500', colors.gray[500]),
                opacity: '1',
            },
            ['::-webkit-datetime-edit-fields-wrapper']: {
                padding: '0',
            },
            ['::-webkit-date-and-time-value']: {
                'min-height': '1.5em',
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
                color: theme('colors.blue.600', colors.blue[600]),
                'background-color': '#fff',
                'border-color': theme('colors.gray.500', colors.gray[500]),
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
                '--tw-ring-color': theme('colors.blue.600', colors.blue[600]),
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
                'border-color': `transparent`,
                'background-color': `currentColor`,
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
                    <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>`
                )}")`,
                'background-color': `currentColor`,
                'border-color': `transparent`,
                'background-position': `center`,
                'background-repeat': `no-repeat`,
                'background-size': `0.55em 0.55em`,
                'print-color-adjust': `exact`,
            },
            [[
                `[type='checkbox']:indeterminate:hover`,
                `[type='checkbox']:indeterminate:focus`,
            ]]: {
                'border-color': 'transparent',
                'background-color': 'currentColor',
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
                background: theme('colors.gray.800', colors.gray[800]),
                border: 0,
                'font-weight': theme('fontWeight.medium'),
                'font-size': theme('fontSize.sm'),
                cursor: 'pointer',
                'padding-top': spacing[2.5],
                'padding-bottom': spacing[2.5],
                'padding-left': spacing[8],
                'padding-right': spacing[4],
                'margin-inline-start': '-1rem',
                'margin-inline-end': '1rem',
                '&:hover': {
                    background: theme('colors.gray.700', colors.gray[700]),
                },
            },
            [[`.dark input[type=file]::file-selector-button`]]: {
                color: 'white',
                background: theme('colors.gray.600', colors.gray[600]),
                '&:hover': {
                    background: theme('colors.gray.500', colors.gray[500]),
                },
            },
            [[`input[type="range"]::-webkit-slider-thumb`]]: {
                height: spacing[5],
                width: spacing[5],
                background: theme('colors.blue.600', colors.blue[600]),
                'border-radius': borderRadius.full,
                border: 0,
                appearance: 'none',
                '-moz-appearance': 'none',
                '-webkit-appearance': 'none',
                cursor: 'pointer',
            },
            [[`input[type="range"]:disabled::-webkit-slider-thumb`]]: {
                background: theme('colors.gray.400', colors.gray[400]),
            },
            [[`.dark input[type="range"]:disabled::-webkit-slider-thumb`]]: {
                background: theme('colors.gray.500', colors.gray[500]),
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
                '--tw-ring-color': 'rgb(164 202 254 / var(--tw-ring-opacity))',
            },
            [[`input[type="range"]::-moz-range-thumb`]]: {
                height: spacing[5],
                width: spacing[5],
                background: theme('colors.blue.600', colors.blue[600]),
                'border-radius': borderRadius.full,
                border: 0,
                appearance: 'none',
                '-moz-appearance': 'none',
                '-webkit-appearance': 'none',
                cursor: 'pointer',
            },
            [[`input[type="range"]:disabled::-moz-range-thumb`]]: {
                background: theme('colors.gray.400', colors.gray[400]),
            },
            [[`.dark input[type="range"]:disabled::-moz-range-thumb`]]: {
                background: theme('colors.gray.500', colors.gray[500]),
            },
            [[`input[type="range"]::-moz-range-progress`]]: {
                background: theme('colors.blue.500', colors.blue[500]),
            },
            [[`input[type="range"]::-ms-fill-lower`]]: {
                background: theme('colors.blue.500', colors.blue[500]),
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
            ['.toggle-bg:after']: {
                content: '""',
                position: 'absolute',
                top: spacing[0.5],
                left: spacing[0.5],
                background: 'white',
                'border-color': theme('colors.gray.300', colors.gray[300]),
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
            ['input:checked + .toggle-bg:after']: {
                transform: 'translateX(100%);',
                'border-color': 'white',
            },
            ['input:checked + .toggle-bg']: {
                background: theme('colors.blue.600', colors.gray[600]),
                'border-color': theme('colors.blue.600', colors.gray[600]),
            },
            // remove from v2.x+ END
            [['.tooltip-arrow', '.tooltip-arrow:before']]: {
                position: 'absolute',
                width: '8px',
                height: '8px',
                background: 'inherit',
            },
            ['.tooltip-arrow']: {
                visibility: 'hidden',
            },
            ['.tooltip-arrow:before']: {
                content: '""',
                visibility: 'visible',
                transform: 'rotate(45deg)',
            },
            [`[data-tooltip-style^='light'] + .tooltip > .tooltip-arrow:before`]:
                {
                    'border-style': 'solid',
                    'border-color': colors.gray[200],
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
            [`.tooltip[data-popper-placement^='bottom'] > .tooltip-arrow`]: {
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
                'border-color': colors.gray[200],
            },
            [`.dark [role="tooltip"] > [data-popper-arrow]:before`]: {
                'border-style': 'solid',
                'border-color': colors.gray[600],
            },
            [`[role="tooltip"] > [data-popper-arrow]:after`]: {
                'border-style': 'solid',
                'border-color': colors.gray[200],
            },
            [`.dark [role="tooltip"] > [data-popper-arrow]:after`]: {
                'border-style': 'solid',
                'border-color': colors.gray[600],
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
    },
    {
        darkMode: 'class', // or 'media' or 'class',
        theme: {
            extend: {
                height: {
                    modal: 'calc(100% - 2rem)',
                },
                boxShadow: {
                    'sm-light': '0 2px 5px 0px rgba(255, 255, 255, 0.08)',
                },
                colors: {
                    transparent: 'transparent',
                    white: '#ffffff',
                    black: '#000000',
                    gray: {
                        50: '#F9FAFB',
                        100: '#F3F4F6',
                        200: '#E5E7EB',
                        300: '#D1D5DB',
                        400: '#9CA3AF',
                        500: '#6B7280',
                        600: '#4B5563',
                        700: '#374151',
                        800: '#1F2937',
                        900: '#111827',
                    },
                    red: {
                        50: '#FDF2F2',
                        100: '#FDE8E8',
                        200: '#FBD5D5',
                        300: '#F8B4B4',
                        400: '#F98080',
                        500: '#F05252',
                        600: '#E02424',
                        700: '#C81E1E',
                        800: '#9B1C1C',
                        900: '#771D1D',
                    },
                    orange: {
                        50: '#FFF8F1',
                        100: '#FEECDC',
                        200: '#FCD9BD',
                        300: '#FDBA8C',
                        400: '#FF8A4C',
                        500: '#FF5A1F',
                        600: '#D03801',
                        700: '#B43403',
                        800: '#8A2C0D',
                        900: '#771D1D',
                    },
                    yellow: {
                        50: '#FDFDEA',
                        100: '#FDF6B2',
                        200: '#FCE96A',
                        300: '#FACA15',
                        400: '#E3A008',
                        500: '#C27803',
                        600: '#9F580A',
                        700: '#8E4B10',
                        800: '#723B13',
                        900: '#633112',
                    },
                    green: {
                        50: '#F3FAF7',
                        100: '#DEF7EC',
                        200: '#BCF0DA',
                        300: '#84E1BC',
                        400: '#31C48D',
                        500: '#0E9F6E',
                        600: '#057A55',
                        700: '#046C4E',
                        800: '#03543F',
                        900: '#014737',
                    },
                    teal: {
                        50: '#EDFAFA',
                        100: '#D5F5F6',
                        200: '#AFECEF',
                        300: '#7EDCE2',
                        400: '#16BDCA',
                        500: '#0694A2',
                        600: '#047481',
                        700: '#036672',
                        800: '#05505C',
                        900: '#014451',
                    },
                    blue: {
                        50: '#EBF5FF',
                        100: '#E1EFFE',
                        200: '#C3DDFD',
                        300: '#A4CAFE',
                        400: '#76A9FA',
                        500: '#3F83F8',
                        600: '#1C64F2',
                        700: '#1A56DB',
                        800: '#1E429F',
                        900: '#233876',
                    },
                    indigo: {
                        50: '#F0F5FF',
                        100: '#E5EDFF',
                        200: '#CDDBFE',
                        300: '#B4C6FC',
                        400: '#8DA2FB',
                        500: '#6875F5',
                        600: '#5850EC',
                        700: '#5145CD',
                        800: '#42389D',
                        900: '#362F78',
                    },
                    purple: {
                        50: '#F6F5FF',
                        100: '#EDEBFE',
                        200: '#DCD7FE',
                        300: '#CABFFD',
                        400: '#AC94FA',
                        500: '#9061F9',
                        600: '#7E3AF2',
                        700: '#6C2BD9',
                        800: '#5521B5',
                        900: '#4A1D96',
                    },
                    pink: {
                        50: '#FDF2F8',
                        100: '#FCE8F3',
                        200: '#FAD1E8',
                        300: '#F8B4D9',
                        400: '#F17EB8',
                        500: '#E74694',
                        600: '#D61F69',
                        700: '#BF125D',
                        800: '#99154B',
                        900: '#751A3D',
                    },
                },
            },
        },
    }
);
