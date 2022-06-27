// play video
function playVideo()
{
    $("#video").trigger("play");
    $(".film-player").addClass("play");
    //change icon
    $(".play-pause ion-icon").prop("name", "pause-outline");
}
//pause video
function pauseVideo()
{
    $("#video").trigger("pause");
    $(".film-player").removeClass("play");
    //change icon
    $(".play-pause ion-icon").prop("name", "play-outline");

}

// click to play video for the first time
$(".overlay").on("click", function () {
    $(".film-player").addClass("active");
    playVideo();
});

// ready load
$(function () {
    // set duration: (format)
    var duration = $("#video")[0].duration;
    var hours = parseInt(duration / 3600) != 0 ? parseInt(duration / 3600).toString().padStart(2, "0") : null;
    var minutes = parseInt((duration % 3600) / 60).toString().padStart(2, "0");
    var seconds = parseInt(duration % 60).toString().padStart(2, "0");
    console.log(hours + ":" + minutes + ":" + seconds);
    $(".time").html(`<span class="time-left">00:00</span> / ${hours + ":" + minutes + ":" + seconds}`)
})

// toggle play and pause
function playPause(){$(".film-player").hasClass("play") ? pauseVideo() : playVideo();}
$(".film-player__screen").on("click", function (e) {
    if(e.target !== e.currentTarget) return;
    playPause();
});
$('.play-pause').on("click", playPause);

// expand player
$(".full-screen").on("click", function () {
    $("#video").fullScreen();
    $(".full-screen ion-icon").className = $(".full-screen ion-icon").className.includes("expand") ? "contract-outline" : "expand-outline"
});