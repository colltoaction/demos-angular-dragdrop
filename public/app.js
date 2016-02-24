angular.module("demo", ['ngMaterial', 'angular-sortable-view'])
.controller("SimpleDemoController", function() {
    var self = this;
    self.lists = [
        [], []
    ];

    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
        self.lists[0].push({label: "Item A" + i});
        self.lists[1].push({label: "Item B" + i});
    }
});