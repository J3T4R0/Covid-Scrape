process.on('SIGINT', function() {
   db.stop(function(err) {
     process.exit(err ? 1 : 0);
   });
});

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))