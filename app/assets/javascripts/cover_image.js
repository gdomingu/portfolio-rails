var CoverImage = function(element){
  this.element = element;
}

CoverImage.prototype.addSelectedBorder = function() {
  this.element.css("border", "10px solid black");
  this.element.after("<div class='arrow-down'></div>");
}

CoverImage.prototype.fadeInDetail = function() {
  var detail = "#" + this.element.data('project-name') + "-detail";
  $(detail).fadeIn('slow');
};

CoverImage.prototype.scrollIntoViewIfNeeded = function() {
  $('#projects h2')[0].scrollIntoView();
  var elementLeftOffset = this.element.offset().left;
  var elementRightOffset = elementLeftOffset + this.element.width();

  if(elementLeftOffset < 0){
    $('#project-row').animate({scrollLeft: '-=460'}, 500);
  }else if (elementRightOffset > $('#project-carousel').width()) {
      $('#project-row').animate({scrollLeft: '+=460'}, 500);
  };
};

CoverImage.prototype.select = function() {
  this.addSelectedBorder();
  this.fadeInDetail();
  this.scrollIntoViewIfNeeded();
}