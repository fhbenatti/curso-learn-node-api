import express from 'express';
import consign from 'consign';
//var express = require('express');

// const PORT = 3000;
const app = express();

// app.set("json spaces", 4);

consign()
    .include("db.js")
    .then('models')
    .then('libs/middlewares.js')
    .then('routes')
    .then('libs/boot.js')
    .into(app);


//app.get("/", (req, res) => res.json({status: "NTask API"}));

//app.listen(PORT, () => console.log(`NTask API - porta ${PORT}`));