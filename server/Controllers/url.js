const express = require('express');
const URL = require('../Models/url');
const ShortUniqueId = require('short-unique-id');

async function handleGenerateNewShortURL(req, res) {
    if(!req.body.url) return res.status(400).json({error: 'Please enter the URL!'});

    const uid = new ShortUniqueId({ length: 8 });
    const short = uid.rnd();

    const newEntry = new URL({
        shortID: short,
        redirectURL: req.body.url,
    });

    try {
        const savedEntry = await newEntry.save();
        res.status(201).json(savedEntry);
    } catch (err) {
        res.status(500).json(err);
    }
}

async function handleRedirectToURL(req, res) {
    try {
        const id = req.params.id;
        const entry = await URL.findOne({shortID: id});
        res.status(301).redirect(entry.redirectURL);
    } catch (err) {
        res.status(500).json(err);
    }
    
    // res.status(301).redirect('https://www.google.com');
}

module.exports = {
    handleGenerateNewShortURL, 
    handleRedirectToURL,
};