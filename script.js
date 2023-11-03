const API_URL = "https://kontests.net/api/v1/all";

async function renderCards() {
  const response = await fetch(API_URL);
  const value = await response.json();

  const card1Container = document.querySelector('#card1Container');

  for (const item in value) {
    const card1 = document.createElement('div');
    card1.classList.add('card1');

    const card1Content = document.createElement('div');
    card1Content.classList.add('card1-content');

    const h2 = document.createElement('h3');
    h2.classList.add('card-h1');
    h2.textContent = value[item].name;

    const p1 = document.createElement('h4');
    p1.classList.add('card-p');
    p1.textContent = 'Contest info';

    const p2 = document.createElement('p');
    p2.textContent = `Name: ${value[item].name}`;

    const p3 = document.createElement('p');
    p3.textContent = `Starts in: ${value[item].start_time}`;

    const p4 = document.createElement('p');
    p4.textContent = `Ends in: ${value[item].end_time}`;

    const p5 = document.createElement('p');
    p5.textContent = `Lasts for: ${value[item].duration} secs`;

    const p6 = document.createElement('p');
    p6.textContent = `Visit: ${value[item].site} for more info`;

    const p7 = document.createElement('p');
    p7.textContent = `Status: ${value[item].status}`;

    const p8 = document.createElement('p');
    p8.textContent = `Within 24hrs: ${value[item].in_24_hours}`;

    const a = document.createElement('a');
    a.classList.add('card-a');
    a.href = value[item].url;
    a.textContent = 'More';

    card1Content.appendChild(h2);
    card1Content.appendChild(p1);
    card1Content.appendChild(p2);
    card1Content.appendChild(p3);
    card1Content.appendChild(p4);
    card1Content.appendChild(p5);
    card1Content.appendChild(p6);
    card1Content.appendChild(p7);
    card1Content.appendChild(p8);
    card1Content.appendChild(a);

    card1.appendChild(card1Content);
    card1Container.appendChild(card1);
  }
}

const allPTags = document.querySelectorAll('p');

for (const pTag of allPTags) {
  const strongTag = document.createElement('strong');
  strongTag.textContent = pTag.textContent;

  pTag.textContent = '';
  pTag.appendChild(strongTag);
}


renderCards();
window.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
      document.getElementById("back-to-top").style.display = "block";
    } else {
      document.getElementById("back-to-top").style.display = "none";
    }
  });

  