$(document).ready(function(){

    //VARIABLES
    var lyrics =   "American Idiot";        //$("#lyricsInput").val().trim();

    var queryUrl = "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_lyrics=" + lyrics + "&page_size=10&page=1&s_track_rating=desc&apikey=3810df36308c6384072e9fa2a9a3bde3";
    

    //CALLING API
    $.ajax({
        url: queryUrl,
        method: "GET",
    }).then (function(response){
        response = JSON.parse(response);
        console.log(response);

        //Pulling info from object to be displayed
        document.getElementById("lyricsResults").innerHTML =
        console.log(response.message.body.track_list[0].track.artist_name);
        response.message.body.track_list[0].track.artist_name
        response.message.body.track_list[0].track.track_name;
        response.message.body.track_list[0].track.album_name;

        document.getElementById("lyricsResults").innerHTML =
        console.log(response.message.body.track_list[1].track.artist_name);
        response.message.body.track_list[1].track.artist_name;
        response.message.body.track_list[1].track.track_name;
        response.message.body.track_list[1].track.album_name;

        document.getElementById("lyricsResults").innerHTML =
        console.log(response.message.body.track_list[2].track.artist_name);
        response.message.body.track_list[2].track.artist_name
        response.message.body.track_list[2].track.track_name;
        response.message.body.track_list[2].track.album_name;

        

    });

})