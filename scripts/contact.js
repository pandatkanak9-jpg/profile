const media = document.querySelector(".contact-media");

const contactList = [{
    icon: "fa-brands fa-square-linkedin",
    name: "Linkedin",
    value: "Go To Llinkedin",
    href: "https://www.linkedin.com/in/kanak-pandat-014792375/",
}, {
    icon: "fa-brands fa-square-github",
    name: "GitHub",
    value: "Go To GitHub",
    href: "https://github.com/pandatkanak9-jpg",
}, {
    icon: "fa-solid fa-location-dot",
    name: "Country",
    value: "India",
},];

const contactContent = contactList.map((ele) => {
    return `
     <div class="media">
                        <span>
                            <i class="${ele?.icon}"></i>
                        </span>
                        <div class="contact-value">
                            <p>${ele?.name}</p>
                            <a href=${ele?.href}>${ele?.value}</a>
                        </div>
                    </div>
    `;
})
    .join("");

if (media) media.innerHTML = contactContent;