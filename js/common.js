$(document).ready(function () {
    $('.navbar__block-menu-burger-link').on('click', function(e) {
        e.preventDefault;
        $(this).toggleClass('navbar__block-menu-burger-link-active');
    });
});