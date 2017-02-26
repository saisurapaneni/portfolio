(function () {
    "use strict";
    var app = angular
        .module("myApp", ['ngRoute']);
    app.run(function($rootScope) {
          $rootScope.className = false;
      });
    app.config(['$routeProvider', function($routeProvider){
        $routeProvider.
       when('/home', {
            templateUrl: 'home.html',
            controller: 'HomeController',
            activetab: 'home'
        }).
        when('/experience', {
            templateUrl: 'experience.html',
            controller: 'ExperienceController',
            activetab: 'experience'
        }).
        when('/technologies', {
            templateUrl: '/portfolio.html',
            controller: 'PortfolioController',
            activetab: 'technologies'
        }).
        when('/about', {
            templateUrl: '/about.html',
            controller: 'AboutController',
            activetab: 'about'
        }).
        otherwise({
            redirectTo: '/home'
        });
      }]);

    app.controller("HomeController", function($scope, $route, $rootScope){
      $rootScope.$route = $route;
      $rootScope.className = false;
    });
    app.controller("ExperienceController", function($scope, $route, $rootScope){
      $rootScope.$route = $route;
      $rootScope.className = true;
    });
    app.controller("PortfolioController", function($scope, $route, $rootScope){
      $rootScope.$route = $route;
      $rootScope.className = true;
      $scope.sortType     = 'tool'; // set the default sort type
      $scope.sortReverse  = false;  // set the default sort order
      $scope.searchTool   = '';     // set the default search/filter term

     // create the list of sushi rolls
     $scope.tools = [
      { tool: 'HTML5', description: 'Mark up language to build the templates.', expertLevel: 'Expert' },
      { tool: 'CSS3 - Bootstrap, SASS', description: 'Styling using frameworks. Responsive designing.', expertLevel: 'Expert' },
      { tool: 'Javascript - Jquery', description: 'Code functionality with scripting.', expertLevel: 'Expert' },
      { tool: 'Angular Js 1+, 2', description: 'MVVC framework that help build a clean separation of layers.', expertLevel: 'Intermediate' },
      { tool: 'Kendo UI', description: 'A good framework to support cross browser functionality.', expertLevel: 'Expert'},
      { tool: 'NPM', description: 'Manage and install dependencies using Node.', expertLevel: 'Expert'},
      { tool: 'Build Tools', description: 'Use Grunt and Gulp prepare the resources for different evironments.', expertLevel: 'Expert'},
      { tool: 'Version Control', description: 'Source Code repositiores SVN, Github.', expertLevel: 'Expert'},
      { tool: 'IDE', description: 'Integrated Development Environment: Atom, Sublime, Brackets, Eclipse, Visual Studio Code.', expertLevel: 'Expert'},
      { tool: 'Designing Tools', description: 'Adobe Suite.', expertLevel: 'Intermediate'},
      { tool: 'PHP', description: 'PHP.', expertLevel: 'Beginner'},
      { tool: 'Python', description: 'Python.', expertLevel: 'Beginner'},
      { tool: 'MySql', description: 'Database to store the data.', expertLevel: 'Intermediate'},
      { tool: 'Others', description: 'C, C++, Java.', expertLevel: 'Intermediate'},

     ];
    });
    app.controller("AboutController", function($scope, $route, $rootScope){
      $rootScope.$route = $route;
      $rootScope.className = true;
    });
}());
