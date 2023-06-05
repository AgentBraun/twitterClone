import express from 'express';
import { PrismaClient } from '@prisma/client';
//import * as userController from "";

const router = express.Router();
const prisma = new PrismaClient();

// all users
router.get('/', async (req, res) => {
  const allUsers = await prisma.user.findMany();
  res.json(allUsers);
});

// get one user
router.get('/:userID', async (req, res) => {
  const { userID } = req.params;

  const user = await prisma.user.findUnique({ where: { id: Number(userID) } });

  res.json(user);
});

//create a user
router.post('/newuser', async (req, res, next) => {
  const { email, name, username } = req.body;
  try {
    const results = await prisma.user.create({
      data: {
        email,
        name,
        username,
        bio: 'hello, im new on twitter',
      },
    });
    res.json(results);
  } catch (error) {
    res.status(400).json({ error: 'username and email should be unique' });
  }
});

// update user
router.put('/:userID', async (req, res) => {
  const { userID } = req.params;
  const { bio, name, image } = req.body;

  try {
    const result = await prisma.user.update({
      where: { id: Number(userID) },
      data: { bio, name, image },
    });
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update the user' });
  }
});

// delete user
router.delete('/:userID', async (req, res) => {
  const { userID } = req.params;
  await prisma.user.delete({
    where: { id: Number(userID) },
  });
  res.sendStatus(202);
});

export default router;
