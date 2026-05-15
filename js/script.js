document.addEventListener('DOMContentLoaded', () => {
    // 1. Language Toggle Logic
    const langToggleBtn = document.getElementById('lang-toggle');
    const langText = langToggleBtn.querySelector('.lang-text');
    const body = document.body;

    // Check saved language
    let currentLang = localStorage.getItem('portfolio-lang') || 'ar';
    setLanguage(currentLang);

    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        setLanguage(currentLang);
        renderProjects(); // Re-render projects when language changes
    });

    function setLanguage(lang) {
        body.setAttribute('lang', lang);
        body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        langText.textContent = lang === 'ar' ? 'EN' : 'عربي';
        localStorage.setItem('portfolio-lang', lang);
    }

    // 2. Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('open');
        });
    });

    // 3. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 4. Custom Cursor
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    
    // Only enable on non-touch devices
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    
    if (!isTouch && cursor && follower) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
            follower.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
        });

        // Make follower grow on hoverable elements
        const hoverTargets = document.querySelectorAll('a, button, .btn, .service-card, .portfolio-card, .social-icon');
        hoverTargets.forEach(el => {
            el.addEventListener('mouseenter', () => follower.classList.add('hovering'));
            el.addEventListener('mouseleave', () => follower.classList.remove('hovering'));
        });
    }

    // 5. Render Projects Dynamically
    const portfolioGrid = document.getElementById('portfolio-grid');
    
    function renderProjects() {
        if (!portfolioGrid) return;
        portfolioGrid.innerHTML = ''; // Clear current

        const projects = window.portfolioProjects || [];

        projects.forEach((proj, index) => {
            const delay = (index % 3 + 1) * 0.2;
            const title = currentLang === 'ar' ? proj.titleAr : proj.titleEn;
            const desc = currentLang === 'ar' ? proj.shortDescAr : proj.shortDescEn;
            
            const tagsHtml = proj.tags.map(tag => `<span>${tag}</span>`).join('');

            const card = document.createElement('div');
            card.className = `portfolio-card glass-card fade-in-up`;
            card.style.transitionDelay = `${delay}s`;
            
            card.innerHTML = `
                <div class="portfolio-image">
                    <img src="${proj.image}" alt="${title}">
                </div>
                <div class="portfolio-info">
                    <h3>${title}</h3>
                    <p>${desc}</p>
                    <div class="tags">${tagsHtml}</div>
                    <a href="javascript:void(0)" class="project-link" onclick="openProjectModal('${proj.id}')">
                        <span class="en" style="display: ${currentLang === 'en' ? 'inline' : 'none'}">View Details</span>
                        <span class="ar" style="display: ${currentLang === 'ar' ? 'inline' : 'none'}">عرض التفاصيل</span>
                        <i class="fa-solid fa-arrow-right icon-dir" style="transform: ${currentLang === 'ar' ? 'rotate(180deg)' : 'rotate(0deg)'}"></i>
                    </a>
                </div>
            `;
            portfolioGrid.appendChild(card);
        });

        // Re-observe new elements for animation
        observeElements();

        // Re-bind cursor hover for new cards
        if (!isTouch && follower) {
            const newHoverTargets = portfolioGrid.querySelectorAll('.portfolio-card, .project-link');
            newHoverTargets.forEach(el => {
                el.addEventListener('mouseenter', () => follower.classList.add('hovering'));
                el.addEventListener('mouseleave', () => follower.classList.remove('hovering'));
            });
        }
    }

    // 6. Modal Logic
    const modal = document.getElementById('project-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    
    window.openProjectModal = function(projectId) {
        const projects = window.portfolioProjects || [];
        const proj = projects.find(p => p.id === projectId);
        if (!proj) return;

        document.getElementById('modal-img').src = proj.image;
        document.getElementById('modal-title').textContent = currentLang === 'ar' ? proj.titleAr : proj.titleEn;
        document.getElementById('modal-desc').textContent = currentLang === 'ar' ? proj.fullDescAr : proj.fullDescEn;
        
        document.getElementById('modal-tags').innerHTML = proj.tags.map(tag => `<span>${tag}</span>`).join('');
        
        const githubLink = document.getElementById('modal-github');
        const playStoreLink = document.getElementById('modal-playstore');
        
        if (proj.githubLink && proj.githubLink !== "#") {
            githubLink.href = proj.githubLink;
            githubLink.style.display = 'inline-flex';
        } else {
            githubLink.style.display = 'none';
        }

        if (proj.playStoreLink && proj.playStoreLink !== "#") {
            playStoreLink.href = proj.playStoreLink;
            playStoreLink.style.display = 'inline-flex';
        } else {
            playStoreLink.style.display = 'none';
        }

        modal.classList.add('show');
        document.body.classList.add('no-scroll');
    };

    closeModalBtn.addEventListener('click', closeModal);
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    function closeModal() {
        modal.classList.remove('show');
        document.body.classList.remove('no-scroll');
    }

    // 7. Scroll Animations (Intersection Observer)
    function observeElements() {
        const fadeElements = document.querySelectorAll('.fade-in-up:not(.visible)');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        fadeElements.forEach(el => observer.observe(el));
    }

    // 8. Contact Form AJAX Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = currentLang === 'ar' ? 'جاري الإرسال...' : 'Sending...';
            submitBtn.disabled = true;

            const formData = new FormData(contactForm);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    contactForm.reset();
                    alert(currentLang === 'ar' ? 'تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.' : 'Message sent successfully! I will contact you soon.');
                } else {
                    alert('Error: ' + json.message);
                }
            })
            .catch(error => {
                console.log(error);
                alert('Something went wrong!');
            })
            .finally(() => {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            });
        });
    }

    // Initial render
    renderProjects();
    observeElements();
});
