var express = require('express');
var router = express.Router();
var models = require('../models');


/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });

//here we are running a db.find() on all our collections. can test w/ res.json(a:a, b:b, c:c)
router.get('/', function(req, res) {
  models.Hotel.find(function(err, hotels) {
    console.log(hotels);
    models.ThingsToDo.find(function(err, thingsToDo){
      models.Restaurant.find(function(err, restaurants){
        res.render('index', { hotels: hotels, thingsToDo: thingsToDo, restaurants: restaurants, title: "Trip Planner" });
      });
    });
  });
});

// /*Zeke's alternative module way*/
// router.get('/', [
//   function(req,res,next) {
//       models.Hotel.find(function(err, hotels){
//         req.hotels = hotels;
//         next();
//       });
//   },
//   function(req,res,next) {
//       models.thingsToDo.find(function(err, things_to_do){
//         req.things_to_do = things_to_do;
//         next();
//       });
//   },
//   function(req,res,next) {
//       models.Restaurant.find(function(err, restaurants){
//         res.json(
//           restaurants: restaurants,
//           things_to_do: req.things_to_do,
//           hotels:req.hotels)
//       });
//   }
//   ]);



module.exports = router;
