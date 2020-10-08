
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
        response.message.body.track_list[0].track.artist_name
        response.message.body.track_list[0].track.track_name;
        response.message.body.track_list[0].track.album_name;

        // document.getElementById("lyricsResults").innerHTML =
        console.log(response.message.body.track_list[1].track.artist_name);
        response.message.body.track_list[1].track.artist_name;
        response.message.body.track_list[1].track.track_name;
        response.message.body.track_list[1].track.album_name;

        // document.getElementById("lyricsResults").innerHTML =
        console.log(response.message.body.track_list[2].track.artist_name);
        response.message.body.track_list[2].track.artist_name
        response.message.body.track_list[2].track.track_name;
        response.message.body.track_list[2].track.album_name;

        

    });


//Random song Generator
 
var CLIENTID = "Eq8KSecb2Yz4Lq--EUjuGWH_8OifHCRwdwHr1ztKdLx5Qk_zCZG--AXPSQzMXhL-";
var CLIENTSECRET = "-3Ynmxt9BZab3Qs5sbr_GdzGxXoGqSqbSISFuEQwquYeVm-5-A3nFIcgUOvDSY731GT-hhJtvTK5jYDccT7juQ";
var accessToken= "?access_token=CXyFeSBw2lAdG41xkuU3LS6a_nwyxwwCz2dCkUohw-rw0C49x2HqP__6_4is5RPx";
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
  
  while (xhr.status===404){ //Checks if the Random Song Exists
      songID =getRandomInt(1,maxSong);
      xhr.open("GET", APISong+songID+accessToken, false);
      xhr.send(); 
      demo=xhr.response;
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
$(document).ready(function() {
  randomSong(); //Using this instead of newRandomSong, because I want to start with the same song every time 
});
console.log(randomSong);
console.log(newRandomSong);

})
})
