// jQuery script for MusicFest website interactions
$(document).ready(function() {
    // Hamburger menu toggle functionality
    $('.hamburger').click(function() {
        $('.nav__list').toggleClass('active');
    });
    
    // Close menu when clicking on a link (mobile)
    $('.nav__link').click(function() {
        if ($(window).width() <= 768) {
            $('.nav__list').removeClass('active');
        }
    });
    
    // Close menu when clicking outside (mobile)
    $(document).click(function(event) {
        if (!$(event.target).closest('.nav').length && $(window).width() <= 768) {
            $('.nav__list').removeClass('active');
        }
    });
    
    // Newsletter form submission
    $('.newsletter-form').submit(function(e) {
        e.preventDefault();
        const email = $(this).find('.newsletter-input').val();
        
        // Simple validation
        if (email && isValidEmail(email)) {
            // In a real application, you would send this to a server
            alert('Thank you for subscribing to our newsletter!');
            $(this).find('.newsletter-input').val('');
        } else {
            alert('Please enter a valid email address.');
        }
    });
    
    // Helper function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Add smooth scrolling to anchor links
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        
        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top - 70,
            },
            500,
            'linear'
        );
    });
});