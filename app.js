angular.module("demo", ['ngMaterial', 'angular-sortable-view'])
.controller("SimpleDemoController", function() {
    var self = this;
    self.lists = [
        [], []
    ];

    // Generate initial model
    for (var i = 1; i <= 6; ++i) {
        self.lists[1].push({label: "Item " + i, img: "http://lorempixel.com/400/200/cats/" + i});
    }
});