import BasePopper from './basePopper';

const Default = {
    offset: 8,
}

class Tooltip extends BasePopper {
    constructor(targetEl = null, triggerEl = null, options = {}) {
        super(targetEl, triggerEl, options)
        this._options = { ...Default, ...this._options }
    }
}

window.Tooltip = Tooltip;

function initTooltip() {
    document.querySelectorAll('[data-tooltip-target]').forEach(triggerEl => {
        const targetEl = document.getElementById(triggerEl.getAttribute('data-tooltip-target'))
        const triggerType = triggerEl.getAttribute('data-tooltip-trigger');
        const placement = triggerEl.getAttribute('data-tooltip-placement');

        new Tooltip(targetEl, triggerEl, {
            placement: placement ? placement : Default.placement,
            triggerType: triggerType ? triggerType : Default.triggerType
        })
    })
}

if (document.readyState !== 'loading') {
	// DOMContentLoaded event were already fired. Perform explicit initialization now
	initTooltip()
} else {
	// DOMContentLoaded event not yet fired, attach initialization process to it
	document.addEventListener('DOMContentLoaded', initTooltip)
}

export default Tooltip