const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Endpoint that will forward requests to your AWS Lambda function
app.get('/say', async (req, res) => {
  const keyword = req.query.keyword;  // Get the 'keyword' query param

  try {
    // Use Axios to forward the request to your AWS Lambda function (kalai.js)
    const response = await axios.get('https://st54st70a9.execute-api.us-east-2.amazonaws.com/default/say', {
      params: { keyword }  // Forward the 'keyword' query param
    });

    // Send back the response from Lambda to the client
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error forwarding request to AWS Lambda');
  }
});

// Start the local server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

