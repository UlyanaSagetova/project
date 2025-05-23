        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navLinks = document.querySelector('.nav-links');
            const authButtons = document.querySelector('.auth-buttons');
            
            mobileMenuBtn.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                authButtons.classList.toggle('active');
            });
            
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768 ) {
                    navLinks.classList.remove('active');
                    authButtons.classList.remove('active');
                }
            });
        });