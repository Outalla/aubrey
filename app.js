const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
	console.log('Get request works!');
	res.json({ message: 'It works!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
