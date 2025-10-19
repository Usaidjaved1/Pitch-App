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
      idea + " Labs",
      "Innovate your world",
      `A 2-3 line pitch about ${idea}.`,
      "Tech enthusiasts, startups, investors",
      "Cutting-edge technology",
      "User-friendly design",
      "Affordable pricing"
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
  }, 1000);
}
