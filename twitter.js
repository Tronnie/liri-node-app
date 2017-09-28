console.log('this is twitter');
console.log('\n=======================================');

function myTweets() {
    var command = process.argv[2];
    var Twitter = require('twitter');
    // var client = require("./keys.js");
    var client = new Twitter({
      consumer_key: '5xZeqfEw0VJ2Sa0JwhpKAfHSO',
      consumer_secret: 'FRErUvxcohp8rO0gdoWBMcSxr17QGMbvoORbynziOcmUax8oIl',
      access_token_key: '119831262-Mu0E0XyCcfVtgzFBIw629kVwBX6rP883b8HBwGrN',
      access_token_secret: 'TP3srDbXe9BCfgpYAnFX8iuo3oFQJz9CLDTCx0bk6Dx20',
    });

    var screenName = {screen_name:'Bubs35327045'};

      client.get('statuses/user_timeline', screenName, displayTwitterData);


      function displayTwitterData(error, data, response){
        var tweets = data.text;
        var date = data.created_at;

          if(command){
            for (var i=0; i<=20; i++){
              if(!error){
                console.log("This is a tweet: " + data[i].text + "\n" + "created on: " + data[i].created_at + "\n----------------------------------------------------");
              }; //<--error
            };
          };
        }; //<--displayTwitterData;
      }; //<--myTweets()

      // if(error) throw error;
      // console.log(tweet);  // Tweet body.



  // displayTwitterData();




  myTweets();


module.exports = myTweets;


//     client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
//    console.log(tweets);
// }); <--from npm twitter

      //https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline
