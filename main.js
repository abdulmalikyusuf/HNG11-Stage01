const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function updateDateTime() {
  const date = new Date();

  const UTCDayEl = document.querySelector("[data-testid=currentDay]");
  UTCDayEl.textContent = `${days[date.getDay()]},`;

  const UTCTimeEl = document.querySelector("[data-testid=currentTimeUTC]");
  UTCTimeEl.textContent = `${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`;
  requestAnimationFrame(updateDateTime);
}

requestAnimationFrame(updateDateTime);

const goals = [
  {
    title: "Contribute to Open Source",
    text: "I plan to regularly contribute to open-source projects to improve my coding skills, gain real-world experience, and connect with the tech community. This will involve fixing bugs, writing documentation, and developing new features.",
  },
  {
    title: "Master Full-Stack Development",
    text: "I aim to become proficient in both front-end and back-end development by mastering technologies such as JavaScript, Node.js and a Back-end language (PHP). I will build a series of full-stack applications to achieve this.",
  },
  {
    title: "Develop Leadership and Soft Skills",
    text: "I will focus on improving my leadership and communication skills by participating in workshops, taking on mentorship roles, and engaging in team projects. This will prepare me for future leadership positions.",
  },
  {
    title: "Collaborate to Build Apps for Customers",
    text: "I plan to collaborate with other developers and designers to build custom applications for clients. This will involve understanding customer needs, designing user-friendly interfaces, and delivering high-quality software solutions.",
  },
];

(function addGoals() {
  const goalsListEl = document.querySelector(".tech-goals ol");
  for (const goal of goals) {
    const goalTitleEl = document.createElement("h6");
    goalTitleEl.textContent = goal.title;
    const goalTextEl = document.createElement("p");
    goalTextEl.textContent = goal.text;
    const listEl = document.createElement("li");
    listEl.appendChild(goalTitleEl);
    listEl.appendChild(goalTextEl);
    goalsListEl.appendChild(listEl);
  }
})();

const posts = [
  {
    title: "Do Not Leave Tokyo Before Eating This Ramen",
    imageSrc: "assets/img/c22c23_e3b5cb121db549fdbb1590f51d378b8c~mv2.webp",
  },
  //   {
  //     title: "Best Podcasts to Listen to When Traveling",
  //     imageSrc:
  //       "assets/img/c22c23_a31ea2b671fe4cddbbb5728c9310c756~mv2_d_5659_3773_s_4_2.webp",
  //   },
  //   {
  //     title: "Paris: Secrets Only The Locals Can Tell You",
  //     imageSrc: "assets/img/c22c23_ea4c50693f8f473b9ba056fc36032ae4~mv2.webp",
  //   },
  {
    title: "5 Songs That Make Me REALLY Happy",
    imageSrc: "assets/img/c22c23_5ab44dfe10f84b5e90e19db16bd06ae3~mv2.webp",
  },
  {
    title: "Amsterdam 101: Redefining The French Fries",
    imageSrc: "assets/img/c22c23_5a6f262789ea450393f4b3c6bc3247df~mv2.webp",
  },
  {
    title: "Turkey: Unique Festivals You Must Visit ",
    imageSrc:
      "assets/img/c22c23_56862fbf994d49a3a136f14547e6194c~mv2_d_1920_1342_s_2.webp",
  },
];

(function addPostsToDOM(params) {
  const postsEl = document.querySelector(".posts");
  for (const post of posts) {
    const postEl = document.createElement("div");
    postEl.className = "post";

    const postImg = document.createElement("div");
    postImg.className = "post-img";
    const img = document.createElement("img");
    img.src = post.imageSrc;
    postImg.appendChild(img);

    const postContent = document.createElement("div");
    postContent.className = "post-content";
    postContent.innerHTML = `
                    <div class="">
                      <div class="date-time">
                        <p>Mar 23, 2023</p>
                        <small>3 min</small>
                      </div>
                      <h4 class="title">
                        ${post.title}
                      </h4>
                      <p class="text">
                        Create a blog post subtitle that summarizes your post in a
                        few short, punchy sentences and entice your audience to
                        continue reading...
                      </p>
                    </div>
                    <div class="info">
                      <div class="metrics">
                        <p class="">0 views</p>
                        <p class="">0 comments</p>
                      </div>
                      <div class="likes">
                        <p>0</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          viewBox="0 0 19 19"
                          role="img"
                        >
                          <path
                            d="M9.44985848,15.5291774 C9.43911371,15.5362849 9.42782916,15.5449227 9.41715267,15.5553324 L9.44985848,15.5291774 Z M9.44985848,15.5291774 L9.49370677,15.4941118 C9.15422701,15.7147757 10.2318883,15.0314406 10.7297038,14.6971183 C11.5633567,14.1372547 12.3827081,13.5410755 13.1475707,12.9201001 C14.3829188,11.9171478 15.3570936,10.9445466 15.9707237,10.0482572 C16.0768097,9.89330422 16.1713564,9.74160032 16.2509104,9.59910798 C17.0201658,8.17755699 17.2088969,6.78363112 16.7499013,5.65913129 C16.4604017,4.81092573 15.7231445,4.11008901 14.7401472,3.70936139 C13.1379564,3.11266008 11.0475663,3.84092251 9.89976068,5.36430396 L9.50799408,5.8842613 L9.10670536,5.37161711 C7.94954806,3.89335486 6.00516066,3.14638251 4.31830373,3.71958508 C3.36517186,4.00646284 2.65439601,4.72068063 2.23964629,5.77358234 C1.79050315,6.87166888 1.98214559,8.26476279 2.74015555,9.58185512 C2.94777753,9.93163559 3.23221417,10.3090129 3.5869453,10.7089994 C4.17752179,11.3749196 4.94653811,12.0862394 5.85617417,12.8273544 C7.11233096,13.8507929 9.65858244,15.6292133 9.58280954,15.555334 C9.53938013,15.5129899 9.48608859,15.5 9.50042471,15.5 C9.5105974,15.5 9.48275828,15.5074148 9.44985848,15.5291774 Z"
                          ></path>
                        </svg>
                      </div>
                    </div>
        `;

    postEl.appendChild(postImg);
    postEl.appendChild(postContent);
    postsEl.appendChild(postEl);
  }
})();
