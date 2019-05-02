$(document).ready(function () {
    // Burger Button Animation
    $('.navbar__block-menu-burger-link').on('click', function(e) {
        e.preventDefault;
        $(this).toggleClass('navbar__block-menu-burger-link-active');
    });

    // EqualHeights
    $('.services__block_service-wrapper-item-img').equalHeights();


    //OwlCarousel
    $('.comment__block-wrapper-slider').slick({
        adaptiveHeight: true,
        centerMode: true,
        dots: true,
        fade: true,
        responsive: [
            {
            breakpoint: 830,
            settings: {
                dots: false
            }
        }
    ]
    });
});