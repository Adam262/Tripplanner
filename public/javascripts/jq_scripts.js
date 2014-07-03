var $hotelSelect = $('#hotels-select');
var $ttdSelect = $('#ttd-select')
var $restSelect = $('#rest-select')

$(function(){
//test

$('#add-hotel').on('click', function(){
  $('nav').css("background","red")
});

// Three functions to populate <select> for hotel, rest, ttd
  hotels.forEach(function(h){
      $hotelSelect.append("<option>" + h.name +"</option>" )
  })

   restaurants.forEach(function(r){
      $restSelect.append("<option>" + r.name +"</option>" )
  })

    thingsToDo.forEach(function(t){
      $ttdSelect.append("<option>" + t.name +"</option>" )
  })
 

//append day buttons
var days = 1;
function addDay() {
  $('#btn-group').append("<button type='button' class='btn btn-default'>" + "Day "+days+"</button>")
}

$('#add-day').on('click', function(){
  days++;
  addDay();
});

var current_day = $('.btn-group').on('mouseover', function(){
  console.log('hello');
})
}); // close of doc ready function. don't mess!