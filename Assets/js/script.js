$(document).ready(function(){
  
    
    // $(function() {
    //     var SearchButton = document.getElementById("search-button");
    //     SearchButton.onclick = getData;

        // function getData(){

            //VARIABLES

            
            var queryUrl = "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_lyrics=" + lyrics + "&page_size=10&page=1&s_track_rating=desc&apikey=3810df36308c6384072e9fa2a9a3bde3"

            lyrics = $("#lyrics-input")
                .val()
                .trim();


            $("#search-button").on("click", function(event) {
                event.preventDefault();

            

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

    

    