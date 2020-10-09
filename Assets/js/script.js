
//Lyric search
$(document).ready(function () {
  $("#seach-button").on("click", function () {
    $(".display-results0").remove();
    $(".display-results1").remove();
    $(".display-results2").remove();

    

  
    //VARIABLES
    var lyrics = $("#lyrics-input").val().trim();

    var queryUrl = "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_lyrics=" + lyrics + "&page_size=10&page=1&s_track_rating=desc&apikey=3810df36308c6384072e9fa2a9a3bde3";


    //CALLING API
    $.ajax({
      url: queryUrl,
      method: "GET",
    })
      .then(function (response) {
        response = JSON.parse(response);
        console.log(response);

        //Pulling info from object to be displayed
        // document.getElementById("lyricsResults").innerHTML =
        // console.log(response.message.body.track_list[0].track.artist_name);
        var artistName0 = response.message.body.track_list[0].track.artist_name;
        var trackName0 = response.message.body.track_list[0].track.track_name;
        var albumName0 = response.message.body.track_list[0].track.album_name;

        // document.getElementById("lyricsResults").innerHTML =
        console.log(response.message.body.track_list[1].track.artist_name);
        var artistName1 = response.message.body.track_list[1].track.artist_name;
        var trackName1 = response.message.body.track_list[1].track.track_name;
        var albumName1 = response.message.body.track_list[1].track.album_name;

        // document.getElementById("lyricsResults").innerHTML =
        console.log(response.message.body.track_list[2].track.artist_name);
        var artistName2 = response.message.body.track_list[2].track.artist_name;
        var trackName2 = response.message.body.track_list[2].track.track_name;
        var albumName2 = response.message.body.track_list[2].track.album_name;

        //PUTTING THE INFO INTO THE DOM
        var div0 = $("<div>");
        div0.addClass("display display-results0");
        $("#lyrics-results").append(div0);

        var artist0 = $("<p>");
        $(artist0).append("Artist: ", artistName0);
        $(div0).append(artist0);

        var track0 = $("<p>");
        $(track0).append("Track Name: ", trackName0);
        $(div0).append(track0);

        var album0 = $("<p>");
        $(album0).append("Album Name: ", albumName0);
        $(div0).append(album0);

        console.log(div0);

        var div1 = $("<div>");
        div1.addClass("display display-results1");
        $("#lyrics-results").append(div1);

        var artist1 = $("<p>");
        $(artist1).append("Artist: ", artistName1);
        $(div1).append(artist1);

        var track1 = $("<p>");
        $(track1).append("Track Name: ", trackName1);
        $(div1).append(track1);

        var album1 = $("<p>");
        $(album1).append("Album Name: ", albumName1);
        $(div1).append(album1);


        var div2 = $("<div>");
        div2.addClass("display display-results2");
        $("#lyrics-results").append(div2);

        var artist2 = $("<p>");
        $(artist2).append("Artist: ", artistName2);
        $(div2).append(artist2);

        var track2 = $("<p>");
        $(track2).append("Track Name: ", trackName2);
        $(div2).append(track2);

        var album2 = $("<p>");
        $(album2).append("Album Name: ", albumName2);
        $(div2).append(album2);
      })
  })
})



//Random song Generator
var CLIENTID = "Eq8KSecb2Yz4Lq--EUjuGWH_8OifHCRwdwHr1ztKdLx5Qk_zCZG--AXPSQzMXhL-";
var CLIENTSECRET = "-3Ynmxt9BZab3Qs5sbr_GdzGxXoGqSqbSISFuEQwquYeVm-5-A3nFIcgUOvDSY731GT-hhJtvTK5jYDccT7juQ";
var accessToken = "?access_token=CXyFeSBw2lAdG41xkuU3LS6a_nwyxwwCz2dCkUohw-rw0C49x2HqP__6_4is5RPx";
var API = "https://api.genius.com/search";
var APISong = "https://api.genius.com/songs/";
var songID = "2471960";
var maxSong = 2471960;
//Max song is 489579 for a fairly safe number. But 2 million songs 

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//https://api.genius.com/search?q=Kendrick%20Lamar
var xhr = new XMLHttpRequest(); //XML HTTP Request
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200 || xhr.status === 304) {
      // Success! Do stuff with data.
      //console.log(xhr.responseText); 
    }
  }
};
xhr.open("GET", APISong + songID + accessToken, false);
//xhr.open("GET", API+accessToken+ '&q=Kendrick%20Lamar', false);

xhr.send();
//console.log(xhr.status);
//console.log(xhr.statusText);
demo = xhr.response;

var json = JSON.parse(demo);
var song = json['response']['song'];


function newRandomSong() {
  songID = getRandomInt(1, maxSong);
  randomSong();
}

function randomSong() {
  xhr.open("GET", APISong + songID + accessToken, false);
  xhr.send();
  demo = xhr.response;

  while (xhr.status === 404) { //Checks if the Random Song Exists
    songID = getRandomInt(1, maxSong);
    xhr.open("GET", APISong + songID + accessToken, false);
    xhr.send();
    demo = xhr.response;
  }

  json = JSON.parse(demo);
  song = json['response']['song'];
  document.getElementById("song-image").innerHTML = `<img src="${song['song_art_image_url']}"alt="Some Awesome Album Art" style="width:200px;height:200px;">`;
  // I made these pixel values since I'd rather have overlap on a small screen than the image scaled too small 


  //document.getElementById("song").innerHTML = "SONG: <a href="+song['url']+" >"+song['title'].toUpperCase()+"</a>";
  document.getElementById("song").innerHTML = "SONG: <a target=\"_blank\" href=" + song['url'] + " >" + song['title'].toUpperCase() + "</a>";

  document.getElementById("artist").innerHTML = "ARTIST: <a target=\"_blank\"  href=" + song['primary_artist']['url'] + ">" + song['primary_artist']['name'].toUpperCase() + "</a>";
  document.getElementById("releaseDate").innerHTML = "RELEASE DATE: " + song['release_date'];
}
function tweetSong() {
  window.open('https://twitter.com/intent/tweet?hashtags=songs&text=Found a cool song today. "' + song['title'] + '" by ' + song['primary_artist']['name']);

}

//GETTING STARTED // 
$(document).ready(function () {
  randomSong(); //Using this instead of newRandomSong, because I want to start with the same song every time 
});


