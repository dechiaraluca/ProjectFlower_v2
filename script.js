 document.addEventListener('DOMContentLoaded', function() {
            console.log('🚀 Script chargé - DOM ready');

            // Éléments du DOM
            const navLinks = document.querySelectorAll('.nav-link, .cta-button');
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const navMenu = document.getElementById('navMenu');
            const mobileOverlay = document.getElementById('mobileOverlay');

            // Debug des éléments
            console.log('🔍 Éléments trouvés:');
            console.log('- navLinks:', navLinks.length);
            console.log('- mobileMenuBtn:', mobileMenuBtn);
            console.log('- navMenu:', navMenu);
            console.log('- mobileOverlay:', mobileOverlay);

            // Fonction pour basculer le menu mobile
            function toggleMobileMenu() {
                console.log('📱 toggleMobileMenu appelée');
                
                if (!navMenu) {
                    console.error('❌ navMenu introuvable!');
                    return;
                }
                
                const isOpen = navMenu.classList.contains('show');
                console.log('- Menu actuellement ouvert:', isOpen);
                
                if (isOpen) {
                    // Fermer le menu
                    console.log('🔒 Fermeture du menu');
                    navMenu.classList.remove('show');
                    mobileMenuBtn.classList.remove('active');
                    mobileOverlay.classList.remove('show');
                    mobileMenuBtn.innerHTML = '☰';
                } else {
                    // Ouvrir le menu
                    console.log('🔓 Ouverture du menu');
                    navMenu.classList.add('show');
                    mobileMenuBtn.classList.add('active');
                    mobileOverlay.classList.add('show');
                    mobileMenuBtn.innerHTML = '✕';
                }
                
                console.log('- Nouvelles classes navMenu:', navMenu.className);
            }

            // Event listener pour le bouton burger
            if (mobileMenuBtn) {
                console.log('✅ Ajout event listener sur le bouton burger');
                mobileMenuBtn.addEventListener('click', function(e) {
                    console.log('🖱️ Clic sur le bouton burger détecté');
                    e.preventDefault();
                    e.stopPropagation();
                    toggleMobileMenu();
                });
            } else {
                console.error('❌ Bouton burger introuvable!');
            }

            // Event listener pour l'overlay (fermer en cliquant à côté)
            if (mobileOverlay) {
                console.log('✅ Ajout event listener sur overlay');
                mobileOverlay.addEventListener('click', function() {
                    console.log('🖱️ Clic sur overlay détecté');
                    toggleMobileMenu();
                });
            } else {
                console.error('❌ Overlay introuvable!');
            }

            // Navigation entre les sections
            console.log('🧭 Configuration de la navigation');
            navLinks.forEach((link, index) => {
                console.log(`- Lien ${index}:`, link.getAttribute('href'));
                link.addEventListener('click', function(e) {
                    console.log('🖱️ Clic sur lien de navigation:', this.getAttribute('href'));
                    e.preventDefault();
                    
                    const href = this.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        const targetId = href.substring(1);
                        console.log('🎯 Navigation vers section:', targetId);
                        showSection(targetId);

                        // Fermer le menu mobile après navigation
                        if (navMenu.classList.contains('show')) {
                            console.log('🔒 Fermeture du menu après navigation');
                            toggleMobileMenu();
                        }

                        // Mettre à jour les liens actifs
                        updateActiveLinks(this);
                    }
                });
            });

            // Fonction pour afficher une section
            function showSection(targetId) {
                console.log('📄 showSection appelée pour:', targetId);
                
                // Cacher toutes les sections
                const sections = document.querySelectorAll('.page-section');
                console.log('- Nombre de sections trouvées:', sections.length);
                
                sections.forEach((section, index) => {
                    console.log(`- Section ${index}: ${section.id} -> cachée`);
                    section.classList.add('hidden');
                });

                // Montrer la section cible
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    console.log('✅ Section cible trouvée:', targetId);
                    targetSection.classList.remove('hidden');
                    console.log('- Classes finales:', targetSection.className);
                    
                    // Scroll vers le haut après changement de section
                    setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        console.log('📜 Scroll vers le haut effectué');
                    }, 100);
                } else {
                    console.error('❌ Section cible introuvable:', targetId);
                }
            }

            // Fonction pour mettre à jour les liens actifs
            function updateActiveLinks(clickedLink) {
                console.log('🎯 Mise à jour des liens actifs');
                
                // Enlever la classe active de tous les liens
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    link.parentElement.classList.remove('active');
                });

                // Ajouter la classe active au lien cliqué (seulement si c'est un nav-link)
                if (clickedLink.classList.contains('nav-link')) {
                    console.log('✅ Lien actif mis à jour');
                    clickedLink.classList.add('active');
                    clickedLink.parentElement.classList.add('active');
                }
            }

            // Fermer le menu mobile lors du redimensionnement
            window.addEventListener('resize', function() {
                console.log('📏 Redimensionnement détecté, largeur:', window.innerWidth);
                if (window.innerWidth > 768 && navMenu && navMenu.classList.contains('show')) {
                    console.log('🔒 Fermeture du menu suite au redimensionnement');
                    toggleMobileMenu();
                }
            });

            // Empêcher la propagation des clics dans le menu
            if (navMenu) {
                navMenu.addEventListener('click', function(e) {
                    console.log('🖱️ Clic dans le menu - propagation stoppée');
                    e.stopPropagation();
                });
            }

            // Test de la largeur d'écran au chargement
            console.log('📏 Largeur d\'écran au chargement:', window.innerWidth);
            
            // Gérer la soumission du formulaire de contact
            const contactForm = document.querySelector('.contact-form');
            if (contactForm) {
                console.log('✅ Formulaire de contact trouvé');
                contactForm.addEventListener('submit', function(e) {
                    console.log('📝 Soumission du formulaire');
                    e.preventDefault();
                    
                    // Récupérer les données du formulaire
                    const formData = new FormData(this);
                    const data = Object.fromEntries(formData);
                    console.log('📊 Données du formulaire:', data);
                    
                    // Simuler l'envoi (vous pouvez remplacer par votre logique d'envoi)
                    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
                    
                    // Réinitialiser le formulaire
                    this.reset();
                });
            } else {
                console.log('⚠️ Formulaire de contact non trouvé (normal si pas sur la page contact)');
            }

            // Animation d'entrée pour les cartes de compositions
            function animateCompositionCards() {
                console.log('🎨 Animation des cartes de compositions');
                const cards = document.querySelectorAll('.composition-card');
                console.log('- Nombre de cartes:', cards.length);
                
                cards.forEach((card, index) => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.transition = 'all 0.6s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }

            // Observer pour déclencher les animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        console.log('👁️ Section visible:', entry.target.id);
                        if (entry.target.id === 'compositions') {
                            animateCompositionCards();
                        }
                    }
                });
            }, observerOptions);

            // Observer les sections pour les animations
            document.querySelectorAll('.page-section').forEach(section => {
                observer.observe(section);
                console.log('👁️ Observer ajouté pour section:', section.id);
            });

            // Initialiser la page d'accueil comme active
            console.log('🏠 Initialisation de la page d\'accueil');
            showSection('accueil');
            
            console.log('✅ Script entièrement initialisé');
        });