//GLOBAL VARIABLES FOR REQUESTING FILES AND SITE INFO
var fs = require('fs');

var twitter = require("./twitter.js");

var spotify = require ("./spotify.js");

var ombd = require("./ombd.js");

var command = process.argv[2];

var input = process.argv[3];






if (command === 'my-tweets'){
    twitter.getData();
  }

// function liri(){
//   if (command === 'my-tweets'){
//     console.log(twitter)
//   }else if (command === 'movie-this'){
//     console.log(ombd)
//   }else (command === 'spotify-this-song'){
//     console.log(spotify)
//   }
// };
//
// liri()


//   };
//   if (command === 'spotify-this-song'){
//     function(spotify);
//   };
  // if (command === 'movie-this'){
  //   ombd(input);

//   if (command === 'do-what-it-says'){
//     function(random.txt);
//   };
