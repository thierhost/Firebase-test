'use strict';

app
    .controller('itemList',function($scope,itemProvider){
        $scope.items = itemProvider.getItems();
    })
    .controller('itemCreate',function($scope,itemProvider,categoryProvider,$location)
    {
       $scope.categories = categoryProvider.getCategories();
       $scope.create =function (item) {
           itemProvider.create(item);
           $scope.items = itemProvider.getItems();
           $location.path("/");
       }

    });