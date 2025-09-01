document.addEventListener('DOMContentLoaded', function() {

    // Navigation entre les sections
    const navLinks = document.querySelectorAll('.nav-link, .cta-button');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.getElementById('navMenu');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    });
}
    
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const targetId = href.substring(1);
                showSection(targetId);

                // Fermer le menu mobile
                const navMenu = document.getElementById('navMenu');
                if (navMenu) {
                    navMenu.classList.remove('show');
                }

                // Mettre à jour le lien actif
                document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
                if (this.classList.contains('nav-link')) {
                    this.classList.add('active');
                }

                // Mettre à jour l'effet de barre
                document.querySelectorAll('nav li').forEach(li => li.classList.remove('active'));
                if (this.classList.contains('nav-link')) {
                    this.parentElement.classList.add('active');
                }
            }
        });
    });

    function showSection(targetId) {
        // Cacher toutes les sections
        const sections = document.querySelectorAll('.page-section');
        sections.forEach(section => {
            section.classList.add('hidden');
        });

        // Montrer la section cible
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
        }
    }

    // Fermer le menu mobile en cliquant ailleurs
    document.addEventListener('click', function (e) {
        const navMenu = document.getElementById('navMenu');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        
        if (navMenu && mobileMenuBtn) {
            if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navMenu.classList.remove('show');
            }
        }
    });

    // Gestion du redimensionnement de la fenêtre
    window.addEventListener('resize', function () {
        const navMenu = document.getElementById('navMenu');
        if (window.innerWidth > 768 && navMenu) {
            navMenu.classList.remove('show');
        }
    });

});