window.setupHome = function(){
  $('.carousel-control').on('click', function(){
    var projectRow = $('#project-row')
    var control = $(this)
    if (control.data('slide') == 'next'){
      projectRow.animate( { scrollLeft: '+=460' }, 500);
    }else{
      projectRow.animate( { scrollLeft: '-=460' }, 500);
    }
  });

  $('.cover-item img').on('click', function(){
    $('.project-detail').fadeOut();
    var _this = $(this)
    $('.cover-item img').css('border', 'none')
    _this.css("border", "10px solid black")
    checkIfInView(_this)
    $('.arrow-down').remove()
    _this.after("<div class='arrow-down'></div>")
    var detail = "#" + _this.data('project-name') + "-detail"
    $(detail).fadeIn();
  });

  function checkIfInView(element){
    var elementLeftOffset = element.offset().left
    var elementRightOffset = elementLeftOffset + element.width()

    if(elementLeftOffset < 0){
      $('#project-row').animate({scrollLeft: '-=460'}, 500);
    }else if (elementRightOffset > $('#project-carousel').width()) {
        $('#project-row').animate({scrollLeft: '+=460'}, 500);
        return false;
    }else{
      return true;
    }
  }
};

$(document).ready(window.setupHome);
$(document).on('page:load', window.setupHome);