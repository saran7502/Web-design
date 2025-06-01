

        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            const toggle = document.querySelector('.mobile-menu-toggle');
            
            mobileMenu.classList.toggle('active');
            
            // Change hamburger to X when open
            if (mobileMenu.classList.contains('active')) {
                toggle.innerHTML = '✕';
            } else {
                toggle.innerHTML = '☰';
            }
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const mobileMenu = document.getElementById('mobileMenu');
            const toggle = document.querySelector('.mobile-menu-toggle');
            const header = document.querySelector('.header');
            
            if (!header.contains(event.target) && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                toggle.innerHTML = '☰';
            }
        });

        // Handle window resize
        window.addEventListener('resize', function() {
            const mobileMenu = document.getElementById('mobileMenu');
            const toggle = document.querySelector('.mobile-menu-toggle');
            
            if (window.innerWidth > 768) {
                mobileMenu.classList.remove('active');
                toggle.innerHTML = '☰';
            }
        });




        const carousel = document.getElementById("carousel");

        function scrollCarousel(direction) {
          const scrollAmount = 320;
          carousel.scrollBy({
            left: direction * scrollAmount,
            behavior: "smooth",
        });
        }











        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');

        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Change hamburger to X when opened
            if (navMenu.classList.contains('active')) {
                menuToggle.innerHTML = '✕';
            } else {
                menuToggle.innerHTML = '☰';
            }
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuToggle.innerHTML = '☰';
            });
        });

        // Email validation and form handling
        const emailInput = document.getElementById('emailInput');
        const bookCallBtn = document.getElementById('bookCallBtn');
        const connectBtn = document.getElementById('connectBtn');

        // Email validation function
        function validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        // Book a call functionality
        bookCallBtn.addEventListener('click', function() {
            const email = emailInput.value.trim();
            
            if (!email) {
                alert('Please enter your email address');
                emailInput.focus();
                return;
            }
            
            if (!validateEmail(email)) {
                alert('Please enter a valid email address');
                emailInput.focus();
                return;
            }
            
            // Here you would typically send the email to your backend
            console.log('Booking call for:', email);
            alert('Thank you! We\'ll contact you soon to schedule a call.');
            emailInput.value = '';
        });

        // Connect button functionality
        connectBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Replace with your actual LinkedIn profile URL
            window.open('https://linkedin.com/company/your-company', '_blank');
        });

        // Enter key handling for email input
        emailInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                bookCallBtn.click();
            }
        });

        // Smooth scrolling for navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                
                if (targetId.startsWith('#')) {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });

        // Add input focus effects
        emailInput.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });

        emailInput.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                menuToggle.innerHTML = '☰';
            }
        });

        // Add loading state to buttons
        function addLoadingState(button, originalText) {
            button.innerHTML = 'Loading...';
            button.disabled = true;
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.disabled = false;
            }, 2000);
        }

        // Enhanced button interactions
        bookCallBtn.addEventListener('click', function() {
            const email = emailInput.value.trim();
            if (email && validateEmail(email)) {
                addLoadingState(this, 'BOOK A CALL');
            }
        });





        document.querySelector('.privacy-link').addEventListener('click', function(e) {
            e.preventDefault();
            
            // You can replace this with actual privacy policy functionality
            alert('Privacy Policy clicked! Replace this with your actual privacy policy page.');
            
            // Example: Redirect to privacy policy page
            // window.location.href = '/privacy-policy';
        });

        // Add smooth scroll to top when clicking copyright
        document.querySelector('.copyright-text').addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Add keyboard navigation support
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                // Ensure privacy link is properly focusable
                const privacyLink = document.querySelector('.privacy-link');
                if (document.activeElement === privacyLink) {
                    privacyLink.style.outline = '2px solid rgba(255,255,255,0.8)';
                    privacyLink.style.outlineOffset = '2px';
                }
            }
        });

        // Remove outline when not focused
        document.querySelector('.privacy-link').addEventListener('blur', function() {
            this.style.outline = 'none';
        });

        // Add year update functionality
        function updateYear() {
            const currentYear = new Date().getFullYear();
            const yearElement = document.querySelector('.copyright-text span:last-child');
            yearElement.textContent = yearElement.textContent.replace('2024', currentYear);
        }

        // Update year on page load
        updateYear();