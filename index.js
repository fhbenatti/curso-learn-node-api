import express from 'express';
import consign from 'consign';
//var express = require('express');

// const PORT = 3000;
const app = express();

// app.set("json spaces", 4);

consign()
    .include("libs/config.js")
    .then("db.js")
    .then("auth.js")
    .then('libs/middlewares.js')
    .then('routes')
    .then('libs/boot.js')
    .into(app);

module.exports = app;

//app.get("/", (req, res) => res.json({status: "NTask API"}));

//app.listen(PORT, () => console.log(`NTask API - porta ${PORT}`));