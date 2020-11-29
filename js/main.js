$(function(){
    $('.header__slider').slick({
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/icons/arrow-left.svg" alt="arrow-left">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/icons/arrow-right.svg" alt="arrow-right">',
        asNavFor: '.slider-dots'
    });
    $('.slider-dots').slick({
        slidesToShow: 4,
        asNavFor: '.header__slider'
    });
});