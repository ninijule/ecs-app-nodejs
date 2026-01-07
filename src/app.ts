import express from 'express';

const app = express();

app.use(express.json());


app.listen(80, () => {
    console.log(`Server running on port 80`);
});

app.get('/', (_req, res) => {
    res.send('GET request to the homepage');
});

app.get('/health', (_req, res) => {
    res.send('ping');
});
