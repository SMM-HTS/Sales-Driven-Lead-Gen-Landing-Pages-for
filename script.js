
        document.addEventListener('DOMContentLoaded', function() {
            const header = document.getElementById('header');
            const backToTop = document.querySelector('.back-to-top');
            const featureCards = document.querySelectorAll('.feature-card');
            const productImage = document.querySelector('.product-image');
            const productDetails = document.querySelector('.product-details');
            const contactInfo = document.querySelector('.contact-info');
            const contactForm = document.querySelector('.contact-form');
            const benefitItems = document.querySelectorAll('.benefit-item');
            const testimonials = document.querySelectorAll('.testimonial');
            const dots = document.querySelectorAll('.slider-dot');
            let currentTestimonial = 0;
            let testimonialInterval;
            
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
                
                if (window.scrollY > 300) {
                    backToTop.classList.add('visible');
                } else {
                    backToTop.classList.remove('visible');
                }
                
                animateOnScroll();
            });
            
            backToTop.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            function animateOnScroll() {
                const scrollPosition = window.scrollY + window.innerHeight;
                
                featureCards.forEach((card, index) => {
                    const cardPosition = card.offsetTop;
                    if (scrollPosition > cardPosition + 100) {
                        setTimeout(() => {
                            card.classList.add('animated');
                        }, index * 200);
                    }
                });
                
                if (scrollPosition > productImage.offsetTop + 100) {
                    productImage.classList.add('animated');
                    productDetails.classList.add('animated');
                }
                
                if (scrollPosition > contactInfo.offsetTop + 100) {
                    contactInfo.classList.add('animated');
                    contactForm.classList.add('animated');
                }
                
                benefitItems.forEach((item, index) => {
                    const itemPosition = item.offsetTop;
                    if (scrollPosition > itemPosition + 100) {
                        setTimeout(() => {
                            item.classList.add('animated');
                        }, index * 100);
                    }
                });
            }
            
            function showTestimonial(index) {
                testimonials.forEach(testimonial => {
                    testimonial.classList.remove('active');
                });
                dots.forEach(dot => {
                    dot.classList.remove('active');
                });
                
                testimonials[index].classList.add('active');
                dots[index].classList.add('active');
                currentTestimonial = index;
            }
            
            function nextTestimonial() {
                let nextIndex = currentTestimonial + 1;
                if (nextIndex >= testimonials.length) {
                    nextIndex = 0;
                }
                showTestimonial(nextIndex);
            }
            
            dots.forEach(dot => {
                dot.addEventListener('click', function() {
                    const slideIndex = parseInt(this.getAttribute('data-slide'));
                    showTestimonial(slideIndex);
                    resetTestimonialInterval();
                });
            });
            
            function startTestimonialInterval() {
                testimonialInterval = setInterval(nextTestimonial, 5000);
            }
            
            function resetTestimonialInterval() {
                clearInterval(testimonialInterval);
                startTestimonialInterval();
            }
            
            startTestimonialInterval();
            
            document.getElementById('leadForm').addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const phone = document.getElementById('phone').value;
                const address = document.getElementById('address').value;
                const interest = document.getElementById('interest').value;
                const message = document.getElementById('message').value;
                
                alert(`Thank you, ${name}! We've received your information and will contact you shortly.`);
                this.reset();
            });
            
            animateOnScroll();
        });