import express from 'express';
import listRouter from './routes/list.js'

const app = express();
const PORT = 3001;

app.use('/list', listRouter);

app.get('/', (req, res) => {
res.json({status:200, payload:"Welcome to the backend!"})
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});