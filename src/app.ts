import express from 'express';

const app = express();

app.use(express.json());


app.listen(80, () => {
    console.log(`Server running on port 80`);
});

app.get('/', (req, res) => {
    res.send('GET request to the homepage');
});