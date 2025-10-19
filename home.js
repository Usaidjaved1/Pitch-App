document.addEventListener("DOMContentLoaded", () => {
  const ideaInput = document.getElementById('idea');
  const resultBox = document.getElementById('result');
  const generateBtn = document.getElementById('generate');
  const startupNameEl = document.getElementById('startupName');
  const taglineEl = document.getElementById('tagline');
  const pitchEl = document.getElementById('pitch');
  const audienceEl = document.getElementById('audience');
  const featuresEl = document.getElementById('features');

  generateBtn.addEventListener('click', async () => {
    const idea = ideaInput.value.trim();
    if (!idea) {
      alert(" Pehle koi idea likho!");
      return;
    }

    startupNameEl.innerText = "Generating...";
    taglineEl.innerText = "";
    pitchEl.innerText = "";
    audienceEl.innerText = "";
    featuresEl.innerHTML = "";
    resultBox.style.display = "block";

    try {
      const response = await fetch("http://localhost:3000/generate-pitch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea })
      });

      const data = await response.json();
      const text = data.choices?.[0]?.message?.content || "Error in response";
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
      console.error(err);
      startupNameEl.innerText = "Error ";
      alert("Error: " + err.message);
    }
  });
});
