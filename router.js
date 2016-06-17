
//Handle HTTP route GET / and POST / ie home
function homeRoute(request,response){ 

  //if url is present look for '/', then run rest
  if(request.url === '/'){

    response.writeHead(400,{'Content-Type': 'text/plain'});
    response.write('Header\n');
    response.write('Search\n');
    response.end('Footer\n');
  }
}

//Handle http route GET /:username i.e. /kathrynlukszys
function userRoute(request,response){
  var username = request.url.replace('/', '');

  if (username.length > 0) {
    response.writeHead(400,{'Content-Type': 'text/plain'});
    response.write('Header\n');
    //get json from treehouse
    var studentProfile = new Profile(username);
    //on end
    studentProfile.on('end', function(profileJSON){
      //show profile
      //store values which we need
      var values = {
        avatarUrl: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javaScriptPoints: profileJSON.points.JavaScript
      }
      //simple response
      response.write(values.username + " has " +values.badges+" badges.\n");
      response.write(values.username + " has " +values.javaScriptPoints+" javascript points.\n");
    });
    studentProfile.on('error', function(error){
      //show error

    });

    response.end('Footer\n');
  }
}

module.exports.home = homeRoute;
module.exports.user = userRoute;
