(function () {
'use strict';

angular.module('MenuApp', ['data', 'ui.router'])
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

})();
