//get current time
function showCurrentTime() {
  var curTime = new Date();
  var options ={
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  };

  $("#showTime").html(curTime.toLocaleTimeString('en', options));
}

//get current date
function showCurrentDate() {
  var curDate = new Date();

  var mm = curDate.getMonth()+1;
  var dd = curDate.getDate();
  var yy = curDate.getFullYear();

  $("#showDate").html((dd<10 ? '0' : '') + dd + '/' + (mm<10 ? '0' : '') + mm + '/' + yy);
  // $("#showDate").html( dd + '/' + mm + '/' + yy); //show one character
}

showCurrentTime();
showCurrentDate();

//update time every second
setInterval(showCurrentTime, 1000);

//Input
$('input[type="text"]').keypress(function(event) {
  if(event.which === 13){
    if(!$(this).val()){
      alert("Can not add empty To-Do list");
    }else{
      var input = $(this).val();
      $(this).val("");
      var time = new Date($.now());
      var options ={
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
      };
      var inputTime = time.toLocaleTimeString('en', options);

      $('ul').append('<li><span class="check-completed"></span> ' + input
                    + '<span class="delete-list"><i class="fas fa-minus-circle"></i></span> ' +
                    '<span id="input-time">'+ inputTime +'</span></li>');
    }
  }
})

//Line cross on list when clicked
$('ul').on("click", "li", function() {
    $(this).toggleClass("completed");
})


//delete when X is clicked
$('ul').on('click', ".delete-list", function() {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  })
})

$('#info').on('click', function() {
  $('.info-1').toggle()
})


$('.fa-plus').on("click", function() {
  $('input[type="text"]').fadeToggle();
})
