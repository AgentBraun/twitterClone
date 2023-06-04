import express from 'express';
//import * as userController from "";

const router = express.Router();

// all users
router.get('/', (req, res) => {
  res.status(501).json({ error: 'not implemented Get all users' });
});

// get one user
router.get('/:userID', (req, res) => {
  const { userID } = req.params;
  res.status(501).json({ error: `not implemented via create a userID: ${userID}` });
});

router.post('/user', (req, res) => {
  res.status(501).json({ error: 'not implemented create a user' });
});

// update user
router.put('/:userID', (req, res) => {
  const { userID } = req.params;
  res.status(501).json({ error: `not implemented via uptdate userID: ${userID}` });
});

// delete user
router.delete('/:userID', (req, res) => {
  const { userID } = req.params;
  res.status(501).json({ error: `not implemented via userID: ${userID}` });
});

export default router;
