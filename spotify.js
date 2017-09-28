console.log ("spotify is connected!");
console.log('\n========================================');

function spotifyThis(){

    var command = process.argv[2];
    var input = process.argv[3];


    var Spotify = require('node-spotify-api');

    var spotify = new Spotify({
      id: '101f07f847564da6953438c283beb008',
      secret: '611d311847de4caea5038d039e8b8a25',
    });

    spotify.search({ type: 'track', query: input }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }

// console.log(data.tracks.items[0].album.artists[0].name);
console.log("\n===============play the music============================" + "\nthe song is: " + (input) + "\nthe band is:" + (data.tracks.items[0].album.artists[0].name) + "\nthe album is: " + (data.tracks.items[0].album.name) + "\ncheck out the link: " + (data.tracks.items[0].album.external_urls.spotify));
    // console.log("\n===============play the music============================" + JSON.stringify(data, null, 4))
    });

    // console.log(spotify);

                    //   var parameters = {
                    //     type: 'track',
                    //     query: input,
                    //   };
                    //   spotify.search(parameters, displaySpotifyData);
                    //   function displaySpotifyData(error, data) {
                    //       console.log(data);
                    //       if (!error) {
                    //           console.log(data.tracks.items[0].album.artists[0].name);
                    //           console.log(data.tracks.items[0].album.artists[0].song);
                    //   };
                    // };
} //<--spotifyThis()

spotifyThis();

module.export = spotifyThis;
