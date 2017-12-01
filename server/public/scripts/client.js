var app = angular.module('LizLifeApp', []);

app.controller('GalleryController', ['$http', function ($http){
    console.log('GalleryController has been loaded');
    var self = this;
    self.message = 'WELCOME :)';

    self.imgOne = './images/cloud_1.jpg';

    // clickCountOne
}]);