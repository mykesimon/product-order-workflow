import 'dotenv/config';
import express from 'express';
import axios from 'axios';
import https from 'https';
import bodyParser from 'body-parser';

const agent = new https.Agent({
	rejectUnauthorized: false,
});

const app = express();
const port = process.env.PORT || 5008;
const apiUrlEndpoint = process.env.API_ENDPOINT;

app.use(bodyParser.json());

// Returns a list of products categorie in alphabetical order
app.get('/api/product_categories', async (req, res) => {
	try {
		// Make a request to the external API
		const response = await axios.get(`${apiUrlEndpoint}/product_categories`, {
			httpsAgent: agent,
		});

		const sortedCategories = response.data.sort((a, b) => a.attributes.name.localeCompare(b.attributes.name));

		// Send the data from the external API as the response
		res.json(sortedCategories);
	} catch (error) {
		console.error('Error fetching data from the external API:', error);
		res.status(500).json({ error: 'An error occurred while fetching data.' });
	}
});

// Start the Express server
app.listen(port, () => {
	console.log(`Server is running on port http://localhost:${port}`);
});