const express = require('express');

const app = express();
const PORT = 8888;

app.get('/status', (req, res) => {
	res.status(200).send(`Status`);
});

app.get('*', (req, res) => {
	res.sendStatus(404);
});

app.listen(PORT, () => console.log(`running on http://localhost:${PORT}`));
