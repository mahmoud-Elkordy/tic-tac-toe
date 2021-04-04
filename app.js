/* we cant add functions for simplification :) */
let flag = true;

$(".col").mouseenter(function() {
  if (flag === true) {
    $(this).addClass("add-x-image");
  } else {
    $(this).addClass("add-o-image");
  }
});

$(".col").mouseleave(function() {
  if (flag === true) {
    $(this).removeClass("add-x-image");
  } else {
    $(this).removeClass("add-o-image");
  }
});

$(".col").click(function() {
  if (flag === true) {
    if ($(this).hasClass('x-image') || $(this).hasClass('o-image')) {
      // do nothing
    } else {
      $(this).addClass('x-image').removeClass('add-x-image');
      xWins();
      flag = false;
    }
  } else {
    if ($(this).hasClass('x-image') || $(this).hasClass('o-image')) {
      // do nothing
    } else {
      $(this).addClass('o-image').removeClass('add-o-image');
      oWins();
      flag = true;
    }
  }
});

function xWins(){
  let div1X = $('.div-1').hasClass('x-image');
  let div2X = $('.div-2').hasClass('x-image');
  let div3X = $('.div-3').hasClass('x-image');
  let div4X = $('.div-4').hasClass('x-image');
  let div5X = $('.div-5').hasClass('x-image');
  let div6X = $('.div-6').hasClass('x-image');
  let div7X = $('.div-7').hasClass('x-image');
  let div8X = $('.div-8').hasClass('x-image');
  let div9X = $('.div-9').hasClass('x-image');

  if ( div1X && div2X && div3X ) {
    alert("X`s win");
  }else if( div4X && div5X && div6X ) {
    alert("X`s win");
  }else if( div7X && div8X && div9X ) {
    alert("X`s win");
  }else if( div1X && div4X && div7X ) {
    alert("X`s win");
  }else if( div2X && div5X && div8X ) {
    alert("X`s win");
  }else if( div3X && div6X && div9X ) {
    alert("X`s win");
  }else if( div1X && div5X && div9X ) {
    alert("X`s win");
  }else if( div3X && div5X && div7X ) {
    alert("X`s win");
  }
}

function oWins(){
  let div1O = $('.div-1').hasClass('o-image');
  let div2O = $('.div-2').hasClass('o-image');
  let div3O = $('.div-3').hasClass('o-image');
  let div4O = $('.div-4').hasClass('o-image');
  let div5O = $('.div-5').hasClass('o-image');
  let div6O = $('.div-6').hasClass('o-image');
  let div7O = $('.div-7').hasClass('o-image');
  let div8O = $('.div-8').hasClass('o-image');
  let div9O = $('.div-9').hasClass('o-image');

  if ( div1O && div2O && div3O ) {
    alert("O`s win");
  }else if( div4O && div5O && div6O ) {
    alert("O`s win");
  }else if( div7O && div8O && div9O ) {
    alert("O`s win");
  }else if( div1O && div4O && div7O ) {
    alert("O`s win");
  }else if( div2O && div5O && div8O ) {
    alert("O`s win");
  }else if( div3O && div6O && div9O ) {
    alert("O`s win");
  }else if( div1O && div5O && div9O ) {
    alert("O`s win");
  }else if( div3O && div5O && div7O ) {
    alert("O`s win");
  }
}
