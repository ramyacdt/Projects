angular.module('tajmahal.services', [])

/**
 * A simple example service that returns All Food Categories and its types.
 */
.factory('FoodCategories', function() {
  // Might use a resource here that returns a JSON array

  var drinks = [{
    id: 0,
    name: 'Filter Coffee',
    picture: '/img/restaurant.jpg'
  }, {
    id: 1,
    name: 'Tea',
    picture: '/img/restaurant.jpg'
  }, {
    id: 2,
    name: 'Milk',
    picture: '/img/restaurant.jpg'
  }, {
    id: 3,
    name: 'RoseMilk',
    picture: '/img/restaurant.jpg'
  }, {
    id: 4,
    name: 'Cocacola',
    picture: '/img/restaurant.jpg'
  }, {
    id: 5,
    name: 'Pepsi',
    picture: '/img/restaurant.jpg'
  }, {
    id: 6,
    name: 'Mango Lussi',
    picture: '/img/restaurant.jpg'
  }, {
    id: 7,
    name: 'Kingfisher Beer',
    picture: '/img/restaurant.jpg'
  }, {
    id: 8,
    name: 'Cobra Beer',
    picture: '/img/restaurant.jpg'
  }, {
    id: 9,
    name: 'Water',
    picture: '/img/restaurant.jpg'
  }];

  var deserts = [{
    id: 0,
    name: 'Gulab Jamun',
    picture: '/img/restaurant.jpg'
  }, {
    id: 1,
    name: 'Halwa',
    picture: '/img/restaurant.jpg'
  }, {
    id: 2,
    name: 'Laddu',
    picture: '/img/restaurant.jpg'
  }, {
    id: 3,
    name: 'Kesari',
    picture: '/img/restaurant.jpg'
  }, {
    id: 4,
    name: 'Beeda',
    picture: '/img/restaurant.jpg'
  }, {
    id: 5,
    name: 'Baadhusha',
    picture: '/img/restaurant.jpg'
  }, {
    id: 6,
    name: 'Mysorepaakku',
    picture: '/img/restaurant.jpg'
  }, {
    id: 7,
    name: 'Icecream',
    picture: '/img/restaurant.jpg'
  }, {
    id: 8,
    name: 'FruitSalad',
    picture: '/img/restaurant.jpg'
  }];

var starters = [{
    id: 0,
    name: 'Samosa',
    picture: '/img/restaurant.jpg'
  }, {
    id: 1,
    name: 'Onion Bajji',
    picture: '/img/restaurant.jpg'
  }, {
    id: 2,
    name: 'Tandoori Chicken',
    picture: '/img/restaurant.jpg'
  }, {
    id: 3,
    name: 'Chicken Tikka',
    picture: '/img/restaurant.jpg'
  }, {
    id: 4,
    name: 'Vazhakai Bajji',
    picture: '/img/restaurant.jpg'
  }, {
    id: 5,
    name: 'Medu Vadai',
    picture: '/img/restaurant.jpg'
  }, {
    id: 6,
    name: 'Sambar Vadai',
    picture: '/img/restaurant.jpg'
  }, {
    id: 7,
    name: 'Fish Pakoda',
    picture: '/img/restaurant.jpg'
  }, {
    id: 8,
    name: 'Pakoda',
    picture: '/img/restaurant.jpg'
  }];

var mainCourses = [{
    id: 0,
    name: 'Vegetarian Thali',
    picture: '/img/restaurant.jpg'
  }, {
    id: 1,
    name: 'Non Vegetarian Thali',
    picture: '/img/restaurant.jpg'
  }, {
    id: 2,
    name: 'Chicken Briyani',
    picture: '/img/restaurant.jpg'
  }, {
    id: 3,
    name: 'Dosa',
    picture: '/img/restaurant.jpg'
  }, {
    id: 4,
    name: 'Idli',
    picture: '/img/restaurant.jpg'
  }, {
    id: 5,
    name: 'Chappathi',
    picture: '/img/restaurant.jpg'
  }, {
    id: 6,
    name: 'Poori',
    picture: '/img/restaurant.jpg'
  }, {
    id: 7,
    name: 'Veg Briyani',
    picture: '/img/restaurant.jpg'
  }, {
    id: 8,
    name: 'Chicken Kolambu Rice',
    picture: '/img/restaurant.jpg'
  }, {
    id: 9,
    name: 'Mutton Kolambu Rice',
    picture: '/img/restaurant.jpg'
  }];

  var foodCategories = [{
    id: 0,
    name: 'Starters',
    picture: '/img/9.jpg',
    picture2: '/img/10.jpg',
    picture3: '/img/Keerai Vadai.jpg',
    items: starters
  }, {
    id: 1,
    name: 'Main courses',
    picture: '/img/11.jpg',
    picture2: '/img/14.jpg',
    picture3: '/img/south.jpg',
    items: mainCourses
  }, {
    id: 2,
    name: 'Deserts',
    picture: '/img/15.jpg',
    picture2: '/img/gulab-jamun-hd-wallpaper-4.jpg',
    picture3: '/img/17.jpg',
    items: deserts
  }, {
    id: 3,
    name: 'Drinks',
    picture: '/img/19.jpg',
    picture2: '/img/Filter_coffee_South_Indian_style.jpg',
    picture3: '/img/20.jpg',
    items: drinks
  }];

  return {
    all: function() {
      return foodCategories;
    },
    get: function(foodCategoryId) {
      return foodCategories[foodCategoryId];
    }
  }
});



