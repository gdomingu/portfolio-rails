window.setupHome = function(){
  $('.carousel-control').on('click', function(){
    var projectRow = $('#project-row')
    var control = $(this)
    if (control.data('slide') == 'next'){
      projectRow.animate( { scrollLeft: '+=460' }, 500);
    }else{
      projectRow.animate( { scrollLeft: '-=460' }, 500);
    }
  })
};

$(document).ready(window.setupHome);
$(document).on('page:load', window.setupHome);