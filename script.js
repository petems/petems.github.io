// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-menu a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // Add active class styling
    const style = document.createElement('style');
    style.textContent = `
        .nav-menu a.active {
            color: #2563eb !important;
            font-weight: 600;
        }
    `;
    document.head.appendChild(style);

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for animation
    const animatedElements = document.querySelectorAll('.section, .project-card, .timeline-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Mobile menu toggle (if needed in the future)
    function setupMobileMenu() {
        const nav = document.querySelector('.nav-menu');
        const hamburger = document.createElement('button');
        hamburger.className = 'mobile-menu-toggle';
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        hamburger.style.display = 'none';
        
        const navContainer = document.querySelector('.nav-container');
        navContainer.appendChild(hamburger);
        
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('mobile-open');
        });
        
        // Show hamburger on mobile
        if (window.innerWidth <= 768) {
            hamburger.style.display = 'block';
            nav.style.display = 'none';
        }
        
        window.addEventListener('resize', function() {
            if (window.innerWidth <= 768) {
                hamburger.style.display = 'block';
                nav.style.display = 'none';
            } else {
                hamburger.style.display = 'none';
                nav.style.display = 'flex';
                nav.classList.remove('mobile-open');
            }
        });
    }
    
    setupMobileMenu();
});

// Add mobile menu styles
const mobileStyles = document.createElement('style');
mobileStyles.textContent = `
    .mobile-menu-toggle {
        background: none;
        border: none;
        font-size: 1.5rem;
        color: #333;
        cursor: pointer;
        padding: 0.5rem;
    }
    
    @media (max-width: 768px) {
        .nav-menu.mobile-open {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            padding: 1rem;
        }
        
        .nav-menu.mobile-open li {
            margin: 0.5rem 0;
        }
    }
`;
document.head.appendChild(mobileStyles);