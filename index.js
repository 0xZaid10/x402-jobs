const express = require("express");
const app = express();

app.use(express.json());

app.get("/x402/solana/myagent", (req, res) => {
  const payment = req.headers["x-payment"];

  // 🔴 PAYMENT CHECK — MUST BE FIRST
  if (!payment) {
    return res.status(402).json({
      x402Version: 1,
      accepts: [
        {
          scheme: "exact",
          network: "solana",
          maxAmountRequired: "100000", // 0.1 USDC (example)
          asset: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
          payTo: "REPLACE_WITH_YOUR_SOLANA_WALLET",
          resource: "https://REPLACE_AFTER_RENDER/x402/solana/myagent"
        }
      ]
    });
  }

  // 🟢 PAID PATH (stub)
  return res.json({
    success: true,
    message: "Payment received. Job executed."
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
