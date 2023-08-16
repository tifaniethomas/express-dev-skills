var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override')

var indexRouter = require('./routes/index');
var skillsRouter = require('./routes/skills');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// mount middleware into the middleware/request pipeline
// app.use(<middleware function>)

// log in the terminal the http request info
app.use(logger('dev')); 
//processes data sent n the body of the request if it's json
app.use(express.json());
//processes data sent in 'form' body of the request
//creates property on req.body for each <nput>, <select> andor <text area> in the form
app.use(express.urlencoded({ extended: false }));
// add a cookies property for eachcookie sent in the request
app.use(cookieParser());
//if the request is for a static asset, returns the file 
app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'))

// gets local time
app.use(function(req, res, next) {
  res.locals.time = new Date().toLocaleTimeString()
  next()
})

app.use('/', indexRouter);
app.use('/skills', skillsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
