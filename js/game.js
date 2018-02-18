var container = $('#road-game'); // droga
var player = $('#player'); // samochod użytkownika
var $game = $('#game');
var roadGameWidth = $('#road-game').outerWidth();
var roadGameHeight = $('#road-game').outerHeight();
var playerWidth = $('#player').outerWidth();
var playerHeight = $('#player').outerHeight();
var position = player.position();



// $(window).resize = function () {
//     gameWidth = $game.Width()
// };


console.log(roadGameHeight);
console.log(roadGameWidth);
console.log(position);


function playerMove(oneStep) {
    player.animate({
        'marginLeft': oneStep
    }, {
        'duration': 100,
        'easing': 'linear'
    });
}

function isMoveHorizontalPossible(oneStep, playerSize) {
    if (position.left + oneStep + playerSize > roadGameWidth ) {
        console.log("ok");
        return false;
    } else {
        console.log("wyjszłeś");
        return true;
    }
}

function isMoveVerticalPossible(oneStep, playerSize) {
    if (position.top + oneStep + playerSize > roadGameHeight ) {
        console.log("ok");
        return false;
    } else {
        console.log("wyjszłeś");
        return true;
    }
}


$(document).keydown(function (e) {
    switch (e.which) {
        case 37: // left
            player.animate({
                'marginLeft': "-=30px" //moves left
            }, {
                'duration': 100,
                'easing': 'linear'
            });
            isMoveHorizontalPossible(-30, 0);
            break;

        case 39: // right
            player.animate({
                'marginLeft': "+=30px" //moves right
            }, {
                'duration': 100,
                'easing': 'linear'
            });
            isMoveHorizontalPossible(30, playerWidth);
            break;

        case 38: // up
            player.animate({
                'marginTop' : "-=30px" //moves up
            }, {
                'duration': 100,
                'easing': 'linear'
            });
            isMoveVerticalPossible(-30, 0);
            break;

        case 40: // down
            player.animate({
                'marginTop' : "+=30px" //moves down
            }, {
                'duration': 100,
                'easing': 'linear'
            });
            isMoveVerticalPossible(30, playerHeight);
            break;
    }
});


