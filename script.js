// Sample data for events
const events = [
  {
    title: "Tech Talk: AI and the Future",
    date: "2025-05-05",
    time: "5:00 PM",
    location: "Engineering Hall 101",
    description: "Join us to learn about AI trends!",
    image: "images/ai_event.jpg"
  },
  {
    title: "Cultural Fest 2025",
    date: "2025-05-10",
    time: "6:00 PM",
    location: "Main Auditorium",
    description: "Celebrate cultures from around the world!",
    image: "images/culture_fest.jpg"
  }
];

// Dynamically load events
const eventsList = document.getElementById('eventsList');

events.forEach(event => {
  const eventCard = `
    <div class="col-md-6 col-lg-4">
      <div class="card">
        <img src="${event.image}" class="card-img-top" alt="${event.title}">
        <div class="card-body">
          <h5 class="card-title">${event.title}</h5>
          <p class="card-text"><strong>Date:</strong> ${event.date}<br>
          <strong>Time:</strong> ${event.time}<br>
          <strong>Location:</strong> ${event.location}</p>
          <p>${event.description}</p>
          <button class="btn btn-success" onclick="confirmRSVP(this)">RSVP</button>
        </div>
      </div>
    </div>
  `;
  eventsList.innerHTML += eventCard;
});

function confirmRSVP(button) {
  button.innerText = "Confirmed ✅";
  button.disabled = true;
  button.classList.remove('btn-success');
  button.classList.add('btn-secondary');
}
