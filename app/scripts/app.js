'use strict';

/**
 * @ngdoc overview
 * @name bugcenterApp
 * @description
 * # bugcenterApp
 *
 * Main module of the application.
 */
angular
  .module('bugcenterApp',["ui.router","textAngular","chart.js"]).config(["$stateProvider","$urlRouterProvider","ChartJsProvider",function($stateProvider,$urlRouterProvider,ChartJsProvider){
        $urlRouterProvider.when("","/login"),
        $stateProvider.state("/login",{
          url:"/login",
          templateUrl:"views/login.html",
          controller:"Login"
        }).state("/Ln",{
          url:"/Ln",
          templateUrl:"views/lining.html",
          controller:"Ln"
        }).state("/Lx",{
          url:"/LX",
          templateUrl:"views/lixueci.html",
          controller:"Lx"
        }).state("/Sy",{
          url:"/Sy",
          templateUrl:"views/shiyifei.html",
          controller:"Sy"
        }).state("/Bx",{
          url:"/Bx",
          templateUrl:"views/baixinyu.html",
          controller:"Bx"
        }),
        ChartJsProvider.setOptions({
            chartColors: ['#FF5252', '#FF8A80'],
            responsive: true
        });
        // Configure all line charts
            ChartJsProvider.setOptions('line', {
            showLines: true
        });

  }])
