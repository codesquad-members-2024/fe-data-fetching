import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser'; //npm i --save-dev @types/cookie-parser
import logger from 'morgan'; //npm i --save-dev @types/morgan

import indexRouter from './routes/index';
import usersRouter from './routes/users';

const app = express();

// *view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// *index
app.use('/', indexRouter);
app.use('/users', usersRouter);

// *catch 404 and forward to error handler
app.use(function (req: any, res: any, next: any) {
    next(createError(404));
});

// *error handler
app.use(function (err: any, req: any, res: any, next: any) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
