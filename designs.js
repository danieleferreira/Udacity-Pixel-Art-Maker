
// Object for grid creation and modification
var pixelArtMaker = {

  colorSelected: $('#colorPicker').val(),

  resetTable: function() {
    // reset table by removing children html
    $('#pixelCanvas').children().remove();
    $('input[type=submit]').removeAttr('disabled'); // disable submit btn
  },

  makeGrid: function(height, width) {
    // create grid in #pixelCanvas of size this.height by this.width

    // enable submit input btn
    $('input[type=submit]').attr('disabled', 'disabled');

    // create table of size rows=height and cols=width
    for (var r=0; r<height; r++) {
      var addRow = $('<tr></tr>');
      for (var c=0; c<width; c++) {
        addRow.append('<td></td>');
      }
      $('#pixelCanvas').append(addRow);
    }

    // add class to td elements
    $('#pixelCanvas td').addClass('cell');

    // change color of clicked cell
    $('.cell').click(function(event) {
      $(event.target).css('background-color',pA.colorSelected);
    });

  },

};


// create pixelArtMaker object
var pA = pixelArtMaker;

// When size is submitted, call makeGrid()
$('#sizePicker').submit(function(event){

  event.preventDefault();

  // get size
  let height = $('#inputHeight').val();
  let width = $('#inputWidth').val();

  // create grid
  pA.makeGrid(height, width);
});

// reset grid
$('#reset').click(function() {
  pA.resetTable();
});

// set cell color
$('#colorPicker').change(function() {
  pA.colorSelected = $('#colorPicker').val();
});
