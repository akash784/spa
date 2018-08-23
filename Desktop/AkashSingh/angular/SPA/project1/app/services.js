// FEATURES DATA IN TABS
angular.module("vikingApp").service("displayFeatures", function() {
    var featureObj = {
        // DECK FEATURES
        deckA: [ "Medical Center" ],
        deck1: [ "The Spa", "The Viking Living Room", "Guest Services", "Fitness Center", "Viking Bar" ],
        deck2: [ "The Theatre & Bar", "Cinema 1 & 2", "Torshavn", "The Shops", "Atrium" ],
        deck3: [ "Staterooms 3000 - 3097", "Self-service launderette", "Atrium (top level)" ],
        deck4: [ "Staterooms 4000 - 4123"],
        deck5: [ "Staterooms 5000 - 5111", "Self-service launderette" ],
        deck6: [ "Navigational Bridge", "Staterooms 6000-6099", "Self-service launderette", "Staterooms 6020 & 6021 are ADA staterooms. Room configuration varies; ask for details" ],
        deck7: [ "Main Pool (with retractable roof)", "Explorers' Lounge (main level)", "Wintergarden", "Aquavit Terrace (with al fresco dining)", "Infinity Pool & Hot Tub" ],
        deck8: [ "Staterooms 8000-8019", "Explorers' Lounge (upper level)" ],
        deck9: [ "Outdoor Gym & Yoga Area" ],
        // CREATE LIST OF ARRAY ELEMENTS
        createList: function features(elems, deckNum) {
            var sum = "<ul>";
            for (var i = 0; i < elems.length; i++) {
                sum += "<li>" + elems[i] + "</li>";
            }
            sum += "</ul>";
            items.innerHTML = sum;
        }
    };
    return featureObj;
});

angular.module("vikingApp").service("divService", function() {
    var myObj = {
        // IMAGE GALLERY PICS & THUMBS
        galleryPics: {
            vikingRoom: [ "https://srdesigner.io/_assets/theVikingRoom.jpg", "https://srdesigner.io/_assets/anotherRoom.jpg", "https://srdesigner.io/_assets/bar.jpg", "https://srdesigner.io/_assets/anotherRoom.jpg,", "https://srdesigner.io/_assets/terrace.jpg" ],
                theSpa: [ "https://srdesigner.io/_assets/theSpa.jpg", "https://srdesigner.io/_assets/theRestaurant.jpg", "https://srdesigner.io/_assets/theAtrium.jpg", "https://srdesigner.io/_assets/balcony.jpg", "https://srdesigner.io/_assets/livingRoom.jpg" ],
             vikingBar: [ "https://srdesigner.io/_assets/bar.jpg", "https://srdesigner.io/_assets/diningRoom.jpg", "https://srdesigner.io/_assets/bedroom.jpg", "https://srdesigner.io/_assets/bedroom.jpg", "https://srdesigner.io/_assets/FourFour.jpg" ],
         theRestaurant: [ "https://srdesigner.io/_assets/theRestaurant.jpg", "https://srdesigner.io/_assets/OneTwo.jpg", "https://srdesigner.io/_assets/OneThree.jpg", "https://srdesigner.io/_assets/FourThree.jpg", "https://srdesigner.io/_assets/kitchen.jpg" ],
             theAtrium: [ "https://srdesigner.io/_assets/theAtrium.jpg", "https://srdesigner.io/_assets/theSpa.jpg", "https://srdesigner.io/_assets/theVikingRoom.jpg", "https://srdesigner.io/_assets/livingRoom.jpg", "https://srdesigner.io/_assets/lotion.jpg" ],
               theater: [ "https://srdesigner.io/_assets/theater.jpg", "https://srdesigner.io/_assets/OneFour.jpg", "https://srdesigner.io/_assets/OneFive.jpg", "https://srdesigner.io/_assets/balcony.jpg", "https://srdesigner.io/_assets/sinks.jpg" ],
            dkThreeOne: [ "https://srdesigner.io/_assets/theater.jpg", "https://srdesigner.io/_assets/balcony.jpg", "https://srdesigner.io/_assets/view.jpg", "https://srdesigner.io/_assets/tvRoom.jpg", "https://srdesigner.io/_assets/lounge.jpg" ],
            dkThreeTwo: [ "https://srdesigner.io/_assets/anotherRoom.jpg", "https://srdesigner.io/_assets/balcony.jpg", "https://srdesigner.io/_assets/bar.jpg", "https://srdesigner.io/_assets/bathroom.jpg", "https://srdesigner.io/_assets/bedroom.jpg" ],
          dkThreeThree: [ "https://srdesigner.io/_assets/bedroom.jpg", "https://srdesigner.io/_assets/diningRoom.jpg", , "https://srdesigner.io/_assets/bedroom.jpg", "https://srdesigner.io/_assets/FourFour.jpg", "https://srdesigner.io/_assets/FourOne.jpg" ],
           dkThreeFour: [ "https://srdesigner.io/_assets/FourThree.jpg", "https://srdesigner.io/_assets/FourFour.jpg", "https://srdesigner.io/_assets/gameRoom.jpg", "https://srdesigner.io/_assets/infinityPool.jpg", "https://srdesigner.io/_assets/OneThree.jpg" ],
           dkThreeFive: [ "https://srdesigner.io/_assets/kitchen.jpg", "https://srdesigner.io/_assets/livingRoom.jpg", "https://srdesigner.io/_assets/lotion.jpg", "https://srdesigner.io/_assets/lounge.jpg", "https://srdesigner.io/_assets/gameRoom.jpg" ],
            dkThreeSix: [ "https://srdesigner.io/_assets/mainPool.jpg", "https://srdesigner.io/_assets/OneFive.jpg", "https://srdesigner.io/_assets/OneFour.jpg", "https://srdesigner.io/_assets/OneThree.jpg", "https://srdesigner.io/_assets/OneThree.jpg" ],
             dkFourOne: [ "https://srdesigner.io/_assets/OneTwo.jpg", "https://srdesigner.io/_assets/sinks.jpg", "https://srdesigner.io/_assets/stateRoom.jpg", "https://srdesigner.io/_assets/terrace.jpg", "https://srdesigner.io/_assets/theater.jpg" ],
             dkFourTwo: [ "https://srdesigner.io/_assets/theAtrium.jpg", "https://srdesigner.io/_assets/theRestaurant.jpg", "https://srdesigner.io/_assets/theSpa.jpg", "https://srdesigner.io/_assets/theVikingRoom.jpg", "https://srdesigner.io/_assets/tvRoom.jpg" ],
           dkFourThree: [ "https://srdesigner.io/_assets/OneOne.jpg", "https://srdesigner.io/_assets/OneTwo.jpg", "https://srdesigner.io/_assets/OneThree.jpg", "https://srdesigner.io/_assets/OneFour.jpg", "https://srdesigner.io/_assets/OneFive.jpg" ],
            dkFourFour: [ "https://srdesigner.io/_assets/TwoFour.jpg", "https://srdesigner.io/_assets/TwoOne.jpg", "https://srdesigner.io/_assets/TwoThree.jpg", "https://srdesigner.io/_assets/TwoTwo.jpg", "https://srdesigner.io/_assets/view.jpg" ],
            dkFourFive: [ "https://srdesigner.io/_assets/winterGarden.jpg", "https://srdesigner.io/_assets/worldCafe.jpg", "https://srdesigner.io/_assets/anotherRoom.jpg", "https://srdesigner.io/_assets/balcony.jpg", "https://srdesigner.io/_assets/bar.jpg" ],
             dkFourSix: [ "https://srdesigner.io/_assets/bathroom.jpg", "https://srdesigner.io/_assets/bedroom.jpg", "https://srdesigner.io/_assets/FourFour.jpg", "https://srdesigner.io/_assets/FourOne.jpg", "https://srdesigner.io/_assets/gameRoom.jpg" ],
             dkFiveOne: [ "https://srdesigner.io/_assets/worldCafe.jpg", "https://srdesigner.io/_assets/winterGarden.jpg", "https://srdesigner.io/_assets/view.jpg", "https://srdesigner.io/_assets/diningRoom.jpg", "https://srdesigner.io/_assets/anotherRoom.jpg" ],
             dkFiveTwo: [ "https://srdesigner.io/_assets/TwoTwo.jpg", "https://srdesigner.io/_assets/bedroom.jpg", "https://srdesigner.io/_assets/gameRoom.jpg", "https://srdesigner.io/_assets/theSpa.jpg", "https://srdesigner.io/_assets/OneTwo.jpg" ],
           dkFiveThree: [ "https://srdesigner.io/_assets/TwoThree.jpg", "https://srdesigner.io/_assets/TwoOne.jpg", "https://srdesigner.io/_assets/TwoFour.jpg", "https://srdesigner.io/_assets/bedroom.jpg", "https://srdesigner.io/_assets/gameRoom.jpg" ],
            dkFiveFour: [ "https://srdesigner.io/_assets/terrace.jpg", "https://srdesigner.io/_assets/FourThree.jpg", "https://srdesigner.io/_assets/FourTwo.jpg", "https://srdesigner.io/_assets/kitchen.jpg", "https://srdesigner.io/_assets/mainPool.jpg" ],
            dkFiveFive: [ "https://srdesigner.io/_assets/diningRoom.jpg", "https://srdesigner.io/_assets/bar.jpg", "https://srdesigner.io/_assets/mainPool.jpg", "https://srdesigner.io/_assets/sinks.jpg", "https://srdesigner.io/_assets/theVikingRoom.jpg" ],
             dkFiveSix: [ "https://srdesigner.io/_assets/bar.jpg", "https://srdesigner.io/_assets/balcony.jpg", "https://srdesigner.io/_assets/anotherRoom.jpg", "https://srdesigner.io/_assets/diningRoom.jpg", "https://srdesigner.io/_assets/bedroom.jpg" ],
           dkFiveSeven: [ "https://srdesigner.io/_assets/theater.jpg", "https://srdesigner.io/_assets/bedroom.jpg", "https://srdesigner.io/_assets/theSpa.jpg", "https://srdesigner.io/_assets/balcony.jpg", "https://srdesigner.io/_assets/mainPool.jpg" ],
              dkSixOne: [ "https://srdesigner.io/_assets/gameRoom.jpg", "https://srdesigner.io/_assets/kitchen.jpg", "https://srdesigner.io/_assets/diningRoom.jpg", "https://srdesigner.io/_assets/livingRoom.jpg", "https://srdesigner.io/_assets/sinks.jpg" ],
              dkSixTwo: [ "https://srdesigner.io/_assets/FourThree.jpg", "https://srdesigner.io/_assets/bedroom.jpg", "https://srdesigner.io/_assets/mainPool.jpg", "https://srdesigner.io/_assets/kitchen.jpg", "https://srdesigner.io/_assets/gameRoom.jpg" ],
            dkSixThree: [ "https://srdesigner.io/_assets/diningRoom.jpg", "https://srdesigner.io/_assets/sinks.jpg", "https://srdesigner.io/_assets/lounge.jpg", "https://srdesigner.io/_assets/theSpa.jpg", "https://srdesigner.io/_assets/lotion.jpg" ],
             dkSixFour: [ "https://srdesigner.io/_assets/OneFour.jpg", "https://srdesigner.io/_assets/OneOne.jpg", "https://srdesigner.io/_assets/bar.jpg", "https://srdesigner.io/_assets/OneTwo.jpg", "https://srdesigner.io/_assets/anotherRoom.jpg" ],
            dkSevenOne: [ "https://srdesigner.io/_assets/terrace.jpg", "https://srdesigner.io/_assets/theater.jpg", "https://srdesigner.io/_assets/livingRoom.jpg", "https://srdesigner.io/_assets/mainPool.jpg", "https://srdesigner.io/_assets/bar.jpg" ],
            dkSevenTwo: [ "https://srdesigner.io/_assets/FourThree.jpg", "https://srdesigner.io/_assets/kitchen.jpg", "https://srdesigner.io/_assets/mainPool.jpg","https://srdesigner.io/_assets/bedroom.jpg", "https://srdesigner.io/_assets/sinks.jpg" ],
          dkSevenThree: [ "https://srdesigner.io/_assets/FourTwo.jpg", "https://srdesigner.io/_assets/bedroom.jpg", "https://srdesigner.io/_assets/diningRoom.jpg", "https://srdesigner.io/_assets/kitchen.jpg", "https://srdesigner.io/_assets/theVikingRoom.jpg" ],
           dkSevenFour: [ "https://srdesigner.io/_assets/gameRoom.jpg", "https://srdesigner.io/_assets/TwoTwo.jpg", "https://srdesigner.io/_assets/TwoFour.jpg", "https://srdesigner.io/_assets/diningRoom.jpg", "https://srdesigner.io/_assets/balcony.jpg" ],
           dkSevenFive: [ "https://srdesigner.io/_assets/theSpa.jpg", "https://srdesigner.io/_assets/mainPool.jpg", "https://srdesigner.io/_assets/bar.jpg", "https://srdesigner.io/_assets/bedroom.jpg", "https://srdesigner.io/_assets/anotherRoom.jpg" ],
            dkSevenSix: [ "https://srdesigner.io/_assets/FourTwo.jpg", "https://srdesigner.io/_assets/bedroom.jpg", "https://srdesigner.io/_assets/mainPool.jpg", "https://srdesigner.io/_assets/bedroom.jpg", "https://srdesigner.io/_assets/mainPool.jpg" ],
          dkSevenSeven: [ "https://srdesigner.io/_assets/theAtrium.jpg", "https://srdesigner.io/_assets/TwoTwo.jpg", "https://srdesigner.io/_assets/gameRoom.jpg", "https://srdesigner.io/_assets/lounge.jpg", "https://srdesigner.io/_assets/theVikingRoom.jpg" ],
          dkSevenEight: [ "https://srdesigner.io/_assets/kitchen.jpg", "https://srdesigner.io/_assets/TwoTwo.jpg", "https://srdesigner.io/_assets/OneTwo.jpg", "https://srdesigner.io/_assets/sinks.jpg", "https://srdesigner.io/_assets/livingRoom.jpg" ],
           dkSevenNine: [ "https://srdesigner.io/_assets/sinks.jpg", "https://srdesigner.io/_assets/mainPool.jpg", "https://srdesigner.io/_assets/FourOne.jpg", "https://srdesigner.io/_assets/FourFour.jpg", "https://srdesigner.io/_assets/diningRoom.jpg" ]
        }
    };
    return myObj;
});
