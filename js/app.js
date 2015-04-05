// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', [
  'ionic',
  'starter.directive',
  'starter.controller'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

angular.module('starter.controller',[])
    .controller('AppController',AppController);

AppController.$inject = ['$scope','searchPanelDelegate'];

function AppController($scope,searchPanelDelegate){
  var vm = this;
  vm.keyword = '';
  vm.clearKeyword = function() {
    vm.keyword = '';
  };
  vm.toggle = function() {
    searchPanelDelegate.togglePanel();
  },
  vm.items = [
    { text: 'option1', checked: false},
    { text: 'option2', checked: false},
  ];
  vm.condStr = '';
  vm.change = function() {
    vm.condStr = '';
    angular.forEach(vm.items,function(item){
      if(item.checked)
        vm.condStr += ' ,' + item.text;
    });
  };
}
