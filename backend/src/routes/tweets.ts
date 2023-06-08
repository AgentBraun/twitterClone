import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// all tweets
router.get('/', async (req, res) => {
  const allTweets = await prisma.tweet.findMany();
  res.json(allTweets);
});

// get one tweet
router.get('/:tweetID', async (req, res) => {
  const { tweetID } = req.params;
  const tweet = await prisma.tweet.findUnique({ where: { id: Number(tweetID) } });
  res.json(tweet);
});

//create a tweet
router.post('/tweet', async (req, res) => {
  const { content, image, userID } = req.body;
  try {
    const tweet = await prisma.tweet.create({
      data: {
        content,
        image,
        impressions: 0,
        userID,
      },
    });
    res.json(tweet);
  } catch (error) {
    res.status(400).json({ error: 'something went wrong' });
  }
});

// update user
router.put('/:tweetID', async (req, res) => {
  const { tweetID } = req.params;
  res.status(501).json({ error: `not implemented via uptdate tweet with tweetID: ${tweetID}` });
});

// delete user
router.delete('/:tweetID', async (req, res) => {
  const { tweetID } = req.params;
  res.status(501).json({ error: `not implemented via delete tweet with tweetID: ${tweetID}` });
});

export default router;
