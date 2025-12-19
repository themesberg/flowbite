/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin');

/**
 * Flowbite Utilities Plugin for Tailwind CSS v4
 * 
 * This plugin generates utility classes for Flowbite's custom color variables.
 * In Tailwind v4, CSS custom properties defined in @theme are not automatically
 * converted to utility classes, so this plugin explicitly creates them.
 */
module.exports = plugin(function ({ addUtilities }) {
    // Define all Flowbite color utilities
    const colorUtilities = {
        // Success colors
        '.bg-success-soft': { 'background-color': 'var(--color-success-soft)' },
        '.bg-success': { 'background-color': 'var(--color-success)' },
        '.bg-success-medium': { 'background-color': 'var(--color-success-medium)' },
        '.bg-success-strong': { 'background-color': 'var(--color-success-strong)' },
        
        '.text-success-soft': { 'color': 'var(--color-success-soft)' },
        '.text-success': { 'color': 'var(--color-success)' },
        '.text-success-medium': { 'color': 'var(--color-success-medium)' },
        '.text-success-strong': { 'color': 'var(--color-success-strong)' },
        
        '.border-success-soft': { 'border-color': 'var(--color-success-soft)' },
        '.border-success': { 'border-color': 'var(--color-success)' },
        '.border-success-medium': { 'border-color': 'var(--color-success-medium)' },
        '.border-success-strong': { 'border-color': 'var(--color-success-strong)' },
        
        '.ring-success-subtle': { '--tw-ring-color': 'var(--color-success-subtle)' },
        
        // Danger colors
        '.bg-danger-soft': { 'background-color': 'var(--color-danger-soft)' },
        '.bg-danger': { 'background-color': 'var(--color-danger)' },
        '.bg-danger-medium': { 'background-color': 'var(--color-danger-medium)' },
        '.bg-danger-strong': { 'background-color': 'var(--color-danger-strong)' },
        
        '.text-danger-soft': { 'color': 'var(--color-danger-soft)' },
        '.text-danger': { 'color': 'var(--color-danger)' },
        '.text-danger-medium': { 'color': 'var(--color-danger-medium)' },
        '.text-danger-strong': { 'color': 'var(--color-danger-strong)' },
        
        '.border-danger-soft': { 'border-color': 'var(--color-danger-soft)' },
        '.border-danger': { 'border-color': 'var(--color-danger)' },
        '.border-danger-medium': { 'border-color': 'var(--color-danger-medium)' },
        '.border-danger-strong': { 'border-color': 'var(--color-danger-strong)' },
        
        '.ring-danger-subtle': { '--tw-ring-color': 'var(--color-danger-subtle)' },
        
        // Warning colors
        '.bg-warning-soft': { 'background-color': 'var(--color-warning-soft)' },
        '.bg-warning': { 'background-color': 'var(--color-warning)' },
        '.bg-warning-medium': { 'background-color': 'var(--color-warning-medium)' },
        '.bg-warning-strong': { 'background-color': 'var(--color-warning-strong)' },
        
        '.text-warning-soft': { 'color': 'var(--color-warning-soft)' },
        '.text-warning': { 'color': 'var(--color-warning)' },
        '.text-warning-medium': { 'color': 'var(--color-warning-medium)' },
        '.text-warning-strong': { 'color': 'var(--color-warning-strong)' },
        
        '.border-warning-soft': { 'border-color': 'var(--color-warning-soft)' },
        '.border-warning': { 'border-color': 'var(--color-warning)' },
        '.border-warning-medium': { 'border-color': 'var(--color-warning-medium)' },
        '.border-warning-strong': { 'border-color': 'var(--color-warning-strong)' },
        
        '.ring-warning-subtle': { '--tw-ring-color': 'var(--color-warning-subtle)' },
        
        // Dark colors
        '.bg-dark-soft': { 'background-color': 'var(--color-dark-soft)' },
        '.bg-dark': { 'background-color': 'var(--color-dark)' },
        '.bg-dark-strong': { 'background-color': 'var(--color-dark-strong)' },
        '.bg-disabled': { 'background-color': 'var(--color-disabled)' },
        
        '.text-dark-soft': { 'color': 'var(--color-dark-soft)' },
        '.text-dark': { 'color': 'var(--color-dark)' },
        '.text-dark-strong': { 'color': 'var(--color-dark-strong)' },
        '.text-disabled': { 'color': 'var(--color-disabled)' },
        
        '.border-dark-soft': { 'border-color': 'var(--color-dark-soft)' },
        '.border-dark': { 'border-color': 'var(--color-dark)' },
        '.border-dark-strong': { 'border-color': 'var(--color-dark-strong)' },
        
        '.ring-dark-subtle': { '--tw-ring-color': 'var(--color-dark-subtle)' },
        
        // Brand colors
        '.bg-brand-softer': { 'background-color': 'var(--color-brand-softer)' },
        '.bg-brand-soft': { 'background-color': 'var(--color-brand-soft)' },
        '.bg-brand': { 'background-color': 'var(--color-brand)' },
        '.bg-brand-medium': { 'background-color': 'var(--color-brand-medium)' },
        '.bg-brand-strong': { 'background-color': 'var(--color-brand-strong)' },
        
        '.text-brand-softer': { 'color': 'var(--color-brand-softer)' },
        '.text-brand-soft': { 'color': 'var(--color-brand-soft)' },
        '.text-brand': { 'color': 'var(--color-brand)' },
        '.text-brand-medium': { 'color': 'var(--color-brand-medium)' },
        '.text-brand-strong': { 'color': 'var(--color-brand-strong)' },
        
        '.border-brand-softer': { 'border-color': 'var(--color-brand-softer)' },
        '.border-brand-soft': { 'border-color': 'var(--color-brand-soft)' },
        '.border-brand': { 'border-color': 'var(--color-brand)' },
        '.border-brand-medium': { 'border-color': 'var(--color-brand-medium)' },
        '.border-brand-strong': { 'border-color': 'var(--color-brand-strong)' },
        
        '.ring-brand-subtle': { '--tw-ring-color': 'var(--color-brand-subtle)' },
        
        // Single colors
        '.bg-purple': { 'background-color': 'var(--color-purple)' },
        '.bg-sky': { 'background-color': 'var(--color-sky)' },
        '.bg-teal': { 'background-color': 'var(--color-teal)' },
        '.bg-pink': { 'background-color': 'var(--color-pink)' },
        '.bg-cyan': { 'background-color': 'var(--color-cyan)' },
        '.bg-fuchsia': { 'background-color': 'var(--color-fuchsia)' },
        '.bg-indigo': { 'background-color': 'var(--color-indigo)' },
        '.bg-orange': { 'background-color': 'var(--color-orange)' },
        
        '.text-purple': { 'color': 'var(--color-purple)' },
        '.text-sky': { 'color': 'var(--color-sky)' },
        '.text-teal': { 'color': 'var(--color-teal)' },
        '.text-pink': { 'color': 'var(--color-pink)' },
        '.text-cyan': { 'color': 'var(--color-cyan)' },
        '.text-fuchsia': { 'color': 'var(--color-fuchsia)' },
        '.text-indigo': { 'color': 'var(--color-indigo)' },
        '.text-orange': { 'color': 'var(--color-orange)' },
        
        '.border-purple': { 'border-color': 'var(--color-purple)' },
        '.border-sky': { 'border-color': 'var(--color-sky)' },
        '.border-teal': { 'border-color': 'var(--color-teal)' },
        '.border-pink': { 'border-color': 'var(--color-pink)' },
        '.border-cyan': { 'border-color': 'var(--color-cyan)' },
        '.border-fuchsia': { 'border-color': 'var(--color-fuchsia)' },
        '.border-indigo': { 'border-color': 'var(--color-indigo)' },
        '.border-orange': { 'border-color': 'var(--color-orange)' },
        
        // Foreground colors (text semantic colors)
        '.text-fg-brand-subtle': { 'color': 'var(--color-fg-brand-subtle)' },
        '.text-fg-brand': { 'color': 'var(--color-fg-brand)' },
        '.text-fg-brand-strong': { 'color': 'var(--color-fg-brand-strong)' },
        '.text-fg-success': { 'color': 'var(--color-fg-success)' },
        '.text-fg-success-strong': { 'color': 'var(--color-fg-success-strong)' },
        '.text-fg-danger': { 'color': 'var(--color-fg-danger)' },
        '.text-fg-danger-strong': { 'color': 'var(--color-fg-danger-strong)' },
        '.text-fg-warning': { 'color': 'var(--color-fg-warning)' },
        '.text-fg-warning-subtle': { 'color': 'var(--color-fg-warning-subtle)' },
        '.text-fg-purple': { 'color': 'var(--color-fg-purple)' },
        '.text-fg-cyan': { 'color': 'var(--color-fg-cyan)' },
        '.text-fg-indigo': { 'color': 'var(--color-fg-indigo)' },
        '.text-fg-pink': { 'color': 'var(--color-fg-pink)' },
    };
    
    addUtilities(colorUtilities);
});
