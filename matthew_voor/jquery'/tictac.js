(function() {
  $(document).ready(init);
  var clickCount = 0;

  function init() {
    $(".cell").on("click", placePiece);

  }
function placePiece() {

  clickCount++;

if(clickCount % 2 === 0) {

        $(this).addClass('red');

} else {

        $(this).addClass('blue');

}
}

})();
