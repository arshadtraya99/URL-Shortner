const { nanoid } = require('nanoid');
const db = require('../config/db')

async function handleShortUrl(req , res) {
    const shortId = nanoid(8);
    
}