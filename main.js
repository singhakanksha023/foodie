var foodieApp = angular.module('foodieApp',['ngRoute']);
console.log(foodieApp);
var list;///////
foodieApp.controller('mainController',function($scope) {
  $scope.restaurants = [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
  id:'1'
},{
name: 'Thai Thanic',
address: '19 Ashoka Road | Connaught Place, New Delhi 110001, India',
location: 'Connaught Place',
category: 'Dinner, After-hours, Drinks, Lunch',
vote: '5.0',
cuisines: 'Bar, Pub, Fusion, Vegetarian Friendly, Vegan Options',
cost: '4021',
hours: '12:30 Noon to 3 AM (Mon-Sun)',
image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWs4iYv7K4kInN6YbgDrx85Gl3rc93e1aIFYda2Qi7XE1zvZf6',
id:'2'
},{
name: 'HI LETs EAT',
address: '43 Tonk Road | Near Jaipur Nagar Nigam, Jaipur 302015, India',
location: 'Airpot Place',
category: 'Indian, Cafe, Fast food',
vote: '3.5',
cuisines: 'Indian, Cafe, Fast food, Asian, Vegetarian Friendly, Vegan Options',
cost: '650',
hours: '7:30 to 11 PM (Mon-Sun)',
image: 'https://confettithoughts.files.wordpress.com/2014/05/img_4742.jpg',
id:'3'
},{
name: 'BonFire',
address: 'SCO 17, Madhya Marg, Sector 26, Chandigarh 160035, India',
location: 'Chandigarh',
category: ' Indian, Asian, Vegetarian Friendly',
vote: '6.2',
cuisines: ' North Indian, Mughlai, Chinese',
cost: '3830',
hours: '7 PM to 11 PM (Mon-Sun)',
image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/9f/35/b8/photo0jpg.jpg',
id:'4'
},{
name: 'Frigidarium - Gelateria Artigianale',
address: 'Governo Vecchio, 1512, Navona - Pantheon, Roma 00186',
location: 'Navona',
category: ' Frozen delights',
vote: '6.7',
cuisines: 'Ice Cream',
cost: '550',
hours: '9 AM to 3 PM (Mon-Sun)',
image: 'http://www.thatsmags.com/uploads/galleries/images/POP%20Three%20on%20the%20Bund%20ice%20cream%20sundae.jpg',
id:'5'
}]
})

foodieApp.controller('loginController',function($scope,$location) {
  $scope.goToHome = function() {
		//console.log('Do Something')
    $location.url('home')
	}
})

foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
	$scope.restaurantId = $routeParams.id;
  var restaurants = [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
  bestDish: {
	name: 'Corn Pizza',
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
},
},{
  name: 'Thai Thanic',
  address: '19 Ashoka Road | Connaught Place, New Delhi 110001, India',
  location: 'Connaught Place',
  category: 'Dinner, After-hours, Drinks, Lunch',
  vote: '5.0',
  cuisines: 'Bar, Pub, Fusion, Vegetarian Friendly, Vegan Options',
  cost: '4021',
  hours: '12:30 Noon to 3 AM (Mon-Sun)',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWs4iYv7K4kInN6YbgDrx85Gl3rc93e1aIFYda2Qi7XE1zvZf6',
bestDish: {
name: 'Cocktail',
image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/65/7b/11/grappa-new-delhi.jpg'
},
},{
  name: 'HI LETs EAT',
  address: '43 Tonk Road | Near Jaipur Nagar Nigam, Jaipur 302015, India',
  location: 'Airpot Place',
  category: 'Indian, Cafe, Fast food',
  vote: '3.5',
  cuisines: 'Indian, Cafe, Fast food, Asian, Vegetarian Friendly, Vegan Options',
  cost: '650',
  hours: '7:30 to 11 PM (Mon-Sun)',
  image: 'https://confettithoughts.files.wordpress.com/2014/05/img_4742.jpg',
bestDish: {
name: 'Special Tea',
image: 'https://lbb.in/mumbai/wp-content/uploads/sites/7/2016/07/26072016-TapriChai-P11.jpg'
},
},{
  name: 'BonFire',
  address: 'SCO 17, Madhya Marg, Sector 26, Chandigarh 160035, India',
  location: 'Chandigarh',
  category: ' Indian, Asian, Vegetarian Friendly',
  vote: '6.2',
  cuisines: ' North Indian, Mughlai, Chinese',
  cost: '3830',
  hours: '7 PM to 11 PM (Mon-Sun)',
  image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/9f/35/b8/photo0jpg.jpg',
bestDish: {
name: 'Paneer Tikka, Manchurian, Breads',
image: 'http://www.vegrecipesofindia.com/wp-content/uploads/2014/12/paneer-manchurian-recipe.jpg'
},
},{
  name: 'Frigidarium - Gelateria Artigianale',
  address: 'Governo Vecchio, 1512, Navona - Pantheon, Roma 00186',
  location: 'Navona',
  category: ' Frozen delights',
  vote: '6.7',
  cuisines: 'Ice Cream',
  cost: '550',
  hours: '9 AM to 3 PM (Mon-Sun)',
  image: 'http://www.thatsmags.com/uploads/galleries/images/POP%20Three%20on%20the%20Bund%20ice%20cream%20sundae.jpg',
bestDish: {
name: 'Banana',
image: 'https://media.timeout.com/images/101531185/image.jpg'
},
}]
/////////////
$scope.x = 0;
$scope.toggle=function(){
$scope.x = 1-$scope.x;
console.log($scope.x);
}
///////////
$scope.restaurant = restaurants[$routeParams.id - 1];
$scope.ingredients = [];

$scope.getIngredients = function(url) {

  //var data = '{"inputs":[{"data":{"image":{"url":"http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG"}}}]}'
  var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
  $http({
  	'method': 'POST',
  	'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
  	'headers': {
  		'Authorization': 'Key c5a7e3b31f1145c0816fac942e532335',
  		'Content-Type': 'application/json'
  	},
  	'data': data,
}).then(function (response) {
			var ingredients = response.data.outputs[0].data.concepts;
  			//var list = '';
  			for (var i =0;i < ingredients.length;i++) {
  				$scope.ingredients.push(ingredients[i].name);
  			}
    		// $('.ingredients').html(list);
    		//console.log(list);
        list = $scope.ingredients;
}, function error(xhr) {
    console.log(xhr);
  });
  	// success: function (response) {
  	// 	var ingredients = response.outputs[0].data.concepts;
  	// 		var list = '';
  	// 		for (var i =0;i < ingredients.length ;i++) {
  	// 			list += 'div class="ingredient">' + ingredients[i].name + ''
  	// 		}
  	// 	$('.ingredients').html(list);
    //   },
    //   error: function (xhr) {
    //   	console.log(xhr);
    //   }


}

})
/////////
// Controller for todolist page
foodieApp.controller("todo", function($scope) {
			$scope.list = list;
			$scope.x=1;
			console.log(list);
			$scope.grocery = [];
			//yhaan pe array of object bnaya hai kyon ki hme pta chal ske ki kya hmne buy kiya hai aur kya ni
			for (var i = 0; i < list.length; i++) {
				var a = {
					id: i,
					name: list[i],
					buy: false
				};
				$scope.grocery.push(a);
			}
			console.log($scope);
			$scope.bought = [];
			$scope.nbought = [];
			$scope.see = function() {
				console.log($scope);
				$scope.grocery[19].buy = "abcd";
			}
			$scope.toggle = function(num) {
				// yhaan value change ho rhi hai
				$scope.grocery[num].buy = !$scope.grocery[num].buy;
				$scope.$parent.grocery[num].buy = !$scope.$parent.grocery[num].buy

			}
			$scope.one =function(){

				$scope.x=1;

			}
			$scope.two =function(){

				$scope.x=2;

			}
			$scope.three =function(){

				$scope.x=3;

			}
			$scope.filter = function() {
$scope.bought=[];
$scope.nbought=[];
				for (var i = 0; i < $scope.grocery.length; i++) {
					if ($scope.grocery[i].buy) {
						$scope.bought.push($scope.grocery[i]);
					} else {
						$scope.nbought.push($scope.grocery[i]);
					}
				}

				console.log($scope.bought);
			}


})
/////////
foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
  .when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	}).when('/todolist', {
		templateUrl: 'pages/todo.html',
		controller: 'todo'
    })
})
