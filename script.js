async function loadTraffic() {
  const res = await fetch("http://localhost:5000/api/traffic");
  const data = await res.json();

  const container = document.getElementById("traffic-container");
  container.innerHTML = "";

  data.forEach(road => {
    const div = document.createElement("div");

    let className = "";
    if (road.congestionLevel === "Free") className = "free";
    if (road.congestionLevel === "Moderate") className = "moderate";
    if (road.congestionLevel === "High") className = "high";

    div.className = `road ${className}`;
    div.innerHTML = `
      <h3>${road.roadName}</h3>
      <p>Speed: ${road.speed} km/h</p>
      <strong>Status: ${road.congestionLevel}</strong>
    `;

    container.appendChild(div);
  });
}

loadTraffic();
