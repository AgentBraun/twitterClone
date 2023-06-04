import express from 'express';
import userRoutes from './routes/users';
import tweetRoutes from './routes/tweets';

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/tweets', tweetRoutes);

app.get('/', (req, res) => {
  res.send('hello world');
});
app.listen(5001, () => {
  console.log('server online on port: 5001');
});
