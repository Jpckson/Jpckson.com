import express from 'express';
import compression from 'compression';
import path from 'path';

const app = express();
const port = 3232;

app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

// fallback
app.use((req, res) => {
    if (req.accepts('html')) {
        res.status(404).redirect('/');
    } else {
        res.status(404).json({ error: { message: 'Route not found', statusCode: 404 } });
    }
});

app.listen(port, () => {
    console.log(`Serving public files at http://localhost:${port}`)
})