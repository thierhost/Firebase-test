'use strict';


app.service('categoryProvider',function($firebaseArray){
    var ref = firebase.database().ref().child("categories");
    var categories = $firebaseArray(ref);

    this.getCategories = function () {
        return categories;
    }

    this.create = function (category) {
        categories.$add(category);
        return categories;
    }
});