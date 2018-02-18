var player = $('#player'); // samochod użytkownika
var position = player.position();


function playerHorizontalMove(oneStep) {
    player.animate({
        'marginLeft': oneStep
    }, {
        'duration': 100,
        'easing': 'linear'
    });
}

function playerVerticalMove(oneStep) {
    player.animate({
        'marginTop': oneStep
    }, {
        'duration': 100,
        'easing': 'linear'
    });
}

$(document).keydown(function (e) {
    switch (e.which) {

        case 37: // left
            playerHorizontalMove("-=30px");
            break;

        case 39: // right
            playerHorizontalMove("+=30px");
            break;

        case 38: // up
            playerVerticalMove("-=30px");
            break;

        case 40: // down
            playerVerticalMove("+=30px");
            break;
    }
});
