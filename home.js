

document.addEventListener("DOMContentLoaded", () => {
  console.log(" home.js loaded");

  
  const ideaInput = document.getElementById('idea');
  const resultBox = document.getElementById('result');
  const generateBtn = document.getElementById('generate');
  const startupNameEl = document.getElementById('startupName');
  const taglineEl = document.getElementById('tagline');
  const pitchEl = document.getElementById('pitch');
  const audienceEl = document.getElementById('audience');
  const featuresEl = document.getElementById('features');


  const API_KEY = "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";
  generateBtn.addEventListener('click', generatePitch);

  async function generatePitch() {
    console.log("✅ Button clicked!");

    const idea = ideaInput.value.trim();
    if (!idea) {
      alert("⚠️ Pehle koi idea likho!");
      return;
    }

    
    startupNameEl.innerText = "Generating...";
    taglineEl.innerText = "";
    pitchEl.innerText = "";
    audienceEl.innerText = "";
    featuresEl.innerHTML = "";
    resultBox.style.display = "block";

   
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
      console.log("API Response:", data);

  
      if (!data.choices || !data.choices[0]) {
        throw new Error("Invalid API response.");
      }

      const text = data.choices[0].message.content;
      const lines = text.split("\n").filter(line => line.trim() !== "");

 
      startupNameEl.innerText = lines[0] || "Startup Name";
      taglineEl.innerText = lines[1] || "";
      pitchEl.innerText = lines[2] || "";
      audienceEl.innerText = lines[3] || "";

      featuresEl.innerHTML = "";
      for (let i = 4; i < lines.length; i++) {
        const li = document.createElement("li");
        li.textContent = lines[i];
        featuresEl.appendChild(li);
      }

    } catch (err) {
      console.error(" Error:", err);
      alert("Error: " + err.message);
    }
  }
});
