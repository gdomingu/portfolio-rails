$(document).ready(function(){
  var peg1 = $('#peg1')
  var peg2 = $('#peg2')
  var peg3 = $('#peg3')

  function play(){
    var discnum = prompt("How many discs?")
    var moves = 0
    $('#movescounter').html('<p>Number of moves: '+moves+'</p>');

    for (var i = 1; i <= discnum; i++){
      peg1.append('<div class="disc" id='+i+'>'+i+'</div>');
    }

    $(function movedisc() {
        $( ".peg div:first-child" ).draggable();
        function hasNoDiscs(peg){
          return peg.find("div:first-child").length === 0
        }
        function hasLargerDisc(peg, currentdisc){
          return peg.find("div:first-child").attr('id')  >= currentdisc.attr('id')
        }
        $( ".peg" ).droppable({
          drop: function( event, ui ) {
            var currentdisc = $(ui.draggable)
            if ( hasNoDiscs($(this)) || hasLargerDisc($(this), currentdisc) ){
              currentdisc.css('top', '').css('left', '');
              $(this).prepend(currentdisc);
              moves++
              $('#movescounter').html('<p>Number of moves: '+moves+'</p>')
              if ($('#peg3').find('div').length == discnum){
                alert('You win in ' +moves+ ' moves!');
              }
            } else {
              alert("you can't move there!")
              currentdisc.css('top', '').css('left', '');
            }
            movedisc();
          }
        });
      });
  }

  $('#playbutton').on('click', function(){
    $('.peg').empty();
    play();
  });
});