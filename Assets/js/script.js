$(document).ready(function(){
    var lyrics = "American idiot";
    var queryUrl = "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_lyrics=" + lyrics + "&page_size=10&page=1&s_track_rating=desc&apikey=3810df36308c6384072e9fa2a9a3bde3";
    


    $.ajax({
        url: queryUrl,
        method: "GET",
    }).then (function(response){
        console.log(response);
    });
})


