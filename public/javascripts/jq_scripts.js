// variables
var $hotelSelect = $('#hotels-select');
var $ttdSelect = $('#ttd-select')
var $restSelect = $('#rest-select')


//hash of hotel, ttd, restaurant select values
var selectors = {
  hotels: $hotelSelect,
  thingsToDo: $ttdSelect,
  restaurants: $restSelect
};

var dayArr = [];

//link data-type + id

// var findById = function(type,id) {
//   for (var i = 0; i < )
// }

// doc ready function
$(function(){

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

// adding days. create array of days. Then make function that pushes individual day objects to array on JQ event

var addDay = function () {
 var myDay = {};
    myDay.id = dayArr.length + 1;
    myDay.hotels = [];
    myDay.restaurants = [];
    myDay.thingsToDo = [];
    console.log(myDay);

  dayArr.push(myDay);
    console.log(dayArr);

//add button for each new day 
$('.btn-group').append("<button type='button' class='btn btn-default' id = 'Day_" + myDay.id +"' data_day = '" + myDay.id+"'>" + "Day "+myDay.id+"</button>")

// denote current day
$('#Day_' + myDay.id).on('click', function(){
  var $current_day = $(this).html();
  var $data_day_val = $(this).attr('data_day');
  //console.log($data_day_val);
  //console.log("current day: "+$current_day);
  $('#current_day').html($current_day);
  $(this).toggleClass("btn-primary");
 //console.log("myDay.id: " + myDay.id);


// populate current day hotels, ttd, restaurants. cool single event listener for all three collections. get data attribute of select button. then loop through selectors hash to get select id and append its val(). it works! 
$('.add-place').on('click', function(){
    //console.log('hello');
    var $place = $(this).attr('data_place');
    for (var key in selectors) {
     var selected = selectors[key].val(); 
     console.log(selected);
        if (key == $place) {
          $('#'+ $place).append("<li>" + selected + "</li>");
        dayArr.forEach(function(day){ //day is any given day in dayArr
          if (day.id = $data_day_val) { // ie, if id of current day matches id of day in daysArr, push values to that day's arrays of hotel, ttd, rest
            day[key].push(selected); // this works!
          }
        })
      }
      }
    });
  });
} // end addDay function 

// call addDay function on click event of Add Day button
$('#add-day').on('click', function(){
  addDay();
});


// pull value of <option> tags and write to current day object


}); // close of doc ready function. don't mess!