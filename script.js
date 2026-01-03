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
    
    let currentCounter = null; // null means not selected
    let currentBacksplash = null; // null means not selected
    let currentCabinet = null; // null means not selected
    let currentSpace = '1'; // just the number, no .jpg
    let galleryMode = true;
    
    // Show all options - no filtering needed
    // All material combinations are available
    
    // All options are always available - no filtering needed
    
    // Get kitchen showcase wrapper element
    const kitchenShowcaseWrapper = document.querySelector('.kitchen-showcase-wrapper');
    
    // Function to hide gallery overlay
    function hideGallery() {
        if (galleryMode) {
            galleryOverlay.classList.add('hidden');
            changeSpaceBtn.classList.remove('hidden');
            // Add space-selected class for mobile height adjustment
            if (kitchenShowcaseWrapper) {
                kitchenShowcaseWrapper.classList.add('space-selected');
            }
            galleryMode = false;
        }
    }
    
    // Function to show gallery overlay
    function showGallery() {
        galleryOverlay.classList.remove('hidden');
        changeSpaceBtn.classList.add('hidden');
        galleryContinueBtn.classList.remove('hidden');
        // Remove space-selected class for mobile height adjustment
        if (kitchenShowcaseWrapper) {
            kitchenShowcaseWrapper.classList.remove('space-selected');
        }
        galleryMode = true;
    }
    
    // Function to build combination filename based on selected materials
    function buildCombinationFilename() {
        let parts = [];
        
        if (currentCounter) parts.push(currentCounter);
        if (currentBacksplash) parts.push(currentBacksplash);
        // Treat 'white' cabinet as no cabinet selection (default state)
        if (currentCabinet && currentCabinet !== 'white') parts.push(currentCabinet);
        
        if (parts.length === 0) {
            return 'default.jpg';
        }
        
        return parts.join('-') + '.jpeg';
    }
    
    // Function to update space showcase
    function updateSpaceImages() {
        let imagePath;
        
        if (galleryMode) {
            // In gallery mode, show default from space-material-variations
            imagePath = `assets/space-material-variations/${currentSpace}/default.jpg`;
        } else {
            // In material mode, show combination from space-material-variations
            const filename = buildCombinationFilename();
            imagePath = `assets/space-material-variations/${currentSpace}/${filename}`;
        }
        
        // Add loading state
        spaceShowcase.classList.add('loading');
        
        // Create a new image to test if it exists
        const testImg = new Image();
        testImg.onload = function() {
            // Image exists, use it
            spaceShowcase.src = imagePath;
            spaceShowcase.classList.remove('loading');
        };
        testImg.onerror = function() {
            // Image doesn't exist, fall back to default
            console.log(`Image not found: ${imagePath}, falling back to default`);
            spaceShowcase.src = `assets/space-material-variations/${currentSpace}/default.jpg`;
            spaceShowcase.classList.remove('loading');
        };
        testImg.src = imagePath;
        
        console.log(`Trying to load: ${imagePath}`);
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
            
            // Update current space (remove .jpg extension)
            currentSpace = this.dataset.kitchen.replace('.jpg', '');
            
            // Show continue button
            galleryContinueBtn.classList.remove('hidden');
            
            // Update images
            updateSpaceImages();
        });
    });
    
    // Counter selection handler with deselection capability
    counterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Hide gallery when material selection starts
            hideGallery();
            
            const selectedCounter = this.dataset.counter;
            
            if (currentCounter === selectedCounter) {
                // Deselect if clicking the same option
                currentCounter = null;
                this.classList.remove('active');
            } else {
                // Select new option
                counterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                currentCounter = selectedCounter;
            }
            
            // Update images
            updateSpaceImages();
        });
    });
    
    // Initialize showcase on page load
    updateSpaceImages();
    
    // Backsplash selection handler with deselection capability
    backsplashButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Hide gallery when material selection starts
            hideGallery();
            
            const selectedBacksplash = this.dataset.backsplash;
            
            if (currentBacksplash === selectedBacksplash) {
                // Deselect if clicking the same option
                currentBacksplash = null;
                this.classList.remove('active');
            } else {
                // Select new option
                backsplashButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                currentBacksplash = selectedBacksplash;
            }
            
            // Update images
            updateSpaceImages();
        });
    });
    
    // Cabinet selection handler with deselection capability
    cabinetButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Hide gallery when material selection starts
            hideGallery();
            
            const selectedCabinet = this.dataset.cabinet;
            
            if (currentCabinet === selectedCabinet) {
                // Deselect if clicking the same option
                currentCabinet = null;
                this.classList.remove('active');
            } else {
                // Select new option
                cabinetButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                currentCabinet = selectedCabinet;
            }
            
            // Update images
            updateSpaceImages();
        });
    });

    console.log('Space Visualizer landing page loaded successfully!');
});
