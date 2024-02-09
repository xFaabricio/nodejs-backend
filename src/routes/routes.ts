import express from 'express';

const router = express.Router();

/**
 * @swagger
 * paths:
 *  /serverUp:
 *   get:
 *     summary: Retorna uma mensagem de 'Server is up and running!'
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Server is up and running!'
 */
router.get('/serverUp', (req, res) => {
  res.json({ message: 'Server is up and running!' });
});

export default router;