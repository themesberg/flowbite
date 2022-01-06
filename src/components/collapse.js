const toggleCollapse = (elementId, show = true) => {
    const collapseEl = document.getElementById(elementId);
    if (show) {
        collapseEl.classList.remove('hidden');
    } else {
        collapseEl.classList.add('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Toggle target elements using [data-collapse-toggle]
    document.querySelectorAll('[data-collapse-toggle]').forEach(function (collapseToggleEl) {
        var collapseId = collapseToggleEl.getAttribute('data-collapse-toggle');

        collapseToggleEl.addEventListener('click', function () {
            toggleCollapse(collapseId, document.getElementById(collapseId).classList.contains('hidden'));
        });
    });
});

window.toggleCollapse = toggleCollapse;