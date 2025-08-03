// ===== THEME MANAGEMENT =====
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.themeToggle = document.getElementById('themeToggle');
        this.themeIcon = document.getElementById('themeIcon');
        this.init();
    }

    init() {
        this.setTheme(this.theme);
        this.themeToggle?.addEventListener('click', () => this.toggleTheme());
    }

    setTheme(theme) {
        this.theme = theme;
        document.body.className = `${theme}-theme`;
        localStorage.setItem('theme', theme);
        this.updateThemeIcon();
    }

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    updateThemeIcon() {
        if (this.themeIcon) {
            this.themeIcon.className = this.theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }
    }
}

// ===== LOADING ANIMATION =====
class LoadingManager {
    constructor() {
        this.loader = document.querySelector('.page-loader');
        this.init();
    }

    init() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.hideLoader();
            }, 1000);
        });
    }

    hideLoader() {
        if (this.loader) {
            this.loader.classList.add('hidden');
            setTimeout(() => {
                this.loader.style.display = 'none';
            }, 500);
        }
    }
}

// ===== NAVIGATION MANAGER =====
class NavigationManager {
    constructor() {
        this.nav = document.querySelector('.modern-nav');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.navToggle = document.querySelector('.nav-toggle');
        this.navLinksContainer = document.querySelector('.nav-links');
        this.init();
    }

    init() {
        this.handleScroll();
        this.handleNavigation();
        this.handleMobileMenu();
        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        const scrolled = window.scrollY > 100;
        if (this.nav) {
            this.nav.style.background = scrolled 
                ? 'var(--bg-overlay)' 
                : 'transparent';
            this.nav.style.backdropFilter = scrolled ? 'blur(20px)' : 'none';
            this.nav.style.borderBottom = scrolled 
                ? '1px solid var(--border-color)' 
                : '1px solid transparent';
        }
    }

    handleNavigation() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Remove active class from all links
                    this.navLinks.forEach(l => l.classList.remove('active'));
                    // Add active class to clicked link
                    link.classList.add('active');
                    
                    // Smooth scroll to target
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Update active link on scroll
        window.addEventListener('scroll', () => this.updateActiveLink());
    }

    updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`.nav-link[href="#${id}"]`);

            if (scrollPos >= top && scrollPos < top + height) {
                this.navLinks.forEach(l => l.classList.remove('active'));
                link?.classList.add('active');
            }
        });
    }

    handleMobileMenu() {
        if (this.navToggle) {
            this.navToggle.addEventListener('click', () => {
                this.navLinksContainer?.classList.toggle('active');
                this.navToggle.classList.toggle('active');
            });
        }
    }
}

// ===== SCROLL ANIMATIONS =====
class ScrollAnimationManager {
    constructor() {
        this.animatedElements = document.querySelectorAll('[data-aos]');
        this.init();
    }

    init() {
        this.observeElements();
        this.createScrollToTop();
    }

    observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        this.animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    createScrollToTop() {
        const scrollToTopBtn = document.createElement('button');
        scrollToTopBtn.className = 'scroll-to-top';
        scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
        document.body.appendChild(scrollToTopBtn);

        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        // Scroll to top when clicked
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ===== SKILLS PROGRESS ANIMATION =====
class SkillsAnimationManager {
    constructor() {
        this.progressBars = document.querySelectorAll('.progress-bar');
        this.init();
    }

    init() {
        this.observeProgressBars();
    }

    observeProgressBars() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const progress = progressBar.getAttribute('data-progress');
                    
                    setTimeout(() => {
                        progressBar.style.width = `${progress}%`;
                    }, 300);
                    
                    observer.unobserve(progressBar);
                }
            });
        }, {
            threshold: 0.5
        });

        this.progressBars.forEach(bar => {
            observer.observe(bar);
        });
    }
}

// ===== TYPING EFFECT =====
class TypingEffect {
    constructor(element, texts, speed = 100, deleteSpeed = 50, pauseTime = 2000) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.deleteSpeed = deleteSpeed;
        this.pauseTime = pauseTime;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.init();
    }

    init() {
        if (this.element && this.texts.length > 0) {
            this.type();
        }
    }

    type() {
        const currentText = this.texts[this.textIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        let typeSpeed = this.isDeleting ? this.deleteSpeed : this.speed;

        if (!this.isDeleting && this.charIndex === currentText.length) {
            typeSpeed = this.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// ===== FORM HANDLER =====
class FormHandler {
    constructor() {
        this.contactForm = document.querySelector('.contact-form');
        this.init();
    }

    init() {
        if (this.contactForm) {
            this.contactForm.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.contactForm);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitBtn = this.contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang gửi...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            this.showNotification('Tin nhắn đã được gửi thành công! Tôi sẽ phản hồi sớm.', 'success');
            this.contactForm.reset();
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        
        // Add notification styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? 'var(--success-color)' : 'var(--primary-color)'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease-in-out;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }
}

// ===== PARALLAX EFFECT =====
class ParallaxManager {
    constructor() {
        this.parallaxElements = document.querySelectorAll('.gradient-orb');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.handleParallax());
    }

    handleParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        this.parallaxElements.forEach((element, index) => {
            const speed = (index + 1) * 0.3;
            element.style.transform = `translateY(${rate * speed}px)`;
        });
    }
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
class IntersectionManager {
    constructor() {
        this.observedElements = document.querySelectorAll('.about-card, .skill-card, .project-card, .timeline-item');
        this.init();
    }

    init() {
        this.createObserver();
    }

    createObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        this.observedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(element);
        });
    }
}

// ===== SMOOTH SCROLL POLYFILL =====
class SmoothScrollPolyfill {
    constructor() {
        this.init();
    }

    init() {
        // Add smooth scrolling behavior for older browsers
        if (!('scrollBehavior' in document.documentElement.style)) {
            this.polyfillSmoothScroll();
        }
    }

    polyfillSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    this.smoothScrollTo(targetElement.offsetTop, 800);
                }
            });
        });
    }

    smoothScrollTo(targetPosition, duration) {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = this.easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        requestAnimationFrame(animation);
    }

    easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
}

// ===== PERFORMANCE OPTIMIZATION =====
class PerformanceManager {
    constructor() {
        this.init();
    }

    init() {
        this.lazyLoadImages();
        this.optimizeScrollEvents();
    }

    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            images.forEach(img => {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
            });
        }
    }

    optimizeScrollEvents() {
        let ticking = false;
        
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    // Scroll event handlers will be called here
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
    }
}

// ===== ACCESSIBILITY MANAGER =====
class AccessibilityManager {
    constructor() {
        this.init();
    }

    init() {
        this.handleKeyboardNavigation();
        this.addAriaLabels();
        this.handleFocusManagement();
    }

    handleKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Handle ESC key to close modals/menus
            if (e.key === 'Escape') {
                const activeMenu = document.querySelector('.nav-links.active');
                if (activeMenu) {
                    activeMenu.classList.remove('active');
                }
            }
            
            // Handle Enter key on custom buttons
            if (e.key === 'Enter' && e.target.classList.contains('theme-toggle')) {
                e.target.click();
            }
        });
    }

    addAriaLabels() {
        // Add ARIA labels to interactive elements
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.setAttribute('aria-label', 'Toggle dark/light theme');
        }

        const navToggle = document.querySelector('.nav-toggle');
        if (navToggle) {
            navToggle.setAttribute('aria-label', 'Toggle navigation menu');
        }
    }

    handleFocusManagement() {
        // Ensure focus is visible for keyboard users
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }
}

// ===== MAIN APPLICATION =====
class CVWebsite {
    constructor() {
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
        } else {
            this.initializeComponents();
        }
    }

    initializeComponents() {
        // Initialize all managers
        this.themeManager = new ThemeManager();
        this.loadingManager = new LoadingManager();
        this.navigationManager = new NavigationManager();
        this.scrollAnimationManager = new ScrollAnimationManager();
        this.skillsAnimationManager = new SkillsAnimationManager();
        this.formHandler = new FormHandler();
        this.parallaxManager = new ParallaxManager();
        this.intersectionManager = new IntersectionManager();
        this.smoothScrollPolyfill = new SmoothScrollPolyfill();
        this.performanceManager = new PerformanceManager();
        this.accessibilityManager = new AccessibilityManager();

        // Initialize typing effect for subtitle if element exists
        const subtitleElement = document.querySelector('.title-subtitle');
        if (subtitleElement) {
            new TypingEffect(subtitleElement, [
                'Software Engineer',
                'Full Stack Developer',
                'Problem Solver',
                'Tech Enthusiast'
            ]);
        }

        // Add custom styles for better UX
        this.addCustomStyles();
        
        // Initialize Easter eggs
        this.initializeEasterEggs();
    }

    addCustomStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .keyboard-navigation *:focus {
                outline: 2px solid var(--primary-color) !important;
                outline-offset: 2px !important;
            }
            
            .notification {
                font-family: var(--font-primary);
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            @media (prefers-reduced-motion: reduce) {
                .gradient-orb {
                    animation: none !important;
                }
                
                .floating-card {
                    animation: none !important;
                }
            }
        `;
        document.head.appendChild(style);
    }

    initializeEasterEggs() {
        // Konami Code Easter Egg
        let konamiCode = [];
        const konamiSequence = [
            'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
            'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
            'KeyB', 'KeyA'
        ];

        document.addEventListener('keydown', (e) => {
            konamiCode.push(e.code);
            if (konamiCode.length > konamiSequence.length) {
                konamiCode.shift();
            }
            
            if (konamiCode.join(',') === konamiSequence.join(',')) {
                this.activateEasterEgg();
                konamiCode = [];
            }
        });
    }

    activateEasterEgg() {
        // Add rainbow effect to the page
        const style = document.createElement('style');
        style.id = 'easter-egg-style';
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
            
            .easter-egg-active {
                animation: rainbow 2s linear infinite;
            }
        `;
        document.head.appendChild(style);
        
        document.body.classList.add('easter-egg-active');
        
        // Show notification
        const notification = document.createElement('div');
        notification.innerHTML = '🎉 Chúc mừng! Bạn đã tìm thấy Easter Egg! 🎉';
        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57);
            color: white;
            padding: 2rem;
            border-radius: 1rem;
            font-size: 1.5rem;
            font-weight: bold;
            text-align: center;
            z-index: 10000;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            animation: rainbow 2s linear infinite;
        `;
        
        document.body.appendChild(notification);
        
        // Remove after 5 seconds
        setTimeout(() => {
            document.body.classList.remove('easter-egg-active');
            document.body.removeChild(notification);
            document.head.removeChild(style);
        }, 5000);
    }
}

// ===== INITIALIZE APPLICATION =====
const cvWebsite = new CVWebsite();

// ===== GLOBAL ERROR HANDLER =====
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
    // You can add error reporting here
});

// ===== PERFORMANCE MONITORING =====
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.timing;
            const loadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page loaded in ${loadTime}ms`);
        }, 0);
    });
}

// ===== SERVICE WORKER REGISTRATION (Optional) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment the following lines if you want to add PWA functionality
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}