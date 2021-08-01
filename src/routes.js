(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig)
.controller('ItemsController', ItemsController)
.controller('CategoriesController', CategoriesController);

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
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getCategories();
      }]
    }
  })
  .state('items', {
    url: '/items/{itemShortName}',
    templateUrl: 'src/templates/items.html',
    controller: 'ItemsController as itemsCtrl',
    resolve: {
      items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItems($stateParams.itemShortName);
      }]
    }
  });
}

CategoriesController.$inject = ['items'];
function CategoriesController(items) {
  var cateCtrl = this;
  cateCtrl.items = items;
}

ItemsController.$inject = ['items'];
function ItemsController(items) {
  var itemsCtrl = this;
  itemsCtrl.items = items;
}

})();
