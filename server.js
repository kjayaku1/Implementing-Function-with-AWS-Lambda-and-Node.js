const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;


app.get('/say', async (req, res) => {
  const keyword = req.query.keyword; 

  try {
    
    const response = await axios.get('https://st54st70a9.execute-api.us-east-2.amazonaws.com/default/say', {
      params: { keyword }  
    });

   
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error forwarding request to AWS Lambda');
  }
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

