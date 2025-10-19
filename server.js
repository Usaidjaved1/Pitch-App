// server.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

 const API_KEY = "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";

app.post("/generate-pitch", async (req, res) => {
  const { idea } = req.body;
  if (!idea) return res.status(400).json({ error: "Idea required" });

  const prompt = `Generate a creative startup pitch for: "${idea}". Include:
- A catchy startup name
- A tagline
- A 2-3 line pitch
- Target audience
- 3 unique features`;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a creative startup pitch generator." },
          { role: "user", content: prompt }
        ]
      }),
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "API request failed" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
