$(document).ready(function () {
    $('.navbar__block-menu-burger-link').on('click', function(e) {
        e.preventDefault;
        $(this).toggleClass('navbar__block-menu-burger-link-active');
    });

    $('.services__block_service-wrapper-item-img').equalHeights();
});