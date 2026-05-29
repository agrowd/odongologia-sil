/**
 * Oliva Perez Odontología - Interactive JS Features
 * [Development Debugging Logs Tracked in .synapse/logs.md]
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('[OlivaPerez-Log-01] DOM Content Loaded. Initializing scripts.');

    // ==========================================================================
    // RESPONSIVE MOBILE NAVIGATION
    // ==========================================================================
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            console.log('[OlivaPerez-Log-02] Menu toggle button clicked.');
            navMenu.classList.toggle('active');
            
            // Toggle hamburger icon animation
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                console.log(`[OlivaPerez-Log-03] Navigation link clicked: ${link.textContent}`);
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // ==========================================================================
    // SCROLL HIGHLIGHTING (SCROLL-SPY) & STICKY HEADER
    // ==========================================================================
    const header = document.getElementById('main-header');
    
    // Sticky Header Scroll Class
    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 40) {
                header.style.boxShadow = 'var(--shadow-medium)';
                header.style.backgroundColor = 'rgba(250, 247, 247, 0.98)';
            } else {
                header.style.boxShadow = 'none';
                header.style.backgroundColor = 'rgba(250, 247, 247, 0.95)';
            }
        }
    });

    // Simple scroll observer to manually update active menu links
    const sections = ['inicio', 'sobre-nosotros', 'especialidades', 'clinicas'];
    
    window.addEventListener('scroll', () => {
        let currentSection = 'inicio';
        
        sections.forEach(secId => {
            const el = document.getElementById(secId);
            if (el) {
                const rect = el.getBoundingClientRect();
                // If section top is above or near the middle of viewport
                if (rect.top <= window.innerHeight * 0.3) {
                    currentSection = secId;
                }
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === '#' && currentSection === 'inicio') {
                link.classList.add('active');
            } else if (href === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    // ==========================================================================
    // WELCOME MODAL POPUP
    // ==========================================================================
    const welcomeModal = document.getElementById('welcome-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    if (welcomeModal && modalCloseBtn) {
        // Use sessionStorage so it only opens once per session (makes testing and repeat viewing easy)
        const welcomeShown = sessionStorage.getItem('oliva-perez-welcome-popup-dismissed');

        if (!welcomeShown) {
            console.log('[OlivaPerez-Log-05] Welcome popup triggered. Showing in 600ms.');
            setTimeout(() => {
                welcomeModal.classList.add('active');
                console.log('[OlivaPerez-Log-06] Welcome popup active.');
            }, 600);
        } else {
            console.log('[OlivaPerez-Log-07] Welcome popup suppressed via sessionStorage.');
        }

        const closeModalFunc = () => {
            console.log('[OlivaPerez-Log-08] Closing welcome popup and setting sessionStorage dismiss flag.');
            welcomeModal.classList.remove('active');
            sessionStorage.setItem('oliva-perez-welcome-popup-dismissed', 'true');
        };

        modalCloseBtn.addEventListener('click', closeModalFunc);

        // Close on clicking overlay outside the content window
        welcomeModal.addEventListener('click', (e) => {
            if (e.target === welcomeModal) {
                closeModalFunc();
            }
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && welcomeModal.classList.contains('active')) {
                closeModalFunc();
            }
        });
    }
});
