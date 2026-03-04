const media = document.querySelector(".contact-media");

const contactList = [{
    icon: "fa-solid fa-phone",
    name: "Phone",
    value: "+91 453275489",
    href: "tel:+917854540954",
}, {
    icon: "fa-solid fa-envelope",
    name: "E-Mail",
    value: "kanak598@gmail.com",
    href: "mailto:kanak598@gmail.com",
}, {
    icon: "fa-solid fa-location-dot",
    name: "Country",
    value: "India",
    href: "#",
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