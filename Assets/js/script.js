
//Lyric search
$(document).ready(function(){




    $("#search-button").on("click", function(event) {
    event.preventDefault();

    
    //VARIABLES
    var lyrics =     $("#lyrics-input").val().trim();
    

console.log("#lyrics-input");
    var queryUrl = "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_lyrics=" + lyrics + "&page_size=10&page=1&s_track_rating=desc&apikey=3810df36308c6384072e9fa2a9a3bde3";
    

    //CALLING API
    $.ajax({
        url: queryUrl,
        method: "GET",
    }).then (function(response){
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

        $("#lyricsInputDiv").append(newDiv1);

        $(newDiv1).append("Artist: ",artistName1, " Track Name: ", trackName1, " Album Name: ", albumName1);

        var newDiv2 = $("<div>");

        $("#lyricsInputDiv").append(newDiv2);

        $(newDiv2).append("Artist: ", artistName2, " Track Name: ",trackName2, " Album Name: ", albumName2);

        var newDiv3 = $("<div>");

        $("#lyricsInputDiv").append(newDiv3);

        $(newDiv3).append("Artist: ",artistName3, " Track Name: ", trackName3, " Album Name: ",albumName3);


    })})

    


// //Random song Generator
 
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

//https://api.genius.com/search?q=Kendrick%20Lamar
var xhr = new XMLHttpRequest(); //XML HTTP Request
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if (xhr.status === 200 || xhr.status === 304) {
      // Success! Do stuff with data.
      console.log(xhr.responseText); 
    }
  }
};
xhr.open("GET", APISong+songID+accessToken, false);
//xhr.open("GET", API+accessToken+ '&q=Kendrick%20Lamar', false);

xhr.send(); 
console.log(xhr.status);
console.log(xhr.statusText);
demo=xhr.response;

var json = JSON.parse(demo);
var song = json['response']['song'];


function newRandomSong() {
  songID =getRandomInt(1,maxSong);
  randomSong();
}

function randomSong(){
  xhr.open("GET", APISong+songID+accessToken, false);
  xhr.send(); 
  demo=xhr.response;
  
//   while (xhr.status===404){ //Checks if the Random Song Exists
//       songID =getRandomInt(1,maxSong);
//       xhr.open("GET", APISong+songID+accessToken, false);
//       xhr.send(); 
//       demo=xhr.response;
//   }
  
//   json = JSON.parse(demo);
//   song = json['response']['song'];
//   document.getElementById("songImage").innerHTML = "<img src=\""+song['song_art_image_url']+"\"alt=\"Some Awesome Album Art\" style=\"width:200px;height:200px;\">";
//   // I made these pixel values since I'd rather have overlap on a small screen than the image scaled too small 
 

// //document.getElementById("song").innerHTML = "SONG: <a href="+song['url']+" >"+song['title'].toUpperCase()+"</a>";
// document.getElementById("song").innerHTML = "SONG: <a target=\"_blank\" href="+song['url']+" >"+song['title'].toUpperCase()+"</a>";
  
// document.getElementById("artist").innerHTML = "ARTIST: <a target=\"_blank\"  href="+song['primary_artist']['url']+">"+song['primary_artist']['name'].toUpperCase()+"</a>";
// document.getElementById("releaseDate").innerHTML = "RELEASE DATE: "+song['release_date'];
// 
}

//GETTING STARTED // 
$(document).ready(function() {
  newRandomSong(); //Using this instead of newRandomSong, because I want to start with the same song every time 
});
console.log(randomSong);
console.log(newRandomSong);

});