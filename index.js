import express from "express";

const app = express();
app.use(express.json());

// Root test
app.get("/", (req, res) => {
  res.send("OK");
});

// x402 endpoint
app.all("/x402/solana/schedoputer", (req, res) => {
  const payment = req.headers["x-payment"];

  if (!payment) {
    return res.status(402).json({
      x402Version: 1,
      accepts: [
        {
          scheme: "exact",
          network: "solana",
          maxAmountRequired: "100000",
          asset: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
          payTo: "4n9vJHPezhghfF6NCTSPgTbkGoV7EsQYtC2hfaKfrM8U",
          resource: "https://x402-jobs-1.onrender.com/x402/solana/schedoputer"
        }
      ]
    });
  }

  res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
