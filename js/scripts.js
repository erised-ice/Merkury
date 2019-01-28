$(document).ready(function() {
  $('.js-slider').slick({
    dots: true
  });

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

  function pressButton() {
    var form = $('.js-popup-form');
    var submitedForm = function(event) {
      event.preventDefault();
      
      closePopup();
      displayAlertSuccess();
    };

    form.on('submit', submitedForm);
  }

  function displayAlertSuccess() {
    var alert = $('.js-alert');
    var toggleVisibleAlert = function(isVisible) {
      alert.toggle(isVisible);
    };

    toggleVisibleAlert(true);

    setTimeout(function() {
      toggleVisibleAlert(false);
    }, 3000);
  }

  pressButton();
});


