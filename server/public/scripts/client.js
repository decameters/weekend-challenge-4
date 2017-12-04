var app = angular.module('LizLifeApp', []);

app.controller('GalleryController', ['$http', function ($http) {
    console.log('GalleryController has been loaded');
    var self = this;
    self.message = 'WELCOME :)';

    self.imageList = [
        {
            url: "./images/scout4.jpg",
            description: "scout",
            alt: "scout",
            visable: true
        },
        {
            url: "./images/dfj4.jpg",
            description: "DFJ and me",
            alt: "dfj",
            visable: true
        },
        {
            url: "./images/max3.jpg",
            description: "max",
            alt: "max",
            visable: true
        },
        {
            url: "./images/kf_riotfest2.jpg",
            description: "kitten forever",
            alt: "kf",
            visable: true
        },
        {
            url: "./images/weewee.jpg",
            description: "wee wee",
            alt: "weewee",
            visable: true            
        },
        {
            url: "./images/amalia3.jpg",
            description: "amalia & i",
            alt: "amalia",
            visable: true
        }
    ];

    // self.showDescription = false;

    self.showDescription = function (imageClicked){
        console.log('in show description, image clicked was', imageClicked.description);
        imageClicked.visable = imageClicked.visable ? false : true;

        console.log('isVisable is', imageClicked.visable);
    };

    // self.clickCount = function(){
    //     self.clickCounter = 0;
    //     self.clickCounter ++;
    // }


    

    self.clickOne = function () {
        self.clickCountOne++;
    }

    self.clickTwo = function () {
        self.clickCountTwo++;
    }

    self.clickThree = function () {
        self.clickCountThree++;
    }

    self.clickFour = function () {
        self.clickCountFour++;
    }

    self.clickFive = function () {
        self.clickCountFive++;
    }

    self.clickSix = function () {
        self.clickCountSix++;
    }

}]);
