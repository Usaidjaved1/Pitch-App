const ideaInput = document.getElementById('idea');
const resultBox = document.getElementById('result');
const generateBtn = document.getElementById('generate');

generateBtn.addEventListener('click', generatePitch);

function generatePitch() {
  const idea = ideaInput.value.trim();
  if (!idea) return alert("Please enter an idea!");

  // Show loading
  document.getElementById('startupName').innerText = "Generating...";
  document.getElementById('tagline').innerText = "";
  document.getElementById('pitch').innerText = "";
  document.getElementById('audience').innerText = "";
  document.getElementById('features').innerHTML = "";
  resultBox.style.display = "block";

  // Simulate AI response
  setTimeout(() => {
    const lines = [
      idea + " Labs",                         // Startup Name
      "Innovate your world",                  // Tagline
      `A 2-3 line pitch about ${idea}.`,     // Pitch
      "Tech enthusiasts, startups, investors", // Audience
      "Cutting-edge technology",             // Feature 1
      "User-friendly design",                // Feature 2
      "Affordable pricing"                   // Feature 3
    ];

    document.getElementById('startupName').innerText = lines[0];
    document.getElementById('tagline').innerText = lines[1];
    document.getElementById('pitch').innerText = lines[2];
    document.getElementById('audience').innerText = lines[3];

    const featureList = document.getElementById('features');
    featureList.innerHTML = "";
    for (let i = 4; i < lines.length; i++) {
      const li = document.createElement("li");
      li.textContent = lines[i];
      featureList.appendChild(li);
    }
  }, 1000); // simulate 1 second delay
}
