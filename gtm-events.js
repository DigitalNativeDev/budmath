// Ensure dataLayer is initialized before pushing events
window.dataLayer = window.dataLayer || [];

// Function to safely push events to dataLayer
function pushGTMEvent(eventName, eventData = {}) {
    dataLayer.push({
        'event': eventName,
        ...eventData
    });
}

// Add event listener after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Track calculator usage
    document.getElementById('calculateBtn').addEventListener('click', () => {
        const amount = document.getElementById('amountRemaining').value;
        pushGTMEvent('calculator_used', {
            'input_amount': amount,
            'calculator_type': 'cannabis_conversion'
        });
    });

    // Track dark mode toggle
    document.getElementById('darkModeToggle').addEventListener('click', () => {
        const isDarkMode = document.documentElement.classList.contains('dark');
        pushGTMEvent('theme_changed', {
            'theme_mode': isDarkMode ? 'light' : 'dark'
        });
    });
}); 