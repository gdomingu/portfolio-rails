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
    resetToDefault();
    var _this = $(this);
    addSelectedBorder(_this);
    fadeInDetail(_this);
    scrollIntoViewIfNeeded(_this);
  });

  function resetToDefault(){
    $('.project-detail').hide();
    $('.arrow-down').remove();
    $('.cover-item img').css('border', 'none');
  };

  function addSelectedBorder(element){
    element.css("border", "10px solid black");
    element.after("<div class='arrow-down'></div>");
  };

  function scrollIntoViewIfNeeded(element){
    $('#projects h2')[0].scrollIntoView();
    var elementLeftOffset = element.offset().left
    var elementRightOffset = elementLeftOffset + element.width()

    if(elementLeftOffset < 0){
      $('#project-row').animate({scrollLeft: '-=460'}, 500);
    }else if (elementRightOffset > $('#project-carousel').width()) {
        $('#project-row').animate({scrollLeft: '+=460'}, 500);
    };
  };

  function fadeInDetail(element){
    var detail = "#" + element.data('project-name') + "-detail";
    $(detail).fadeIn('slow');
  };

  var first_project = $('.cover-item img').first();
  addSelectedBorder(first_project);
  fadeInDetail(first_project);
};

$(document).ready(window.setupHome);
$(document).on('page:load', window.setupHome);