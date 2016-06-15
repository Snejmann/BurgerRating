/**
 * Created by Master on 15.06.2016.
 */

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
    }
];

restaurants = restaurants.map(function (restaurant) {
    restaurant['totalRating'] =
        restaurant.ratings.reduce(function (totalRating, rating) {
            return totalRating + rating.points;
        }, 0) / restaurant.ratings.length;
    return restaurant;
});
