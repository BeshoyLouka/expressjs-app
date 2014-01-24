
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , project = require('./routes/project')
  , http = require('http')
  , path = require('path')
  , db = require('./models');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.post('/users/create', user.create);

app.post('/users/:user_id/projects/create', project.create);
app.get('/users/:user_id/projects/:project_id/destroy', project.destroy);


db.sequelize
            .sync({ force:false })
            .complete(function(err){
                if (err){
                    throw err;
                } else {
                    http.createServer(app).listen(app.get('port'), function(){
                    console.log('Express server listening on port ' + app.get('port'));
                    });
                }
            });
