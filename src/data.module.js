(function () {
'use strict';

angular.module('data', [])
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;

  service.getCategories = function() {
    var getCategoriesService = $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
    }).then(function (response) {
      return response.data;
    });
    return getCategoriesService;
  };

  service.getItems = function(itemShortName) {
    var getItemsService = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params: {
            itemShortName: itemShortName
        }
    }).then(function (response) {
      return response.data;
    });
    return getItemsService;
  };
}

})();
