var app = angular.module('LizLifeApp', []);

app.controller('GalleryController', ['$http', function ($http){
    console.log('GalleryController has been loaded');
    var self = this;
    self.message = 'WELCOME :)';

    self.imgOne = './images/cloud_1.jpg';

    self.clickCountOne = 0;
    self.clickCountTwo = 0;
    self.clickCountThree = 0;
    self.clickCountFour = 0;
    self.clickCountFive = 0;
    self.clickCountSix = 0;

    self.clickOne = function(){
        self.clickCountOne ++;
    }

    self.clickTwo = function(){
        self.clickCountTwo++;
    }

    self.clickThree = function(){
        self.clickCountThree++;
    }

    self.clickFour = function(){
        self.clickCountFour++;
    }

    self.clickFive = function(){
        self.clickCountFive++;
    }

    self.clickSix = function(){
        self.clickCountSix++;
    }

}]);
