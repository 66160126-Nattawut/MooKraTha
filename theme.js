// Dark mode functionality
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // Check for saved theme preference or use preferred color scheme
    if (localStorage.getItem('darkMode') === 'enabled' || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches && 
        !localStorage.getItem('darkMode'))) {
        enableDarkMode();
        if (darkModeToggle) {
            darkModeToggle.checked = true;
        }
    }
    
    // Listen for toggle changes
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function() {
            if (this.checked) {
                enableDarkMode();
            } else {
                disableDarkMode();
            }
        });
    }
    
    function enableDarkMode() {
        document.body.classList.add('bg-dark', 'text-white');
        
        // Update text colors
        document.querySelectorAll('h2, h5, h6, .btn-outline, p, small, .mb-0').forEach(element => {
            element.classList.add('text-white');
            element.classList.remove('text-black');
        });
        
        // Update borders
        document.querySelectorAll('hr').forEach(hr => {
            hr.classList.remove('border-dark');
            hr.classList.add('border-light');
        });
        
        // Update form elements
        document.querySelectorAll('.form-select').forEach(select => {
            select.classList.add('bg-dark', 'text-white');
            select.classList.add('border-light');
            select.classList.remove('border-dark');
        });
        
        // Update cards if any
        document.querySelectorAll('.card').forEach(card => {
            card.classList.add('bg-dark', 'text-white', 'border-light');
        });
        
        localStorage.setItem('darkMode', 'enabled');
    }
    
    function disableDarkMode() {
        document.body.classList.remove('bg-dark', 'text-white');
        
        // Update text colors
        document.querySelectorAll('h2, h5, h6, .btn-outline, p, small, .mb-0').forEach(element => {
            element.classList.remove('text-white');
            element.classList.add('text-black');
        });
        
        // Update borders
        document.querySelectorAll('hr').forEach(hr => {
            hr.classList.add('border-dark');
            hr.classList.remove('border-light');
        });
        
        // Update form elements
        document.querySelectorAll('.form-select').forEach(select => {
            select.classList.remove('bg-dark', 'text-white');
            select.classList.remove('border-light');
            select.classList.add('border-dark');
        });
        
        // Update cards if any
        document.querySelectorAll('.card').forEach(card => {
            card.classList.remove('bg-dark', 'text-white', 'border-light');
        });
        
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Search functionality
function toggleSearch() {
    const searchInput = document.querySelector('.search-input');
    searchInput.classList.toggle('active');
    if (searchInput.classList.contains('active')) {
        searchInput.focus();
    }
}