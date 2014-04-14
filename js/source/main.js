(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#title').click(title);
    $('.number').click(display);
    $('.clear').click(clearDisplay);
    $('.decimal').click(decimal);
    $('#sign').click(sign);
    $('#push').click(push);
    $('.operator').click(operator);
  }

  function operator(){
      var op = $(this).data('op');
      var x = $('#queue > div:nth-child(1)').text() * 1;
      var y = $('#queue > div:nth-child(2)').text() * 1;
      var result;

      switch(op){
      case 'add':
        result = x + y;
        break;
      case 'sub':
        result = y - x;
        break;
      case 'mul':
        result = x * y;
        break;
      case 'div':
        result = y / x;
        break;
      case 'root':
        result = Math.sqrt(x);
        break;
      case 'exp':
        result = Math.pow(x,y);
        break;
      case 'fact':
        result = factorial(x);
        break;
      case 'sum':
        result = sum();
        break;
    }
    $('#display').text(result);
  }

  function title(){
    var display = $('#table').css('display');

    if(display === 'none'){
      $('#table').fadeIn();
    }else{
      $('#table').fadeOut();
    }
  }

  function display(){
    var num = this.textContent;
    var output = $('#display').text();

    if(output === '0'){
      output = num;
    }else{
      output += num;
    }
    $('#display').text(output);
  }

  function clearDisplay(){
    var type = this.textContent;

    if(type === 'c'){
      $('#display').text(0);
    } else{
      $('#queue').empty();
    }
  }

  function decimal(){
    var display = $('#display').text();
    var noDecimal = display.indexOf('.') === -1;

    if(noDecimal){
      $('#display').text(display + '.');
    }
  }

  function sign(){
    var display = $('#display').text();
    $('#display').text(display * -1);
  }

  function push(){
    var display = $('#display').text(); //selectes text in text box
    $('#display').text(0); //clears text box back to 0 on push
    var $div = $('<div>'); //creates a jQuery div/object
    $div.text(display); //puts text inside div
    $('#queue').prepend($div); //displays text in div in browser
  }

  function factorial(x){
    var product = 1;

    for(var i = 2; i <= x; i++){
      product *= i;
  }
  return product;
}

  function sum(){
    var total = 0;

    $('#queue > div').each(function(index, div){
      console.log(div);
      var x = div.textContent * 1;
      total += x;
  });
  return total;
}

})();
