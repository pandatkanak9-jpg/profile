const aboutTabs = document.querySelectorAll(".tab");
const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener("DOMContentLoaded", () => {
    if (aboutTabs) {
        aboutTabs[0].click();
    }
});

aboutTabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        e.preventDefault();

        aboutTabs.forEach((a) => {
            a.classList.remove("active");
        });

        tab.classList.add("active");

        aboutContent.forEach((c) => {
            c.classList.remove("active");
        });

        const activeTab = tab.dataset.section

        document.getElementById(activeTab).classList.add("active");

        function observeSkills() {
            const boxes = document.querySelectorAll(".experience-box");

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {

                        entry.target.classList.remove("hidden");
                        entry.target.classList.add("show");

                        const progress = entry.target.querySelector(".progress-fill");
                        progress.style.width = progress.getAttribute("data-width");

                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });

            boxes.forEach(box => observer.observe(box));
        }

        if (activeTab === "experience") {
            const experiences = document.querySelector(".experience-list");

            const experienceList = [{
                title: "Frontend Developer (Self Projects)",
                subtitle: "2026 - Present",
                details: `Designed and developed a responsive personal portfolio website using HTML, CSS, and JavaScript.
            Implemented dynamic tab switching and clean UI layout.
            Built reusable components and improved DOM manipulation skills.`
            },
            {
                title: "Data Structures & Problem Solving",
                subtitle: "Ongoing Practice",
                details: `Regularly solving DSA problems using C++ and Python. Practicing arrays, strings, recursion, sorting, and basic algorithms. Focused on improving time and space complexity understanding.`
            }, {
                title: "Currency Converter Web App",
                subtitle: "JavaScript Project",
                details: `Developed a real-time currency converter using JavaScript. Applied API integration concepts and asynchronous programming. Strengthened understanding of fetch, promises, and event handling.`
            }, {
                title: "Mini JavaScript Game",
                subtitle: "Frontend Practice Project",
                details: `Created a small interactive browser-based game.
            Implemented game logic using JavaScript.
            Improved problem-solving and logical thinking skills.`
            }
            ];

            const experienceContent = experienceList.map((ele) => {
                return `
                <div class="experience-box hidden">
                <h2>${ele?.title}</h2>
                <h4>${ele?.subtitle}</h4>
                <p>${ele?.details}</p>
                </div>
                `;
            });
            document.querySelector(".experience-list").innerHTML = experienceContent.join("");
            observeSkills();
        } else if (activeTab === "education") {
            const education = document.querySelector(".education-list");

            const educationList = [{
                course: "Bachelor of Computer Applications (BCA)",
                college: "[Dr. Ram Manohar Lohia Insttitute] - Present",
                detail: "Pursuing BCA with a strong focus on programming, software development, and analytical problem-solving while actively applying technical concepts through practical projects.",
            }, {
                course: "Higher Secondary (12th Grade)",
                college: "[Katar Singh InterCollege] - 2025",
                detail: "Completed Higher Secondary education in Commerce, developing strong foundations in business principles, analytical thinking, financial understanding, and structured problem-solving abilities..",
            }, {
                course: "Secondary School (10th Grade)",
                college: "[D.G.R. Public School (Patla)] - 2023",
                detail: "Completed secondary education with disciplined academic performance, demonstrating consistency, focus, and a growing interest in technology and computing.",
            },];

            const educationContent = educationList.map((ele) => {
                return `
                <div class="experience-box hidden">
                <h2>${ele?.course}</h2>
                <h5>${ele?.college}</h5>
                <p>${ele?.detail}</p>
                </div>
                `;
            })
            document.querySelector(".education-list").innerHTML = educationContent.join("");
            observeSkills();
        } else if (activeTab === "skills") {
            const skills = document.querySelector(".skills-list");

            const skillList = [
                {
                    about: "Programming Languages",
                    skill: "C / C++",
                    icon: "fa-solid fa-code",
                    level: 95
                },
                {
                    about: "Web Development",
                    skill: "HTML / CSS / JavaScript",
                    icon: "fa-solid fa-laptop-code",
                    level: 95
                },
                {
                    about: "Frontend Framework",
                    skill: "React (Learning)",
                    icon: "fa-brands fa-react",
                    level: 95
                },
                {
                    about: "Problem Solving",
                    skill: "DSA & Logical Thinking",
                    icon: "fa-solid fa-brain",
                    level: 35
                },
                {
                    about: "Python Programming",
                    skill: "Core Python, OOP Concepts, Problem Solving",
                    icon: "fa-brands fa-python",
                    level: 95
                },
                {
                    about: "Tools",
                    skill: "VS Code / Git / GitHub",
                    icon: "fa-solid fa-screwdriver-wrench",
                    level: 85
                }
            ];

            const skillContent = skillList.map((ele) => {
                return `
        <div class="experience-box hidden">
            <div class="skill-header">
                <i class="${ele.icon}"></i>
                <h2>${ele.about}</h2>
            </div>
            <h5>${ele.skill}</h5>

            <div class="progress-bar">
                <div class="progress-fill" data-width="${ele.level}%">
                    ${ele.level}%
                </div>
            </div>
        </div>
        `;
            });

            document.querySelector(".skills-list").innerHTML = skillContent.join("");

            observeSkills();   // 👈 call animation

        } else if (activeTab === "about-me"){
            const about = document.querySelector(".my-list");
        
            const infoList = [{
                key: "Name : ",
                value: "Kanak",
            },{
                key: "Country : ",
                value: "India",
            },{
                key: "Industry : ",
                value: "Software & IT",
            },{
                key: "Technical Focus",
                value: "DSA Knowledge"
            },{
                key: "Core Programming language",
                value: "C++, Python"
            },{
                key: "Experience :",
                value: "Projects",
            },{
                key: "Strength",
                value: "Logical thinking",
            },{
                key: "My Goal",
                value: "Future Engineer"
            },{
                key: "Address :",
                value: "Fafrana Road, Modinagar, Ghaziabad",
            },];

            const infoContent = infoList.map((ele)=>{
                return`
                    <div class="info-box" key=${ele?.id}>
                    <h2>${ele?.key}</h2>
                    <p>${ele?.value}</p>
                    </div>
                `;
            });

            document.querySelector(".my-list").innerHTML = infoContent.join("");

            observeSkills();  
        }
    });
}); 