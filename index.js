import express from "express";

const app = express();
app.use(express.json());

// ROOT ROUTE (this fixes your error)
app.get("/", (req, res) => {
  res.send("OK");
});

// x402 test route
app.all("/x402/solana/myagent", (req, res) => {
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
          payTo: "9Y7GFQ7dqiCiGHSi9ub6S45wkA6UQsaLQESvN9k8ccGo",
          resource: "https://x402-jobs.onrender.com/x402/solana/myagent"
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
