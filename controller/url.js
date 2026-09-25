const { nanoid } = require("nanoid");
const db = require("../config/db");

async function handleShortUrl(req, res) {

    const body = req.body;

    if (!body.url) {
        return res.status(400).json({
            error: "URL is required"
        });
    }

    const redirectUrl = body.url;
    const shortId = nanoid(8);

    const sql = `
        INSERT INTO urls (short_id, redirect_url)
        VALUES (?, ?)
    `;

    db.query(sql, [shortId, redirectUrl], (err, result) => {

        if (err) {
            console.log(err);

            return res.status(500).json({
                error: "Database error"
            });
        }

        return res.status(201).json({
            shortId: shortId,
            redirectUrl: redirectUrl
        });
    });
}

module.exports = {
    handleShortUrl
};