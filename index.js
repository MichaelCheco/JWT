const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8888;

app.post('/login', (req, res) => {
	const user = req.body.username;

	res.status(200).send(`You logged in with ${user}`);
});

app.get('/status', (req, res) => {
	res.status(200).send(`Status`);
});

app.get('*', (req, res) => {
	res.sendStatus(404);
});

app.listen(PORT, () => console.log(`running on http://localhost:${PORT}`));
