$(function () {
    $('.main-items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev main-slide-btn"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" transform="rotate(-180 20 20)" fill="#F8EDDF"/><path d="M20 12L12 20M12 20L20 28M12 20L28 20" stroke="#EC5A33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next main-slide-btn"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#F8EDDF"/><path d="M20 28L28 20M28 20L20 12M28 20L12 20" stroke="#EC5A33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        responsive: [{
                breakpoint: 478,
                settings: {
                    arrows: false
                }
            },

        ]
    });

})