exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('bikes').del(),
    // Inserts seed entries
    knex('bikes').insert({
        id: 1,
        owner_id: 5,
        title: "Cool bike for rent!",
        description: 'The bike works great, check it out before it\'s gone',
        picture: "http://feelgrafix.com/data_images/out/28/979576-bike.jpg",
        type: "cruiser",
        condition: 'perfect',
        price_hour: 2,
        price_day: 10,
        instructions: 'Pick it up out back by the canoe',
        is_available: true,
        is_borrowed: false,
        street_address: '123 Packers Lane',
        city: 'milwaukee',
        state: 'WI',
        zip_code: '53202'
    }),
    knex('bikes').insert({
        id: 2,
        owner_id: 4,
        title: "Decent bike for rent",
        description: 'It squeaks but she\'ll get you where you\'re going',
        picture: "http://feelgrafix.com/data_images/out/28/979588-bike.jpg",
        type: "street",
        condition: 'fair',
        price_hour: 7,
        price_day: 25,
        instructions: 'On the side of the house by the ladder',
        is_available: true,
        is_borrowed: false,
        street_address: '44 Mountain Drive',
        city: 'dillon',
        state: 'CO',
        zip_code: '80435'
    }),
    knex('bikes').insert({
        id: 3,
        owner_id: 3,
        title: 'Fine mountain bike',
        description: 'Roll down the mountains in style',
        picture: "http://www.val-gardena.net/img/_thumbnails/b/mountainbike_valgardena01.jpg",
        type: "mountain",
        condition: 'gently used',
        price_day: 30,
        instructions: 'Climb up the mountain. It\'s at the top',
        is_available: false,
        is_borrowed: true,
        street_address: '4500 North St.',
        city: 'philadelphia',
        state: 'PA',
        zip_code: '19019'
    }),
    knex('bikes').insert({
        id: 4,
        owner_id: 2,
        title: "Coolest bike on this site, without question.",
        description: 'This bike was manufactured in the forest by small gnomes. They worked tirelessly to complete this bike. They were paid, that\'s for sure. Good benefits. Really wonderful bike with no imperfections anywhere',
        picture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTND0vPNpIrhlYnxkofvvRysM2r6BGHcWz4-3JwHXr2EBibcaSR1A",
        type: "unknown",
        condition: 'godly',
        price_day: 2,
        instructions: 'Knock three times on the rock near the waterfall in the canyon',
        is_available: true,
        is_borrowed: false,
        street_address: '2500 Pine St.',
        city: "boulder",
        state: 'CO',
        zip_code: '80302'
    }),
    knex('bikes').insert({
        id: 5,
        owner_id: 1,
        title: "Granny bike",
        description: "Slow, but proud",
        picture: "https://bellsandwhistlesdotme.files.wordpress.com/2014/04/grazel-in-all-her-glory-e1397482993541.jpg",
        type: "cruiser",
        condition: "modest",
        price_hour: 1,
        price_day: 5,
        instructions: "Ask the blind man on the porch",
        is_available: false,
        is_borrowed: true,
        street_address: '220 Brightwood St.',
        city: "san antonio",
        state: 'TX',
        zip_code: '78209'
    }),
    knex('bikes').insert({
        id: 6,
        owner_id: 6,
        title: "Road Rash",
        description: "This bike is only for the Xtreme rider, who lives an Xtreme lifestyle",
        picture: "http://cdn.velonews.competitor.com/wp-content/uploads/2016/07/0Q6A5837.jpg",
        type: "Street Bike",
        condition: "Great",
        price_hour: 5,
        price_day: 60,
        instructions: "Correctly answer a Guy Fierri trivia question.",
        is_available: true,
        is_borrowed: false,
        street_address: '1571 Alexandra Ct.',
        city: "milwaukee",
        state: 'WI',
        zip_code: '53202'
    }),
    knex('bikes').insert({
        id: 7,
        owner_id: 7,
        title: "Beach Rider",
        description: "If you want to be coolest person at the beach than this is your ride.",
        picture: "http://air-galore.com/wp-content/uploads/2015/05/beach-bicycle-bike-blue-ocean-Favim.com-225093.jpg",
        type: "Beach Cruiser",
        condition: "fair",
        price_hour: 3,
        price_day: 35,
        instructions: "Ask Vinny at rocking horse for the lock combo",
        is_available: true,
        is_borrowed: false,
        street_address: '568 Boardwalk',
        city: "miami",
        state: 'FL',
        zip_code: '13904'
    }),
    knex('bikes').insert({
        id: 8,
        owner_id: 8,
        title: "Suburban Low Rider",
        description: "John Candy rode this bike on the set of Uncle Buck.",
        picture: "https://s-media-cache-ak0.pinimg.com/564x/60/59/3d/60593dc4b01195542822c7ea2f934c5c.jpg",
        type: "Decorative",
        condition: "garbage",
        price_hour: 1,
        price_day: 5,
        instructions: "Just steal if off my front lawn.",
        is_available: true,
        is_borrowed: false,
        street_address: '6264 Peach Tree Dr.',
        city: "boulder",
        state: 'CO',
        zip_code: '80456'
    }),
    knex('bikes').insert({
        id: 9,
        owner_id: 9,
        title: "Majestic Beast",
        description: "Glide through the countryside like a stallion roaming the great plains of Wyoming.",
        picture: "http://www.wallpapers-for-desktop.eu/desktop/wildflowers-bike-flowers-meadow.jpg",
        type: "Roadster",
        condition: "Great",
        price_hour: 5,
        price_day: 40,
        instructions: "On the Side of the house",
        is_available: true,
        is_borrowed: false,
        street_address: '1100 Williams Rd',
        city: "boulder",
        state: 'CO',
        zip_code: '85478'
    }),
    knex('bikes').insert({
        owner_id: 10,
        title: "Get Hipter on a fixy",
        description: "Grass fed and GMO free. Must play stand up base",
        picture: "https://s-media-cache-ak0.pinimg.com/736x/02/b9/24/02b924f109a99ea1e08faa87848502c6.jpg",
        type: "Road Bike",
        condition: "Vintage",
        price_hour: 0,
        price_day: 0,
        instructions: "locked up outside the used bookstore",
        is_available: true,
        is_borrowed: false,
        street_address: '389 Sandlewood Pl.',
        city: "boulder",
        state: 'CO',
        zip_code: '78209'
    }),
    knex('bikes').insert({
        id: 10,
        owner_id: 1,
        title: "Old Junker",
        description: "A little beat up but still rolls.",
        picture: "http://previews.123rf.com/images/marcovarro/marcovarro1105/marcovarro110500042/9542046-old-rusty-bicycle-over-a-grunge-background-Stock-Photo-vintage.jpg",
        type: "Old School",
        condition: "Poor",
        price_hour: 1,
        price_day: 5,
        instructions: "I'll leave it out from by the garage.",
        is_available: true,
        is_borrowed: false,
        street_address: "14 Thompson Square",
        city: "milwaukee",
        state: 'WI',
        zip_code: '53202'
    }),
    knex('bikes').insert({
        id: 11,
        owner_id: 3,
        title: "Decent Mountain Bike",
        description: "Rarely used works great.",
        picture: "https://upload.wikimedia.org/wikipedia/commons/3/36/HardtailMountainBike_2010_Specialized_Rockhopper.jpg",
        type: "Mountain Bike",
        condition: "Good",
        price_hour: 4,
        price_day: 30,
        instructions: "Just ring the doorbell and ask for Antonio",
        is_available: true,
        is_borrowed: false,
        street_address: '1764 Roxbury Rd.',
        city: "milwaukee",
        state: 'WI',
        zip_code: '53202'
    }),
    knex('bikes').insert({
        id: 12,
        owner_id: 3,
        title: "City Bike",
        description: "Great for getting around Brew City",
        picture: "https://momentummag.com/wp-content/uploads/2014/04/Bikes_Belted_Spot_Wazee.jpg",
        type: "cruiser",
        condition: "Perfect",
        price_hour: 5,
        price_day: 40,
        instructions: "Call Franklin when get to the listed address.",
        is_available: true,
        is_borrowed: false,
        street_address: '14 Badger Ct.',
        city: "milwaukee",
        state: 'WI',
        zip_code: '53202'
    }),
    knex('bikes').insert({
        id: 13,
        owner_id: 4,
        title: "Bike For Rent",
        description: "I never use it, why don't you?",
        picture: "http://fbmbike.co/wp-content/uploads/2012/08/775108grove.1.jpg",
        type: "Normal",
        condition: "modest",
        price_hour: 2,
        price_day: 10,
        instructions: "Just take it off of the patio",
        is_available: true,
        is_borrowed: false,
        street_address: '1800 Dahlia Way',
        city: "san antonio",
        state: 'TX',
        zip_code: '78209'
    }),
    knex('bikes').insert({
        id: 14,
        owner_id: 6,
        title: "Get Mobile",
        description: "Live life on two wheels",
        picture: "http://cdn.nextpremium.com/wp-content/uploads/2014/05/plybike-bicycle-street-bike-dots-design-studio-740x425.jpg",
        type: "Artsy Fartsy",
        condition: "modest",
        price_hour: 3,
        price_day: 30,
        instructions: "Go to the Milwaukee Court House find it at the top of the stairs",
        is_available: true,
        is_borrowed: false,
        street_address: '467 Brewers Blvd',
        city: "milwaukee",
        state: 'WI',
        zip_code: '53212'
    }),
    knex('bikes').insert({
        id: 15,
        owner_id: 7,
        title: "Survive the Apocolypse",
        description: "The end is near. Make sure your equiped to survive.",
        picture: "http://i03.i.aliimg.com/img/pb/598/441/262/1281773472686_hz-myalibaba-web4_4208.jpg",
        type: "Survivor",
        condition: "Good",
        price_hour: 100,
        price_day: 1000,
        instructions: "Find my bunker out back of the house and knock on the cellar door.",
        is_available: true,
        is_borrowed: false,
        street_address: '800 Wild West Road',
        city: "reno",
        state: 'NV',
        zip_code: '90005'
    }),
    knex('bikes').insert({
        id: 16,
        owner_id: 4,
        title: "Teach your kid to ride",
        description: "They grow out of bikes in a few years. Don't buy!",
        picture: "https://www.mikesbiketours.com/munich/images/stories/kids-cali-cruza-pink.jpg",
        type: "Child Bike",
        condition: "Great",
        price_hour: 2,
        price_day: 12,
        instructions: "It will be locked up to the fence in the front yard",
        is_available: true,
        is_borrowed: false,
        street_address: '7 Falls Rd.',
        city: "denver",
        state: 'CO',
        zip_code: '80212'
    }),
    knex('bikes').insert({
        id: 17,
        owner_id: 3,
        title: "Get Vintage With It",
        description: "Your going to look like a member of Happy Days",
        picture: "https://cdn.shopify.com/s/files/1/0165/7574/products/pure-city-mint-with-darcy-basket_abd60630-df2d-4185-9334-20930f7db3d9_1024x1024.JPG?v=1414520098",
        type: "Vintage",
        condition: "good",
        price_hour: 6,
        price_day: 50,
        instructions: "Go to the ice cream shop and they will give you the key",
        is_available: true,
        is_borrowed: false,
        street_address: '225 Main St.',
        city: "san antonio",
        state: 'TX',
        zip_code: '78209'
    }),
    knex('bikes').insert({
        id: 18,
        owner_id: 9,
        title: "Custom Made Masterpiece",
        description: "Why fit in when you can stand out.",
        picture: "http://www.bicycledesigner.com/images/managed/cruiser-bicycle-50.jpg",
        type: "Low Rider",
        condition: "Great",
        price_hour: 5,
        price_day: 45,
        instructions: "Available for rent for Low Rider Customs",
        is_available: true,
        is_borrowed: false,
        street_address: '675 Chainsaw Ave.',
        city: "san antonio",
        state: 'TX',
        zip_code: '78209'
    })
  );
};
