'use strict';

app
    .controller('categoryList',function($scope,categoryProvider){
        $scope.categories = categoryProvider.getCategories();
     
    })
    .controller('categoryCreate',function ($scope,categoryProvider,$location) {
     $scope.creer = function (category) {
         $scope.categories = categoryProvider.create(category);
     }
    })