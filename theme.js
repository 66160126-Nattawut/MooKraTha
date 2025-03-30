
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    
    if (localStorage.getItem('darkMode') === 'enabled' || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches && 
        !localStorage.getItem('darkMode'))) {
        enableDarkMode();
        if (darkModeToggle) {
            darkModeToggle.checked = true;
        }
    }
    
   
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
        
       
        document.querySelectorAll('.card, .bg-light').forEach(element => {
            element.classList.remove('bg-light');
            element.classList.add('bg-dark', 'text-white', 'border-light');
        });
        
       
        document.querySelectorAll('h5, h6, p, .mb-1').forEach(element => {
            element.classList.add('text-white');
        });
        
        
        document.querySelectorAll('.form-control').forEach(input => {
            input.classList.add('bg-dark', 'text-white', 'border-secondary');
        });
        
        localStorage.setItem('darkMode', 'enabled');
    }
    
    function disableDarkMode() {
        document.body.classList.remove('bg-dark', 'text-white');
        
        
        document.querySelectorAll('.card, .bg-dark').forEach(element => {
            if (element.classList.contains('card') || element.classList.contains('rounded-3')) {
                element.classList.remove('bg-dark', 'text-white', 'border-light');
                element.classList.add('bg-light');
            }
        });
        
        
        document.querySelectorAll('h5, h6, p, .mb-1').forEach(element => {
            element.classList.remove('text-white');
        });
        
        
        document.querySelectorAll('.form-control').forEach(input => {
            input.classList.remove('bg-dark', 'text-white', 'border-secondary');
        });
        
        localStorage.setItem('darkMode', 'disabled');
    }
});


function toggleSearch() {
    const searchInput = document.querySelector('.search-input');
    searchInput.classList.toggle('active');
    if (searchInput.classList.contains('active')) {
        searchInput.focus();
    }
}

function checkLoginBeforeFollow() {
    const isLoggedIn = checkUserLoginStatus();
    
    if (isLoggedIn) {
        const confirmModal = new bootstrap.Modal(document.getElementById('confirmFollowModal'));
        confirmModal.show();
    } else {
        const loginRequiredModal = new bootstrap.Modal(document.getElementById('loginRequiredModal'));
        loginRequiredModal.show();
    }
}

function checkUserLoginStatus() {
    return false;
}

function confirmFollow() {
    const confirmModal = new bootstrap.Modal(document.getElementById('confirmFollowModal'));
    confirmModal.show();
}

function followUser() {
    const confirmModal = bootstrap.Modal.getInstance(document.getElementById('confirmFollowModal'));
    confirmModal.hide();


    const successModal = new bootstrap.Modal(document.getElementById('followSuccessModal'));
    successModal.show();

    document.querySelector('.btn-follow').textContent = 'Following';
    document.querySelector('.btn-follow').classList.replace('btn-secondary', 'btn-success');
    document.querySelector('.btn-follow').disabled = true;
}