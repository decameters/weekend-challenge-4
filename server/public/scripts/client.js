var app = angular.module('LizLifeApp', []);

app.controller('GalleryController', ['$http', function ($http) {
    console.log('GalleryController has been loaded');
    var self = this;
    self.message = 'WELCOME :)';

    self.imageList = [
        {
            url: "./images/scout4.jpg",
            description: "SCOUT",
            alt: "scout",
            visable: true
        },
        {
            url: "./images/dfj4.jpg",
            description: "DFJ AND ME",
            alt: "dfj",
            visable: true
        },
        {
            url: "./images/max3.jpg",
            description: "MAX",
            alt: "max",
            visable: true
        },
        {
            url: "./images/kf_riotfest2.jpg",
            description: "KITTEN FOREVER",
            alt: "kf",
            visable: true
        },
        {
            url: "./images/weewee.jpg",
            description: "WEE WEE",
            alt: "weewee",
            visable: true            
        },
        {
            url: "./images/amalia3.jpg",
            description: "AMALIA & I",
            alt: "amalia",
            visable: true
        }
    ];

    self.showDescription = function (imageClicked){
        imageClicked.visable = imageClicked.visable ? false : true;
    };

}]);
