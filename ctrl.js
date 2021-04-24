/*
* AngularJS controller (JavaScript that controls the modules)
* Cat information is hard-coded as an array
* author: jwhittaker
* date: 04/23/2021
*/

app.controller("myCtrl", function($scope) {
    $scope.searchName = "";
    $scope.cats = [
        {
            "creditFirst": "Avel",
            "creditLast": "Chuklanov",
            "name": "Klaus",
            "colour": "mixed",
            "age": "adult",
            "hair": "long",
            "imageUrl": "img/klaus.jpeg"
        },
        {
            "creditFirst": "C. Z. ",
            "creditLast": "Shi",
            "name": "Artemis",
            "colour": "white",
            "age": "adult",
            "hair": "long",
            "imageUrl": "img/artemis.jpeg"
        },
        {
            "creditFirst": "Edgar",
            "creditLast": "",
            "name": "Felix",
            "colour": "brown",
            "age": "kitten",
            "hair": "short",
            "imageUrl": "img/felix.jpeg"
        },
        {
            "creditFirst": "Kote",
            "creditLast": "Peurto",
            "name": "Charlie",
            "colour": "gray",
            "age": "kitten",
            "hair": "short",
            "imageUrl": "img/charlie.jpeg"
        },
        {
            "creditFirst": "Madalyn",
            "creditLast": "Cox",
            "name": "Dusty",
            "colour": "black",
            "age": "adult",
            "hair": "long",
            "imageUrl": "img/dusty.jpeg"
        },
        {
            "creditFirst": "Marco",
            "creditLast": "Biondi",
            "name": "Noodle",
            "colour": "brown",
            "age": "adult",
            "hair": "short",
            "imageUrl": "img/noodle.jpeg"
        },
        {
            "creditFirst": "Margarita",
            "creditLast": "Zueva",
            "name": "Tibbles",
            "colour": "mixed",
            "age": "adult",
            "hair": "long",
            "imageUrl": "img/tibbles.jpeg"
        },
        {
            "creditFirst": "Max",
            "creditLast": "",
            "name": "Leo",
            "colour": "black",
            "age": "adult",
            "hair": "short",
            "imageUrl": "img/leo.jpeg"
        },
        {
            "creditFirst": "Mohammad",
            "creditLast": "Emami",
            "name": "Alfie",
            "colour": "orange",
            "age": "adult",
            "hair": "short",
            "imageUrl": "img/alfie.jpeg"
        },
        {
            "creditFirst": "Nihal",
            "creditLast": "Karkala",
            "name": "Patches",
            "colour": "mixed",
            "age": "adult",
            "hair": "long",
            "imageUrl": "img/patches.jpeg"
        },
        {
            "creditFirst": "Oleg",
            "creditLast": "Ivanov",
            "name": "Oscar",
            "colour": "mixed",
            "age": "kitten",
            "hair": "short",
            "imageUrl": "img/oscar.jpeg"
        },
        {
            "creditFirst": "Sophie Louisnard",
            "creditLast": "",
            "name": "Luna",
            "colour": "black",
            "age": "adult",
            "hair": "short",
            "imageUrl": "img/luna.jpeg"
        },
        {
            "creditFirst": "Tran Mau Tri",
            "creditLast": "Tam",
            "name": "Moritz",
            "colour": "gray",
            "age": "kitten",
            "hair": "short",
            "imageUrl": "img/moritz.jpeg"
        },
        {
            "creditFirst": "Tugba",
            "creditLast": "",
            "name": "Mikan",
            "colour": "orange",
            "age": "adult",
            "hair": "short",
            "imageUrl": "img/mikan.jpeg"
        },
        {
            "creditFirst": "Jennifer",
            "creditLast": "Whittaker",
            "name": "Beanjo",
            "colour": "black",
            "age": "adult",
            "hair": "long",
            "imageUrl": "img/beanjo.jpeg"
        }
    ];
    //Instructions for sorting
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
});

//Not sure how to call json file
// $http({
//     method: 'GET',
//     url: 'cats.json'
// }).then(function (response){
//
// },function (error){
// });

