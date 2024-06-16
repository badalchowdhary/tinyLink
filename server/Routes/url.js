const express = require('express');
const { handleGenerateNewShortURL, handleRedirectToURL } = require('../Controllers/url.js');

const router = express.Router();

router.post('/', handleGenerateNewShortURL);
router.get('/:id', handleRedirectToURL);

module.exports = router;