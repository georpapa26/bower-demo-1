var person = { name: 'Stavros', weight: 85 };
var app = angular.module('myApplication', []);

app.controller('myController', function(){
  this.person = person;

  this.eatSnack = function (){
    this.person.weight += 2;
  };

  this.walk = function (){
    this.person.weight -= 5;
  };


});
