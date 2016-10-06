'use strict';
var items =[
    {'name':'django toto', 'category_id':1},
    {'name':'Forest gump', 'category_id':1},
];
app.service('itemProvider',function () {

    this.getItems = function () {
        return items;
    }
    this.create = function (item) {
        items.push(item);
        return items;
    }
})