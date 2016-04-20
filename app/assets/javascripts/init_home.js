window.setupHome = function(){

  $('.cover-item img').on('click', function(){
    resetToDefault();
    var clickedCoverImage = new CoverImage($(this))
    clickedCoverImage.select();
  });

  function resetToDefault(){
    $('.project-detail').hide();
    $('.arrow-down').remove();
    $('.cover-item img').css('border', 'none');
  };

  var defaultCoverImage = new CoverImage($('.cover-item img').first());
  defaultCoverImage.select();
  initializeCarouselControlListener();
};

function initializeCarouselControlListener(){
  $('.carousel-control').on('click', function(){
    var projectRow = $('#project-row')
    var control = $(this)
    if (control.data('slide') == 'next'){
      projectRow.animate( { scrollLeft: '+=460' }, 500);
    }else{
      projectRow.animate( { scrollLeft: '-=460' }, 500);
    }
  });
}

$(document).ready(window.setupHome);
$(document).on('page:load', window.setupHome);