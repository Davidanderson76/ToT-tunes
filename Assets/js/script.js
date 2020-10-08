
//Lyric search
$(document).ready(function(){

    $("#search-button").on("click", function(event) {
     
        var lyrics = $("#lyrics-input").val().trim();
        var queryUrl = "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_lyrics=" + lyrics + "&page_size=10&page=1&s_track_rating=desc&apikey=3810df36308c6384072e9fa2a9a3bde3";

        console.log("#lyrics-input");
    
    //CALLING API
    $.ajax({
        url: queryUrl,
        method: "GET",
    })
    .then (function(response){
        response = JSON.parse(response);
        console.log(response);

        //Pulling info from object to be displayed
        // document.getElementById("lyricsResults").innerHTML =
        console.log(response.message.body.track_list[0].track.artist_name);
        var artistName1 = response.message.body.track_list[0].track.artist_name
        var trackName1 =response.message.body.track_list[0].track.track_name;
        var albumName1 = response.message.body.track_list[0].track.album_name;

        // document.getElementById("lyricsResults").innerHTML =
        console.log(response.message.body.track_list[1].track.artist_name);
        var artistName2 = response.message.body.track_list[1].track.artist_name;
        var trackName2 = response.message.body.track_list[1].track.track_name;
        var albumName2 = response.message.body.track_list[1].track.album_name;

        // document.getElementById("lyricsResults").innerHTML =
        console.log(response.message.body.track_list[2].track.artist_name);
        var artistName3 = response.message.body.track_list[2].track.artist_name
        var trackName3 = response.message.body.track_list[2].track.track_name;
        var albumName3 = response.message.body.track_list[2].track.album_name;

        //PUTTING THE INFO INTO THE DOM
        var newDiv1 = $("<div>");

        $("#lyrics-input-div").append(newDiv1);

        $(newDiv1).append("Artist: ",artistName1, " Track Name: ", trackName1, " Album Name: ", albumName1);

        var newDiv2 = $("<div>");

        $("#lyrics-input-div").append(newDiv2);

        $(newDiv2).append("Artist: ", artistName2, " Track Name: ",trackName2, " Album Name: ", albumName2);

        var newDiv3 = $("<div>");

        $("#lyrics-input-div").append(newDiv3);

        $(newDiv3).append("Artist: ",artistName3, " Track Name: ", trackName3, " Album Name: ",albumName3);

       event.preventDefault();
    })})

    


//Random song Generator
 
var CLIENTID = "vPFP_u36FIQ7Czwl_B4HRmaNTOnGIisC9SlJxKZtxukqJaglGFkXumkOzUerC9Zh";
var CLIENTSECRET = "ojOMG__TmTvQBP6SkuKAp2BEtAMGnq0x4nkQqNJnDg4g33dd9YrcqZqzsxYsrcOAaytMhZpSOXM10Td4dKA4gA";
var accessToken= "6eec9ipaKO7qvMCQwowP0lVc4JALwJSbNh3GWBS_xQIig6QraQqnoU33Fk7CiTgt";
var API = "https://api.genius.com/search";
var APISong = "https://api.genius.com/songs/";
var songID = "2471960";
var maxSong= 2471960; 
//Max song is 489579 for a fairly safe number. But 2 million songs 

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  $.ajax({
    url: API,
    method:"GET",
  }).then(function(response){
    var result = response.data;

    result.onreadystatechange = function() {
  if (result.readyState === 4) {
    if (result.status === 200 || result.status === 304) {
      // Success! Do stuff with data.
      console.log(result.responseText); 
    }
  }
};
result.open("GET", APISong+songID+accessToken, false);

console.log(result.status);
console.log(result.statusText);
demo=result.response;

var json = JSON.parse(demo);
var song = json['response']['song'];


function newRandomSong() {
  songID =getRandomInt(1,maxSong);
  randomSong();
}

function randomSong(){
  result.open("GET", APISong+songID+accessToken, false);
  result.send(); 
  demo=result.response;
  
  while (result.status===404){ //Checks if the Random Song Exists
      songID =getRandomInt(1,maxSong);
      result.open("GET", APISong+songID+accessToken, false);
      result.send(); 
      demo=result.response;
  }
  
  json = JSON.parse(demo);
  song = json['response']['song'];
  document.getElementById("songImage").innerHTML = "<img src=\""+song['song_art_image_url']+"\"alt=\"Some Awesome Album Art\" style=\"width:200px;height:200px;\">";
  // I made these pixel values since I'd rather have overlap on a small screen than the image scaled too small 
 

//document.getElementById("song").innerHTML = "SONG: <a href="+song['url']+" >"+song['title'].toUpperCase()+"</a>";
document.getElementById("song").innerHTML = "SONG: <a target=\"_blank\" href="+song['url']+" >"+song['title'].toUpperCase()+"</a>";
  
document.getElementById("artist").innerHTML = "ARTIST: <a target=\"_blank\"  href="+song['primary_artist']['url']+">"+song['primary_artist']['name'].toUpperCase()+"</a>";
document.getElementById("releaseDate").innerHTML = "RELEASE DATE: "+song['release_date'];
}

//GETTING STARTED // 

 newRandomSong();
});

console.log(randomSong);
console.log(newRandomSong);

})
