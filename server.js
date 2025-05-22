const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const app = express();

// Load environment variables
dotenv.config();

// Serve static files
app.use(express.static(path.join(__dirname)));

// Endpoint to get API key
app.get("/api/key", (req, res) => {
  res.json({ apiKey: process.env.GOOGLE_SHEETS_API_KEY });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
