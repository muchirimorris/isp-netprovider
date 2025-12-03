// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn) {
    const icon = mobileMenuBtn.querySelector('i');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        if (mobileMenu.classList.contains('hidden')) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        }
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
        navbar.classList.remove('bg-white/90');
        navbar.classList.add('bg-white/95');
    } else {
        navbar.classList.remove('shadow-lg');
        navbar.classList.remove('bg-white/95');
        navbar.classList.add('bg-white/90');
    }
});

// Form submission handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        
        // In a real application, you would send this to a server
        // For now, show a success message
        alert(`Thank you ${name}! We have received your message and will contact you shortly.`);
        
        // Reset form
        this.reset();
    });
}

// Coverage map interaction (for coverage.html)
const coverageAreas = document.querySelectorAll('.coverage-area');
if (coverageAreas.length > 0) {
    coverageAreas.forEach(area => {
        area.addEventListener('mouseover', function() {
            const areaName = this.getAttribute('data-area');
            const tooltip = document.getElementById('area-tooltip');
            if (tooltip) {
                tooltip.textContent = areaName;
                tooltip.classList.remove('hidden');
            }
        });
        
        area.addEventListener('mouseout', function() {
            const tooltip = document.getElementById('area-tooltip');
            if (tooltip) {
                tooltip.classList.add('hidden');
            }
        });
        
        area.addEventListener('click', function() {
            const areaName = this.getAttribute('data-area');
            window.location.href = `contact.html?area=${encodeURIComponent(areaName)}`;
        });
    });
}

// Package selection (for services.html)
const packageButtons = document.querySelectorAll('.package-select');
if (packageButtons.length > 0) {
    packageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const packageName = this.getAttribute('data-package');
            const packageSpeed = this.getAttribute('data-speed');
            
            // Store selection in sessionStorage
            sessionStorage.setItem('selectedPackage', packageName);
            sessionStorage.setItem('selectedSpeed', packageSpeed);
            
            // Redirect to contact page
            window.location.href = 'contact.html';
        });
    });
}

// Initialize tooltips
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(el => {
        el.addEventListener('mouseover', function() {
            const tooltipText = this.getAttribute('data-tooltip');
            const tooltip = document.createElement('div');
            tooltip.className = 'absolute z-50 px-3 py-2 text-sm text-white bg-slate-900 rounded-lg shadow-lg';
            tooltip.textContent = tooltipText;
            tooltip.style.top = `${this.offsetTop - 40}px`;
            tooltip.style.left = `${this.offsetLeft}px`;
            tooltip.id = 'dynamic-tooltip';
            document.body.appendChild(tooltip);
        });
        
        el.addEventListener('mouseout', function() {
            const tooltip = document.getElementById('dynamic-tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initTooltips();
    
    // Add fade-in animation to elements
    const animatedElements = document.querySelectorAll('.service-card, .package-card, .team-member');
    animatedElements.forEach((el, index) => {
        el.classList.add('opacity-0');
        setTimeout(() => {
            el.classList.remove('opacity-0');
            el.classList.add('fade-in');
        }, index * 100);
    });
});