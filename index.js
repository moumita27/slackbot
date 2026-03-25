const express = require("express");
const fetch = require("node-fetch");
const app = express();
app.use(express.urlencoded({ extended: true }));

const TEAM = ["Alice", "Bob", "Carol", "Dave", "Eve"]; // 👈 Replace with your team
const WEBHOOK_URL = "https://hooks.slack.com/services/YOUR/WEBHOOK/URL"; // 👈 Paste yours here

app.post("/standup", async (req, res) => {
  const picked = TEAM[Math.floor(Math.random() * TEAM.length)];
  res.json({ response_type: "in_channel", text: `🎲 Today's standup runner is *${picked}*! 🌟` });
});

app.listen(3000, () => console.log("Bot running on port 3000"));
