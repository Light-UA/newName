$(function () {

  $(".design__slider").slick({
    dots: false,
    slidesToShow: 4,
    variableWidth: true,
    autoplay: true,
    prevArrow: '<img class="arrow arrow-left"src="../AVTR/images/arrow-left.svg" alt="">',
    nextArrow:'<img class="arrow arrow-right"src="../AVTR/images/arrow-right.svg" alt="">',
    responsive: [
      {
        breakpoint: 361,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
          arrows: false,
          
        }
      }
    ]
  });
});
