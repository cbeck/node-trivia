
/* Homepage */
exports.index = function(req, res){

    res.render( 'homepage', {
        title: "Node Trivia!",
        test: 'TRIVIA!!!'
    });
}

/* Play */
exports.play = function(req, res){

    res.render( 'play', {
        title: "Play - Node Trivia!",
        test: 'TRIVIA!!!'
    });
}

/* View */
exports.view = function(req, res){

    res.render( 'view', {
        title: "View - Node Trivia!",
        test: 'TRIVIA!!!'
    });
}
