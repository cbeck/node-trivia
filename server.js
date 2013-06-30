// Classes
    var express     = require('express'), app = express.createServer()
      , less        = require('less')
      , io          = require('socket.io'), socket = io.listen(app)
      , a_config    = require('./config/core.js').config;
      
    require('./lib/sockets.js').start(app);

// Config
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(express.session({ secret: 'blahblah' }));
    app.use(express.methodOverride());
    app.use(express.compiler({src: __dirname + '/public', enable: ['less']}));
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));

    app.dynamicHelpers({
        session: function (req, res) {
            return req.session;
        }
    });

// Routing

    /* public */
    var public  = require('./controllers/public');
    app.get('/',                    public.index);
    app.get('/play',                public.play);
    app.get('/view',                public.view);


// set port
    app.listen(4000); //change to port 80 to go live
    