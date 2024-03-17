const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/check', (req, res) => {
    const name = req.body.name.toLowerCase();
    if (name.startsWith('a') && name.endsWith('a')) {
        res.send(`<h2>true</h2>`);
    } else {
        res.send(`<h2>false</h2>`);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
