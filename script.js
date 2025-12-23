// Kitchen Visualizer Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
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

    // Apply fade-in animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });


    // Button hover effects
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Counter animation for trust indicators
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString();
            }
        }
        updateCounter();
    }

    // Trigger counter animation when trust section is visible
    const trustSection = document.querySelector('.trust-section');
    if (trustSection) {
        const trustObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const userCount = document.querySelector('[data-counter="users"]');
                    const reviewCount = document.querySelector('[data-counter="reviews"]');
                    
                    if (userCount) animateCounter(userCount, 50000);
                    if (reviewCount) animateCounter(reviewCount, 2847);
                    
                    trustObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        trustObserver.observe(trustSection);
    }

    // Form validation (if forms are added later)
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Add ripple effect to buttons
    function createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add('ripple');
        
        const ripple = button.getElementsByClassName('ripple')[0];
        if (ripple) {
            ripple.remove();
        }
        
        button.appendChild(circle);
    }

    // Apply ripple effect to primary buttons
    const primaryButtons = document.querySelectorAll('.btn-primary, .final-cta-btn');
    primaryButtons.forEach(button => {
        button.addEventListener('click', createRipple);
    });

    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 600ms linear;
            background-color: rgba(255, 255, 255, 0.3);
            pointer-events: none;
        }
        
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        button {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);

    // Lazy loading for images (when added)
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver(function(entries) {
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

    // Performance: Preload critical resources
    function preloadResource(href, as) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = as;
        document.head.appendChild(link);
    }

    // Preload fonts for better performance
    preloadResource('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', 'style');

    // Add loading states for buttons
    function addLoadingState(button) {
        const originalText = button.textContent;
        button.textContent = 'Loading...';
        button.disabled = true;
        button.style.opacity = '0.7';
        
        // Simulate loading (replace with actual functionality)
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            button.style.opacity = '1';
        }, 2000);
    }

    // Example: Add loading to main CTA buttons
    document.addEventListener('click', function(e) {
        if (e.target.matches('.btn-primary') || e.target.matches('.final-cta-btn')) {
            // Add your actual navigation/modal logic here
            console.log('CTA clicked:', e.target.textContent);
            // addLoadingState(e.target); // Uncomment to test loading state
        }
    });

    // Kitchen Visualizer Functionality
    const kitchenImage1 = document.getElementById('kitchen-image-1');
    const kitchenImage2 = document.getElementById('kitchen-image-2');
    const counterButtons = document.querySelectorAll('[data-counter]');
    const backsplashButtons = document.querySelectorAll('[data-backsplash]');
    
    let currentCounter = 'african';
    let currentBacksplash = 'zermat';
    
    // Available combinations (what images we have)
    const availableCombinations = {
        'african': ['calacatta', 'zermat'],
        'agatha': ['alaska', 'nero', 'zermat']
    };
    
    // Function to update available backsplash options
    function updateAvailableBacksplash() {
        const availableForCounter = availableCombinations[currentCounter] || [];
        
        backsplashButtons.forEach(button => {
            const backsplashType = button.dataset.backsplash;
            
            if (availableForCounter.includes(backsplashType)) {
                button.style.display = 'flex';
                button.disabled = false;
            } else {
                button.style.display = 'none';
                button.disabled = true;
            }
        });
        
        // If current backsplash is not available, select first available one
        if (!availableForCounter.includes(currentBacksplash)) {
            currentBacksplash = availableForCounter[0] || 'zermat';
            
            // Update active state
            backsplashButtons.forEach(btn => {
                if (btn.dataset.backsplash === currentBacksplash) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }
    }
    
    // Function to update kitchen images
    function updateKitchenImages() {
        const imagePath1 = `assets/kitchen-visual/${currentCounter}-${currentBacksplash}-1.png`;
        const imagePath2 = `assets/kitchen-visual/${currentCounter}-${currentBacksplash}-2.png`;
        
        // Add loading state
        kitchenImage1.classList.add('loading');
        kitchenImage2.classList.add('loading');
        
        // Update images
        kitchenImage1.src = imagePath1;
        kitchenImage2.src = imagePath2;
        
        // Remove loading state when images load
        kitchenImage1.onload = () => kitchenImage1.classList.remove('loading');
        kitchenImage2.onload = () => kitchenImage2.classList.remove('loading');
        
        console.log(`Kitchen updated: ${currentCounter} + ${currentBacksplash}`);
    }
    
    // Counter selection handler
    counterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all counter buttons
            counterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update current counter
            currentCounter = this.dataset.counter;
            
            // Update available backsplash options
            updateAvailableBacksplash();
            
            // Update images
            updateKitchenImages();
        });
    });
    
    // Initialize available backsplash options on page load
    updateAvailableBacksplash();
    
    // Backsplash selection handler
    backsplashButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all backsplash buttons
            backsplashButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update current backsplash
            currentBacksplash = this.dataset.backsplash;
            
            // Update images
            updateKitchenImages();
        });
    });

    console.log('Kitchen Visualizer landing page loaded successfully!');
});
