// Load your .env file
require("dotenv").config({ path: __dirname + "/.env" });



// Bring in tools
const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = 3000;

const GOVEE_API_KEY = process.env.GOVEE_API_KEY;
const BASE_URL = "https://developer-api.govee.com/v1";
console.log("Using Govee Key:", process.env.GOVEE_API_KEY);
// Setup to understand JSON and serve files
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));

// 🎯 Endpoint: List all your Govee devices
app.get("/devices", async (req, res) => {
  try {
    const result = await axios.get(`${BASE_URL}/devices`, {
      headers: { "Govee-API-Key": GOVEE_API_KEY },
    });
    res.json(result.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 💡 Endpoint: Turn device on/off or send commands
app.post("/control", async (req, res) => {
  const { device, model, command } = req.body;

  try {
    const result = await axios.put(`${BASE_URL}/devices/control`, {
      device,
      model,
      cmd: command,
    }, {
      headers: { "Govee-API-Key": GOVEE_API_KEY },
    });
    res.json(result.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start your brain!
app.listen(PORT, () => console.log(`🧠 Server running at http://localhost:${PORT}`));

