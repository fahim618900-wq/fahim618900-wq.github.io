// Current Date and Time
function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    // Time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    const timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    
    // Date in Bengali format
    const dateString = now.toLocaleDateString('bn-BD', options);
    
    document.getElementById('currentTime').textContent = timeString;
    document.getElementById('currentDate').textContent = dateString;
}

// Update every second
setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call

// Pause notice marquee on hover
const noticeMarquee = document.querySelector('.notice-content');
if (noticeMarquee) {
    noticeMarquee.addEventListener('mouseenter', function() {
        this.style.animationPlayState = 'paused';
    });
    
    noticeMarquee.addEventListener('mouseleave', function() {
        this.style.animationPlayState = 'running';
    });
}

// Form submission for contact page
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('আপনার বার্তা সফলভাবে পাঠানো হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।');
        this.reset();
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Only handle internal page anchors (not links to other pages)
        if (href.startsWith('#') && href !== '#') {
            e.preventDefault();
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                const offset = 100; // Adjust based on your fixed header height
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Initialize Bootstrap tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Carousel auto slide
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('mainSlider');
    if (carousel) {
        const carouselInstance = new bootstrap.Carousel(carousel, {
            interval: 3000,
            wrap: true
        });
    }
});

// Active navigation highlighting
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        if (currentPage === 'index.html' || currentPage === '') {
            if (linkHref === 'index.html' || linkHref === './') {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        } else if (linkHref === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
