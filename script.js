// Space Visualizer Landing Page JavaScript

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

    // Space Visualizer Functionality
    const spaceShowcase = document.getElementById('space-showcase');
    const galleryOverlay = document.getElementById('gallery-overlay');
    const changeSpaceBtn = document.getElementById('change-space-btn');
    const galleryContinueBtn = document.getElementById('gallery-continue-btn');
    const galleryButtons = document.querySelectorAll('[data-kitchen]');
    const counterButtons = document.querySelectorAll('[data-counter]');
    const backsplashButtons = document.querySelectorAll('[data-backsplash]');
    const cabinetButtons = document.querySelectorAll('[data-cabinet]');
    
    let currentCounter = 'african-rainbow';
    let currentBacksplash = 'alaska-gray';
    let currentCabinet = 'beige';
    let currentSpace = '1.jpg';
    let galleryMode = true;
    
    // Show all options - no filtering needed
    // All material combinations are available
    
    // All options are always available - no filtering needed
    
    // Function to hide gallery overlay
    function hideGallery() {
        if (galleryMode) {
            galleryOverlay.classList.add('hidden');
            changeSpaceBtn.classList.remove('hidden');
            galleryMode = false;
        }
    }
    
    // Function to show gallery overlay
    function showGallery() {
        galleryOverlay.classList.remove('hidden');
        changeSpaceBtn.classList.add('hidden');
        galleryContinueBtn.classList.remove('hidden');
        galleryMode = true;
    }
    
    // Function to update space showcase
    function updateSpaceImages() {
        let imagePath;
        
        if (galleryMode) {
            // In gallery mode, show selected space
            imagePath = `assets/kitchen-showcase/${currentSpace}`;
        } else {
            // In material mode, show the currently selected space
            imagePath = `assets/kitchen-showcase/${currentSpace}`;
        }
        
        // Add loading state
        spaceShowcase.classList.add('loading');
        
        // Update image
        spaceShowcase.src = imagePath;
        
        // Remove loading state when image loads
        spaceShowcase.onload = () => spaceShowcase.classList.remove('loading');
        
        console.log(`Space updated: ${galleryMode ? 'Gallery' : 'Material'} mode -> ${imagePath}`);
    }
    
    // Change Space button handler
    changeSpaceBtn.addEventListener('click', function() {
        showGallery();
    });
    
    // Gallery continue button handler
    galleryContinueBtn.addEventListener('click', function() {
        hideGallery();
    });
    
    // Gallery selection handler
    galleryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all gallery buttons
            galleryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update current space
            currentSpace = this.dataset.kitchen;
            
            // Show continue button
            galleryContinueBtn.classList.remove('hidden');
            
            // Update images
            updateSpaceImages();
        });
    });
    
    // Counter selection handler
    counterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Hide gallery when material selection starts
            hideGallery();
            
            // Remove active class from all counter buttons
            counterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update current counter
            currentCounter = this.dataset.counter;
            
            // Update images
            updateSpaceImages();
        });
    });
    
    // Initialize showcase on page load
    updateSpaceImages();
    
    // Backsplash selection handler
    backsplashButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Hide gallery when material selection starts
            hideGallery();
            
            // Remove active class from all backsplash buttons
            backsplashButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update current backsplash
            currentBacksplash = this.dataset.backsplash;
            
            // Update images
            updateSpaceImages();
        });
    });
    
    // Cabinet selection handler
    cabinetButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Hide gallery when material selection starts
            hideGallery();
            
            // Remove active class from all cabinet buttons
            cabinetButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update current cabinet
            currentCabinet = this.dataset.cabinet;
            
            // Update images
            updateSpaceImages();
        });
    });

    console.log('Space Visualizer landing page loaded successfully!');
});
