$(document).ready(function() {
  $('.js-slider').slick({
    dots: true
  });

  function popup() {
    var openPopupButtonCollection = $('.js-open-popup');
    var closePopupCollection = $('.js-close-popup');
    var popup = $('.js-popup');
    var openPopup = function() {
      popup.addClass('popup--show');
    };
    var closePopup = function() {
      popup.removeClass('popup--show');
    };

    openPopupButtonCollection.on('click', openPopup);
    closePopupCollection.on('click', closePopup);

    $(document).on('keydown', function (event) {
      if (event.keyCode == 27) {
        closePopup()
      }
    });
  }

  popup();
});


