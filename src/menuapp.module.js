(function () {
'use strict';

angular.module('MenuApp', ['data', 'ui.router'])
.controller('ItemsController', ItemsController)
.controller('CategoriesController', CategoriesController)
.component('categories', {
  templateUrl: 'src/templates/categories.component.html',
  bindings: {
    items: '<'
  }
})
.component('items', {
  templateUrl: 'src/templates/items.component.html',
  bindings: {
    items: '<'
  }
});

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
