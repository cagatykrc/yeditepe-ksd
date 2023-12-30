const express = require('express');
const router = express.Router();
const db = require('../utility/database');

// Ana sayfa
router.get('/', async (req, res) => {
    try {
        // MySQL sorgusu ile dergi verilerini çek
        const [rows, fields] = await db.query('SELECT * FROM dergiler');
        const dergiler = rows;
        res.render('index', { dergiler });
    } catch (error) {
        console.error('Dergi verilerini çekerken bir hata oluştu: ' + error);
        return res.status(500).send('Internal Server Error');
    }
});

module.exports = router;