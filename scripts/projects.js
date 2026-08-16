const projectList = [{
    number: "01",
    title: "UI Portfolio",
    description: "A responsive portfolio website showcasing my projects, skills, and achievements using modern web technologies and clean user-friendly design.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "assets/profile.jpeg",
    liveLink: "https://pandatkanak9-jpg.github.io/profile/",
    githublink: "https://github.com/pandatkanak9-jpg",
}, {
    number: "02",
    title: "WorldAtlas",
    description: "WorldAtlas is a responsive React-based web app that lets users explore detailed information about countries, including their flags, regions, population, languages, currencies, and more.",
    techStack: ["Reactjs", "CSS", "Express", "Rest API"],
    image: "assets/WorldAtlas.jpeg",
    liveLink: "https://pandatkanak9-jpg.github.io/WorldAtlas_project/",
    githublink: "https://github.com/pandatkanak9-jpg",
},{
    number: "03",
    title: "Task Management",
    description: "Task Management is a web application where admins can assign and manage tasks, while employees can track and complete their assigned tasks through a simple and responsive interface.",
    techStack: ["Reactjs", "Tailwind CSS", "Advanced JavaScript", "Context API"],
    image: "assets/Task.jpeg",
    liveLink: "https://pandatkanak9-jpg.github.io/Task-manager-react/",
    githublink: "https://github.com/pandatkanak9-jpg",
}, {
    number: "04",
    title: "Pokemon Search",
    description: "Pokémon Search is a responsive web application that allows users to search and explore Pokémon with detailed information such as abilities, types, stats, images, and other useful details.",
    techStack: ["Reactjs", "CSS", "API"],
    image: "assets/pokemon.jpeg",
    liveLink: "#",
    githublink: "https://github.com/pandatkanak9-jpg",
},{
    number: "05",
    title: "Currency Convertor",
    description: "A real-time currency converter application that fetches exchange rates dynamically and provides accurate, fast, and user-friendly currency calculations.",
    techStack: ["HTML", "CSS", "JavaScript", "API"],
    image: "assets/converter.jpeg",
    liveLink: "https://pandatkanak9-jpg.github.io/Currency-Converter/",
    githublink: "https://github.com/pandatkanak9-jpg",
}, ];

const projects = document.querySelector(".projects");

let currentIndex = 0;

const renderProject = (index) => {
    const projectContent = projectList[index];

    const previousDisabled = currentIndex === 0;

    const nextDisabled = currentIndex === projectList.length - 1;

    projects.innerHTML = ` <div class="project-info">
    <h3>${projectContent?.number}</h3>
    <h4>${projectContent?.title}</h4>
    <p>${projectContent?.description}</p>
    <div class="tech-stack">
        ${projectContent?.techStack?.map((tech, i) => {
        return `
            <span key=${i}>${tech}</span> `;
    }).join("")};
    </div>
    <hr />
    <div class="links">
        <a href=${projectContent?.liveLink}><i class="fa-solid fa-arrow-right"></i></a>

        <a href=${projectContent?.githublink}><i class="fa-brands fa-github"></i></a>
    </div>
</div> 
  <div class="carousel">
                    <img src=${projectContent?.image} alt=${projectContent?.title}/>

                    <div class="arrows">
                        <a href="#" id="previous" class=${previousDisabled ? "disabled-btn" : ""}><i class="fa-solid fa-arrow-left"></i></a>

                        <a href="#" id="next" class=${nextDisabled ? "disabled-btn" : ""}><i class="fa-solid fa-arrow-right"></i></a>
                    </div>

                </div>`;



    document.getElementById("previous").addEventListener("click", () => {

        if (currentIndex > 0) {
            currentIndex--;
            renderProject(currentIndex);
        }
    });

    document.getElementById("next").addEventListener("click", () => {

        if (currentIndex < projectList.length - 1) {
            currentIndex++;
            renderProject(currentIndex);
        }
    });
};

renderProject(currentIndex);