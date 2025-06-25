// JavaScript Helper (keep this in your HTML or JS file)
window.pdfScrollHelper = {
    getScrollTop: function () {
        const container = document.querySelector('.e-pv-viewer-container');
        return container ? container.scrollTop : 0;
    },
    setScrollTop: function (position) {
        const container = document.querySelector('.e-pv-viewer-container');
        if (container) {
            container.scrollTop = position;
            return true;
        }
        return false;
    },
    // Add a delayed scroll function for better reliability
    setScrollTopDelayed: function (position, delay = 100) {
        setTimeout(() => {
            const container = document.querySelector('.e-pv-viewer-container');
            if (container) {
                container.scrollTop = position;
            }
        }, delay);
    }
};