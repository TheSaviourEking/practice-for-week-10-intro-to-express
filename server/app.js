const express = require('express');
const app = express();

app.get('/status', (req, res) => {
    res.send('The server is alive!');
})

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));