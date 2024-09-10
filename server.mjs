import cors from 'cors';
import express from 'express';
import home from './routes/home.mjs';

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/', home);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

export default app;
