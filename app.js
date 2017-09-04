import express from 'express';

const app = express();

app.listen(3000, (err) => {
    if (err) {
        throw new Error(err);
    }
    console.log('Server start at 3000');
})