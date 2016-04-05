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
    var _this = $(this)
    $('.cover-item img').css('border', 'none')
    _this.css("border", "10px solid black")
    $('.arrow-down').remove()
    _this.after("<div class='arrow-down'></div>")
  });
};

$(document).ready(window.setupHome);
$(document).on('page:load', window.setupHome);