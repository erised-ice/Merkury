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

  function displayAlertSuccessSubmit() {
    var href = window.location.href;
    var hasSubmitHref = href.includes('submit');

    if (hasSubmitHref) {
      var alert = $('.js-alert');
      var toggleVisibleAlert = function(isVisible) {
        alert.toggle(isVisible);
      };
      var timeDisplayAlert = 3000;

      toggleVisibleAlert(true);

      setTimeout(function() {
        toggleVisibleAlert(false);
      }, timeDisplayAlert);
    }
  }

  popup();
  displayAlertSuccessSubmit();
});


