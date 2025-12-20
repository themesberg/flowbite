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
        // ============================================
        // TEXT/BODY COLORS
        // ============================================
        '.text-body': { 'color': 'var(--color-body)' },
        '.text-body-subtle': { 'color': 'var(--color-body-subtle)' },
        '.text-heading': { 'color': 'var(--color-heading)' },
        
        // ============================================
        // NEUTRAL COLORS (Background)
        // ============================================
        // Primary
        '.bg-neutral-primary-soft': { 'background-color': 'var(--color-neutral-primary-soft)' },
        '.bg-neutral-primary': { 'background-color': 'var(--color-neutral-primary)' },
        '.bg-neutral-primary-medium': { 'background-color': 'var(--color-neutral-primary-medium)' },
        '.bg-neutral-primary-strong': { 'background-color': 'var(--color-neutral-primary-strong)' },
        
        // Secondary
        '.bg-neutral-secondary-soft': { 'background-color': 'var(--color-neutral-secondary-soft)' },
        '.bg-neutral-secondary': { 'background-color': 'var(--color-neutral-secondary)' },
        '.bg-neutral-secondary-medium': { 'background-color': 'var(--color-neutral-secondary-medium)' },
        '.bg-neutral-secondary-strong': { 'background-color': 'var(--color-neutral-secondary-strong)' },
        '.bg-neutral-secondary-strongest': { 'background-color': 'var(--color-neutral-secondary-strongest)' },
        
        // Tertiary
        '.bg-neutral-tertiary-soft': { 'background-color': 'var(--color-neutral-tertiary-soft)' },
        '.bg-neutral-tertiary': { 'background-color': 'var(--color-neutral-tertiary)' },
        '.bg-neutral-tertiary-medium': { 'background-color': 'var(--color-neutral-tertiary-medium)' },
        
        // Quaternary
        '.bg-neutral-quaternary': { 'background-color': 'var(--color-neutral-quaternary)' },
        '.bg-neutral-quaternary-medium': { 'background-color': 'var(--color-neutral-quaternary-medium)' },
        
        // Gray
        '.bg-gray': { 'background-color': 'var(--color-gray)' },
        
        // ============================================
        // NEUTRAL COLORS (Text)
        // ============================================
        // Primary
        '.text-neutral-primary-soft': { 'color': 'var(--color-neutral-primary-soft)' },
        '.text-neutral-primary': { 'color': 'var(--color-neutral-primary)' },
        '.text-neutral-primary-medium': { 'color': 'var(--color-neutral-primary-medium)' },
        '.text-neutral-primary-strong': { 'color': 'var(--color-neutral-primary-strong)' },
        
        // Secondary
        '.text-neutral-secondary-soft': { 'color': 'var(--color-neutral-secondary-soft)' },
        '.text-neutral-secondary': { 'color': 'var(--color-neutral-secondary)' },
        '.text-neutral-secondary-medium': { 'color': 'var(--color-neutral-secondary-medium)' },
        '.text-neutral-secondary-strong': { 'color': 'var(--color-neutral-secondary-strong)' },
        '.text-neutral-secondary-strongest': { 'color': 'var(--color-neutral-secondary-strongest)' },
        
        // Tertiary
        '.text-neutral-tertiary-soft': { 'color': 'var(--color-neutral-tertiary-soft)' },
        '.text-neutral-tertiary': { 'color': 'var(--color-neutral-tertiary)' },
        '.text-neutral-tertiary-medium': { 'color': 'var(--color-neutral-tertiary-medium)' },
        
        // Quaternary
        '.text-neutral-quaternary': { 'color': 'var(--color-neutral-quaternary)' },
        '.text-neutral-quaternary-medium': { 'color': 'var(--color-neutral-quaternary-medium)' },
        
        // Gray
        '.text-gray': { 'color': 'var(--color-gray)' },
        
        // ============================================
        // NEUTRAL COLORS (Border)
        // ============================================
        // Primary
        '.border-neutral-primary-soft': { 'border-color': 'var(--color-neutral-primary-soft)' },
        '.border-neutral-primary': { 'border-color': 'var(--color-neutral-primary)' },
        '.border-neutral-primary-medium': { 'border-color': 'var(--color-neutral-primary-medium)' },
        '.border-neutral-primary-strong': { 'border-color': 'var(--color-neutral-primary-strong)' },
        
        // Secondary
        '.border-neutral-secondary-soft': { 'border-color': 'var(--color-neutral-secondary-soft)' },
        '.border-neutral-secondary': { 'border-color': 'var(--color-neutral-secondary)' },
        '.border-neutral-secondary-medium': { 'border-color': 'var(--color-neutral-secondary-medium)' },
        '.border-neutral-secondary-strong': { 'border-color': 'var(--color-neutral-secondary-strong)' },
        '.border-neutral-secondary-strongest': { 'border-color': 'var(--color-neutral-secondary-strongest)' },
        
        // Tertiary
        '.border-neutral-tertiary-soft': { 'border-color': 'var(--color-neutral-tertiary-soft)' },
        '.border-neutral-tertiary': { 'border-color': 'var(--color-neutral-tertiary)' },
        '.border-neutral-tertiary-medium': { 'border-color': 'var(--color-neutral-tertiary-medium)' },
        
        // Quaternary
        '.border-neutral-quaternary': { 'border-color': 'var(--color-neutral-quaternary)' },
        '.border-neutral-quaternary-medium': { 'border-color': 'var(--color-neutral-quaternary-medium)' },
        
        // Gray
        '.border-gray': { 'border-color': 'var(--color-gray)' },
        
        // ============================================
        // BRAND COLORS
        // ============================================
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
        '.border-brand-light': { 'border-color': 'var(--color-brand-light)' },
        
        '.ring-brand-subtle': { '--tw-ring-color': 'var(--color-brand-subtle)' },
        
        // ============================================
        // SUCCESS COLORS
        // ============================================
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
        
        // ============================================
        // DANGER COLORS
        // ============================================
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
        
        // ============================================
        // WARNING COLORS
        // ============================================
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
        
        // ============================================
        // DARK COLORS
        // ============================================
        '.bg-dark-soft': { 'background-color': 'var(--color-dark-soft)' },
        '.bg-dark': { 'background-color': 'var(--color-dark)' },
        '.bg-dark-strong': { 'background-color': 'var(--color-dark-strong)' },
        '.bg-disabled': { 'background-color': 'var(--color-disabled)' },
        '.bg-dark-backdrop': { 'background-color': 'var(--color-dark-backdrop)' },
        
        '.text-dark-soft': { 'color': 'var(--color-dark-soft)' },
        '.text-dark': { 'color': 'var(--color-dark)' },
        '.text-dark-strong': { 'color': 'var(--color-dark-strong)' },
        '.text-disabled': { 'color': 'var(--color-disabled)' },
        '.text-dark-backdrop': { 'color': 'var(--color-dark-backdrop)' },
        
        '.border-dark-soft': { 'border-color': 'var(--color-dark-soft)' },
        '.border-dark': { 'border-color': 'var(--color-dark)' },
        '.border-dark-strong': { 'border-color': 'var(--color-dark-strong)' },
        '.border-dark-backdrop': { 'border-color': 'var(--color-dark-backdrop)' },
        
        '.ring-dark-subtle': { '--tw-ring-color': 'var(--color-dark-subtle)' },
        
        // ============================================
        // BORDER SPECIFIC COLORS
        // ============================================
        // Buffer
        '.border-buffer': { 'border-color': 'var(--color-buffer)' },
        '.border-buffer-medium': { 'border-color': 'var(--color-buffer-medium)' },
        '.border-buffer-strong': { 'border-color': 'var(--color-buffer-strong)' },
        
        '.bg-buffer': { 'background-color': 'var(--color-buffer)' },
        '.bg-buffer-medium': { 'background-color': 'var(--color-buffer-medium)' },
        '.bg-buffer-strong': { 'background-color': 'var(--color-buffer-strong)' },
        
        // Muted
        '.border-muted': { 'border-color': 'var(--color-muted)' },
        '.bg-muted': { 'background-color': 'var(--color-muted)' },
        
        // Light
        '.border-light-subtle': { 'border-color': 'var(--color-light-subtle)' },
        '.border-light': { 'border-color': 'var(--color-light)' },
        '.border-light-medium': { 'border-color': 'var(--color-light-medium)' },
        
        '.bg-light-subtle': { 'background-color': 'var(--color-light-subtle)' },
        '.bg-light': { 'background-color': 'var(--color-light)' },
        '.bg-light-medium': { 'background-color': 'var(--color-light-medium)' },
        
        // Default
        '.border-default-subtle': { 'border-color': 'var(--color-default-subtle)' },
        '.border-default': { 'border-color': 'var(--color-default)' },
        '.border-default-medium': { 'border-color': 'var(--color-default-medium)' },
        '.border-default-strong': { 'border-color': 'var(--color-default-strong)' },
        
        '.bg-default-subtle': { 'background-color': 'var(--color-default-subtle)' },
        '.bg-default': { 'background-color': 'var(--color-default)' },
        '.bg-default-medium': { 'background-color': 'var(--color-default-medium)' },
        '.bg-default-strong': { 'background-color': 'var(--color-default-strong)' },
        
        // ============================================
        // SINGLE COLOR VARIANTS
        // ============================================
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
        
        // ============================================
        // FOREGROUND (TEXT SEMANTIC) COLORS
        // ============================================
        '.text-fg-brand-subtle': { 'color': 'var(--color-fg-brand-subtle)' },
        '.text-fg-brand': { 'color': 'var(--color-fg-brand)' },
        '.text-fg-brand-strong': { 'color': 'var(--color-fg-brand-strong)' },
        '.text-fg-success': { 'color': 'var(--color-fg-success)' },
        '.text-fg-success-strong': { 'color': 'var(--color-fg-success-strong)' },
        '.text-fg-danger': { 'color': 'var(--color-fg-danger)' },
        '.text-fg-danger-strong': { 'color': 'var(--color-fg-danger-strong)' },
        '.text-fg-warning': { 'color': 'var(--color-fg-warning)' },
        '.text-fg-warning-subtle': { 'color': 'var(--color-fg-warning-subtle)' },
        '.text-fg-yellow': { 'color': 'var(--color-fg-yellow)' },
        '.text-fg-disabled': { 'color': 'var(--color-fg-disabled)' },
        '.text-fg-purple': { 'color': 'var(--color-fg-purple)' },
        '.text-fg-cyan': { 'color': 'var(--color-fg-cyan)' },
        '.text-fg-indigo': { 'color': 'var(--color-fg-indigo)' },
        '.text-fg-pink': { 'color': 'var(--color-fg-pink)' },
        '.text-fg-lime': { 'color': 'var(--color-fg-lime)' },
    };
    
    addUtilities(colorUtilities);
});
