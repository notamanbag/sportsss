const wheel = document.getElementById('wheel');
const numSegments = 12; // 12 partitions
const labels = ['Prize 1', 'Prize 2', 'Prize 3', 'Prize 4', 'Prize 5', 'Prize 6', 'Prize 7', 'Prize 8', 'Prize 9', 'Prize 10', 'Prize 11', 'Prize 12'];
const labelsContainer = document.getElementById('wheelLabels');
const resultDisplay = document.getElementById('result');

let isSpinning = false;

// Dynamically create labels
labels.forEach((label, index) => {
    const angle = (360 / numSegments) * index;
    const labelDiv = document.createElement('div');
    labelDiv.className = 'label';
    labelDiv.textContent = label;
  
    // Fix: Use `rotate(${angle}deg)` inside a string
    labelDiv.style.transform = `rotate(${angle}deg) translate(120px) rotate(-${angle}deg)`;
  
    labelsContainer.appendChild(labelDiv);
  });
  

function spin() {
    console.log("Spinning");
    console.log(resultDisplay);
    
  if (isSpinning) return; // Prevent multiple spins
  isSpinning = true;
  resultDisplay.textContent = ''; // Clear previous result

  const randomDeg = Math.floor(Math.random() * 360) + 360 * 5; // Spins the wheel at least 5 full rotations
  wheel.style.transform = `rotate(${randomDeg}deg)`;

  const rotationDeg = randomDeg % 360; // Get rotation within 360 degrees
  const segmentAngle = 360 / numSegments; // Angle for each segment

  // Set a timeout for when the wheel stops spinning
  setTimeout(() => {
    const landedIndex = Math.floor((360 - rotationDeg) / segmentAngle) % numSegments; // Calculate the segment landed on
    resultDisplay.textContent = `You won+  ${labels[landedIndex]}`;
    isSpinning = false;
  }, 5000); // 5 seconds delay (matches the CSS transition duration)
}
