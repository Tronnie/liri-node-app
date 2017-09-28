console.log('ombd is connected!');
console.log('\n=====================================');

var ombd = require("request");
var movie = process.argv[3];
// Then run a request to the OMDB API with the movie specified
ombd("http://www.omdbapi.com/?t=" + movie +"&y=&plot=short&apikey=40e9cece", function(error, response, body) {
  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {
    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).

    console.log("The movie's title is: " + JSON.parse(body).Title);
      console.log("\n------------------------------")

    console.log("The movie's was released: " + JSON.parse(body).Year);

    console.log("The movie's Rotten Tomatoes rating is: " + JSON.parse(body).Ratings[1].Value);

    console.log("The movie's IMBD rating is: " + JSON.parse(body).imdbRating);

    console.log("The movie's origin country(s) : " + JSON.parse(body).Country);

    console.log("The movie's language(s) : " + JSON.parse(body).Language);

    console.log("The movie is about: " + JSON.parse(body).Plot);

    console.log("The movie's cast comprises: " + JSON.parse(body).Actors);
    console.log('\n====================================');

  }
});
//use class key &apikey=40e9cece  because mine doesn't work

module.exports = ombd;
