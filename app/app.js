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
        ratings: [
            {
                user: 'Günter',
                points: 4
            },
            {
                user: 'Reinhold',
                points: 2
            },
        ]
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
            }
        ]
    }
];

restaurants = restaurants.map(function (restaurant) {
    restaurant['totalRating'] =
        restaurant.ratings.reduce(function (totalRating, rating) {
            return totalRating + rating.points;
        }, 0) / restaurant.ratings.length;
    return restaurant;
});

var burgerRatingApp = angular.module('burgerRatingApp', []);

burgerRatingApp.controller('restaurantCtrl', ['$scope', function ($scope) {
    $scope.restaurants = restaurants;

    $scope.addressToString = function(restaurant) {
        var address =  restaurant.address;
        return address.route + ' ' + address.street_number + ', ' + address.locality + ', ' + address.country;
    }
}]);


