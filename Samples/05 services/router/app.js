const myApp = angular.module("myApp", ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    var helloState = {
        name: 'home',
        url: '/home',
        template: '<app-home></app-home>'
    }

    var aboutState = {
        name: 'about',
        url: '/about',
        template: '<app-about></app-about>'
    }

    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);

    $urlRouterProvider.otherwise('/home');
    //$urlRouterProvider.when('/zone','/zone/'+zoneCode);
});
