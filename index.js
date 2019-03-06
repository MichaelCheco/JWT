const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8888;
const users = [
	{ id: 1, username: 'michael', password: 'password' },
	{ id: 2, username: 'dave', password: 'password' },
	{ id: 3, username: 'jessica', password: 'password' },
];

app.post('/login', (req, res) => {
	const { username, password } = req.body;
	if (!username || !password) {
		res.status(400).send('Provide a username & Password');
		return;
	}
	const user = users.find(
		u => u.username === username && u.password === password
	);
	if (!user) {
		res.status(401).send('User not found');
		return;
	}
	const token = jwt.sign({ sub: user.id, username: user.username }, 'secret');

	res.status(200).send({ access_token: token });
});

app.get('/status', (req, res) => {
	res.status(200).send(`Status`);
});

app.get('*', (req, res) => {
	res.sendStatus(404);
});

app.listen(PORT, () => console.log(`running on http://localhost:${PORT}`));
