'use strict';

app.config(
    function ($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl:"views/index.html"
            })
            .when('/items',{
                templateUrl:"views/item/list.html",
                controller :'itemList'
            })
            .when('/items/create',{
                templateUrl:"views/item/create.html",
                controller :'itemCreate'
            })
            .when('/categories',{
                templateUrl:"views/category/list.html",
                controller :'categoryList'
            })
            .when('/categories/create',{
                templateUrl:"views/category/create.html",
                controller :'categoryCreate'
            })
            .when('/images/create',{
                templateUrl:"views/images/create.html",
                controller :'imagesCreate'
            })
            
});