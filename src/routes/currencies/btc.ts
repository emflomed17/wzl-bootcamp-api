import express, { Request, Response, Router } from 'express';
import getBitcoinPrice from '../../util/getBitcoinData';

const router: Router = express.Router();

// @desc Get BTC pricing
// @route GET /api/v1/btc
// @access Public
router.get('/', async (req: Request, res: Response) => {
    console.log(`Request ${req.method}`);
  try {
    const btcData = await getBitcoinPrice();
    res.status(200).json({
      success: true,
      data: btcData,
    });
  } catch (err) {
      res.status(400).json({ success: false });
  }
});

export default router;
