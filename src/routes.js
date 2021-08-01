(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.html'
  })
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories.html',
    controller: 'CategoriesController as cateCtrl',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getCategories();
      }]
    }
  })
  .state('items', {
    url: '/items/{category}',
    templateUrl: 'src/templates/items.html',
    controller: 'ItemsController as itemsCtrl',
    resolve: {
      items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItems($stateParams.category);
      }]
    }
  });
}

})();
