//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Engineer Intern",
    cardImage: "assets/images/experience-page/newzera.jpg",
    place: "Newzera",
    time: "(Dec. 2020 - Feb. 2021)",
    desp: "<li>Developed complete GraphQL APIs using Node.js for their product.</li> <li>Worked on client-side integration of APIs with React Native frontend and Apollo Client.</li> <li>Tested the developed front-end and back-end part using Jest and Enzyme.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "TEDx IIT Patna",
    cardImage: "assets/images/experience-page/tedex.png",
    description: "Sub-coordinator and formal content writer.",
  },
  {
    title: "Inter IIT Sports Meet 2019",
    cardImage: "assets/images/experience-page/sportsmeet.jpg",
    description:
      "Represented IIT Patna in the prestigious 54th Inter IIT Sports Meet held at IIT Kharagpur.",
  },
  {
    title: "Inter IIT Tech Meet 2021",
    cardImage: "assets/images/experience-page/techmeet.png",
    description:
      "Presented the project 'Intelligent Scheduling and Eco-routing Mechanism for EVs' of IIT Patna in event 'Engineer's Conclave'.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="height: 600px;width:400px">
      
      <img src="${cardImage}" height="300" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Mentorship Card

const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp }) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
