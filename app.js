var flag = false;



switch (flag) {
  case false:
    hoverO();
    firstOperationForO();
    break;
  case true:
    hoverX();
    firstOperationForX();
    break;
  default:
    alert("error");
}









/**
 * hoverX - this function is used to show the (x) sign on the square you are hovering on.
 * @return {type}  description
 */
function hoverX() {
  $(".col").mouseenter(function() {
    $(this).addClass("add-x-image");
  });

  $(".col").mouseleave(function() {
    $(this).removeClass("add-x-image");
  });
}

/**
 * hoverO - this function is used to show the (O) sign on the square you are hovering on.
 *
 * @return {type}  description
 */
function hoverO() {
  $(".col").mouseenter(function() {
    $(this).addClass("add-o-image");
  });

  $(".col").mouseleave(function() {
    $(this).removeClass("add-o-image");
  });
}

/**
 * firstOperationForX - used to put (x) sign on the box you have clicked on.
 *
 * @return {flag}  description
 */
function firstOperationForX() {
  $(".col").click(function() {
    $(this).addClass('x-image');
  });
  flag = false;
  return flag;
}

/**
 * firstOperationForO - used to put (O) sign on the box you have clicked on.
 *
 * @return {type}  description
 */
function firstOperationForO() {
  $(".col").click(function() {
    $(this).addClass('o-image');
  });
  flag = true;
  return flag;
}
