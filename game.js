var team1;
var team2;
var playingTeam = 1;
var gameTime = 10;

function startUI() {
    $("section").hide();
    $("#intro").fadeIn();
}

function setupGame() {

    $("section").hide();
    $("#setup").fadeIn();

    // Todo: Add validation

    $("#setup #next").click(function () {
        team1 = $("#setup #team1").val();
        team2 = $("#setup #team2").val();

        $("section").hide();
        $("#countdown").fadeIn();
        setTimeout(function () { gameround(playingTeam) }, 3000);
    });
}

function gameround(currentTeam) {
    gameTimeElement = $("#gameround #gameround-countdown");
    isTimeLeft = true;
    currenGameTime = gameTime;

    $("section").hide();
    $("#gameround").fadeIn();

    gameTimeElement.html(gameTime);

    
       timer = setInterval(function () {

            currenGameTime -= 1;
            gameTimeElement.html(currenGameTime);
            
            if(currenGameTime == 0){
                clearInterval(timer);
            }
        }, 1000);
    
}

$(function () {
    startUI();

    $("#intro #play").click(function () {
        setupGame();
    });




});