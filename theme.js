
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

        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('text-dark');
            item.classList.add('text-white');
        });

        document.querySelectorAll('.modal-content').forEach(modal => {
            modal.classList.add('bg-dark', 'text-white', 'border-light');
        });

        document.querySelectorAll('a[href*="Google"], a[href*="Facebook"]').forEach(btn => {
            btn.classList.add('text-white');
        });

        document.querySelectorAll('.btn').forEach(btn => {
            if (!btn.classList.contains('btn-info') && 
                !btn.classList.contains('btn-primary') && 
                !btn.classList.contains('btn-success') && 
                !btn.classList.contains('btn-danger') && 
                !btn.classList.contains('btn-warning')) {
                btn.classList.add('text-white');
            }
        });
        
        document.querySelectorAll('h2, h5, h6, .btn-outline, p, small, .mb-0, div[class*="text-"], .col-md-3, .col-md-9').forEach(element => {
            if (!element.classList.contains('text-secondary') && 
                !element.classList.contains('text-warning') && 
                !element.classList.contains('text-danger') && 
                !element.classList.contains('text-success')) {
                element.classList.add('text-white');
                element.classList.remove('text-black');
            }
        });
        
        document.querySelectorAll('.bg-light').forEach(element => {
            element.classList.remove('bg-light');
            element.classList.add('bg-dark');
        });
        
        document.querySelectorAll('hr').forEach(hr => {
            hr.classList.remove('border-dark');
            hr.classList.add('border-light');
        });
        
        document.querySelectorAll('.form-select, .form-control').forEach(formElement => {
            formElement.classList.add('bg-dark', 'text-white', 'border-light');
            formElement.classList.remove('border-dark');
        });
        
        document.querySelectorAll('.card').forEach(card => {
            card.classList.add('bg-dark', 'text-white', 'border-light');
        });
        
        localStorage.setItem('darkMode', 'enabled');
    }
    
    function disableDarkMode() {
        document.body.classList.remove('bg-dark', 'text-white');
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.classList.add('navbar-dark', 'bg-dark');
        }

        document.querySelectorAll('.modal-content').forEach(modal => {
            modal.classList.remove('bg-dark', 'text-white', 'border-light');
        });
        
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('text-white');
            item.classList.add('text-dark');
        });
        
        document.querySelectorAll('a[href*="Google"], a[href*="Facebook"]').forEach(btn => {
            btn.classList.remove('text-white');
        });

        document.querySelectorAll('.btn').forEach(btn => {
            if (!btn.classList.contains('btn-info') && 
                !btn.classList.contains('btn-primary') && 
                !btn.classList.contains('btn-success') && 
                !btn.classList.contains('btn-danger') && 
                !btn.classList.contains('btn-warning')) {
                if (!navbar || !navbar.contains(btn)) {
                    btn.classList.remove('text-white');
                }
            }
        });
        
        
        document.querySelectorAll('h2, h5, h6, .btn-outline, p, small, .mb-0, div[class*="text-"]').forEach(element => {
            if (!navbar || !navbar.contains(element)) {
                element.classList.remove('text-white');
                if (!element.classList.contains('text-secondary') && 
                    !element.classList.contains('text-warning') && 
                    !element.classList.contains('text-danger') && 
                    !element.classList.contains('text-success')) {
                    element.classList.add('text-black');
                }
            }
        });
        

        document.querySelectorAll('.bg-dark').forEach(element => {
            if (element !== navbar && (!navbar || !navbar.contains(element))) {
                element.classList.remove('bg-dark');
                element.classList.add('bg-light');
            }
        });
        
        
        document.querySelectorAll('hr').forEach(hr => {
            hr.classList.add('border-dark');
            hr.classList.remove('border-light');
        });
        
        document.querySelectorAll('.form-select, .form-control').forEach(formElement => {
            formElement.classList.remove('bg-dark', 'text-white', 'border-light');
            formElement.classList.add('border-dark');
        });

        document.querySelectorAll('.card').forEach(card => {
            card.classList.remove('bg-dark', 'text-white', 'border-light');
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
document.getElementById('accountHeader').addEventListener('click', function() {
    const menu = document.getElementById('accountMenu');
    menu.classList.toggle('d-none');
});

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelectorAll('.menu-item').forEach(menuItem => {
            menuItem.classList.remove('active');
        });
        
        this.classList.add('active');
        
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.add('d-none');
            section.classList.remove('active');
        });
        
      
        const contentId = this.getAttribute('data-content') + '-content';
        const contentSection = document.getElementById(contentId);
        contentSection.classList.remove('d-none');
        contentSection.classList.add('active');
    });
});

function toggleSearch() {
    const searchInput = document.querySelector('.search-input');
    searchInput.classList.toggle('active');
    if (searchInput.classList.contains('active')) {
        searchInput.focus();
    }
}