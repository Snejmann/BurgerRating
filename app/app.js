var restaurants = [
    {
        name: 'Flensburg 1',
        address: {
            route: 'Friesische Straße',
            street_number: '98',
            locality: 'Flensburg',
            country: 'Deutschland',
            postal_code: '24937'
        },
        ratings: [
            {
                user: 'Günter',
                points: 4
            },
            {
                user: 'Reinhold',
                points: 2
            },
            {
                user: 'Lisa',
                points: 5
            },
            {
                user: 'Tine',
                points: 5
            }
        ]
    },
    {
        name: 'Restaurant 2',
        address: {
            route: 'Friesische Straße',
            street_number: '98',
            locality: 'Flensburg',
            country: 'Deutschland',
            postal_code: '24937'
        },
        ratings: []
    },
    {
        name: 'Restaurant 3',
        address: {
            route: 'Schleswiger Straße',
            street_number: '5',
            locality: 'Flensburg',
            country: 'Deutschland',
            postal_code: '24941'
        },
        ratings: [
            {
                user: 'Günter',
                points: 4
            },
            {
                user: 'Frieda',
                points: 2
            },
            {
                user: 'Lisa',
                points: 5
            },
            {
                user: 'Ulf',
                points: 5
            },
            {
                user: 'Sammy',
                points: 1
            },
            {
                user: 'Ulf',
                points: 1
            },
            {
                user: 'Ulf',
                points: 1
            }
        ]
    }
];

var burgerRatingApp = angular.module('burgerRatingApp', []);

burgerRatingApp
    .controller('dataCtrl', ['$scope', function ($scope) {
        $scope.restaurants = restaurants;

        $scope.totalRatingCount = function (restaurant) {
            var totalRatingPoints = restaurant.ratings.reduce(function (totalRating, rating) {
                return totalRating + parseInt(rating.points);
            }, 0);
            var numberOfRatings = parseInt(restaurant.ratings.length);
            return numberOfRatings == 0?0:Math.round(totalRatingPoints/numberOfRatings*100)/100;
        };

        $scope.addressToString = function (restaurant) {
            var address = restaurant.address;
            return address.route + ' ' + address.street_number + ', ' + address.locality + ', ' + address.country;
        }
    }])
    .controller('restaurantCtrl', function () {
        this.restaurant = {
            ratings: []
        };

        this.address = {};

        this.addRestaurant = function (restaurants) {
            this.restaurant['address'] = this.address;
            restaurants.push(this.restaurant);

            this.restaurant = {
                ratings: []
            };

            this.address = {};
        }
    })
    .controller('ratingCtrl', function () {
        this.restaurant = {};

        this.rating = {
            user: 'Dumbo'
        };

        this.addRating = function (restaurants) {
            var rest = this.restaurant['name'];
            var myRestaurant = restaurants.find(function (restaurant) {
                return restaurant.name == rest.name;
            });
            if (myRestaurant != 'undefined')
                myRestaurant['ratings'].push(this.rating);
            this.rating = {
                user: 'Dumbo'
            };
            this.restaurant = {};
        }
    });



