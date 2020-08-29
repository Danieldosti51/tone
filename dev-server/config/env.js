import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

export function setEnvironment(app) {
    if (process.env.NODE_ENV.trim() !== 'production') {
        setDevEnv(app);
    } else {
        setProdEnv(app);
    }
}

function setDevEnv(app) {
    console.log("Setting up development environment");

    process.env.NODE_ENV = 'development';
    process.env.DB_URL = 'mongodb://localhost:27017/track-db';
    process.env.TOKEN_SECRET = '$SCv{IMZfaaBE`d,.^;nB>qG~o9+yjLsVPn$[Or}u|;yap0BrTe7&J&`/1cfJu-';
    app.use(express.urlencoded());
    app.use(express.json());
    app.use(morgan('dev'));
    app.use(cors());
}

function setProdEnv(app) {
    console.log("Setting up production environment");

    process.env.DB_URL = 'mongodb://localhost:27017/track-db';
    process.env.TOKEN_SECRET = '1b}Ti6H+4+WdnW}n`YTr(5TDmJgYE{AyAegW9.!o">M@Dx/-0>ak#clad3]d:}u';
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static(__dirname + '/../dist'));
}
