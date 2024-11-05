// GTM Event Definitions
window.dataLayer = window.dataLayer || [];

// Page View tracking
window.dataLayer.push({
    'event': 'page_view',
    'page_title': document.title,
    'page_location': window.location.href,
    'page_path': window.location.pathname
});

// Define custom events
const GTM_EVENTS = {
    CALCULATION: {
        SUCCESS: 'calculation_success',
        ERROR: 'calculation_error'
    },
    THEME: {
        CHANGE: 'theme_change'
    },
    HISTORY: {
        CLICK: 'history_calculation_click'
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GTM_EVENTS;
} 