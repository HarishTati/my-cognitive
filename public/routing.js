

var app = angular.module("myApp",['ngRoute','ngMaterial','jkAngularCarousel']);

app.config(function($routeProvider){
$routeProvider
.when('/intro',{
	templateUrl:'intro.html',
	controller:'introCtrl'
})
.when('/registration',{
  templateUrl:'register.html',
  controller:'registerCtrl'
 })
.when('/login',{
  templateUrl:'login.html',
  controller:'ctrl'
})
.when('/body',{
	templateUrl:'body.html',
	controller:'bodyCtrl'
	
})
.when('/emotion',
{
  templateUrl:'emotion.html',
  controller:'emotionCtrl'
})

.when('/categories',
{
  templateUrl:'categories.html',
  controller:'ctrl2'
})

.when('/concepts',
{
  templateUrl:'concepts.html',
  controller:'ctrl3'
})
.when('/sentiment',
{
  templateUrl:'sentiment.html',
  controller:'ctrl4'
})
.when('/tone',
{
  templateUrl:'tone.html',
  controller:'ctrl5'
})
.otherwise({redirectTo:'/body'});

})

