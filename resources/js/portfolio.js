$(document).ready(() => {
    let config = document.querySelector(".mymixcont");
    let mixer = mixitup(config, {
        selectors: { target: ".mix" },
        animation: {
            easing: "ease-in-out",
            applyPerspective: true,
            duration: 750,
            reverseOut: true,
            effects: "fade rotateY(90deg) stagger(100ms)",
            nudge: false,
        },
        controls: { live: false },
    });

    $(".closeButton").click(() => {
        document.querySelector(".closeButton .icon").classList.toggle("active");
        $(".description").slideToggle(500);
    });

    $(".exitButton").click(() => {
        tip.classList.remove("view");
    });

    function portfolioView(object) {
        document.querySelector(".tip .nameplate h1").textContent = object.namePlate;
        document.querySelector(".tip .nameplate span span").textContent = object.category;
        document.querySelector(".tip .other_text p").textContent = object.project_brief;
        document.querySelector(".tip .Date span").textContent = object.project_date;
        document.querySelector(".tip .client span").textContent = object.project_client;
        document.querySelector(".tip .link a").textContent = object.project_link;
        document.querySelector(".tip .link a").href = object.project_link;

        let swiper_wrapper = document.querySelector(".tip .swiper-container-2 .swiper-wrapper");
        swiper_wrapper.innerHTML = ""; // Clear previous images

        object.image.forEach((imgSrc) => {
            let slide = document.createElement("div");
            slide.classList.add("swiper-slide");
            slide.innerHTML = `<img src="${imgSrc}" alt="Project Image" />`;
            swiper_wrapper.appendChild(slide);
        });

        swiper.update(); // Refresh Swiper after updating images
    }

    // Swiper initialization
    var swiper = new Swiper(".swiper-container-2", {
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        effect: "cube",
        cubeEffect: { shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.94 },
        spaceBetween: 50,
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        scrollbar: { el: ".swiper-scrollbar", hide: true },
    });

    let tip = document.querySelector(".tip");
    let cards = document.querySelectorAll(".mix");

    // Click event for each project
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            let projectName = card.querySelector(".title").textContent;
            let formattedProjectName = projectName.replace(/\s+/g, "").toLowerCase();

            let projectData = {
                "arfscrib": {
                    namePlate: "arfscrib",
                    category: "Web Development",
                    project_brief: "A modern and interactive real estate website showcasing available properties with dynamic search capabilities.",
                    project_date: "2023",
                    project_client: "ARF Properties",
                    project_link: "https://arfscrib.com",
                    image: ["/resources/img/portfolios/web/1.png", "/resources/img/portfolios/web/2.png"]
                },
                "stepupstreetshoes": {
                    namePlate: "StepUpStreet Shoes",
                    category: "E-commerce",
                    project_brief: "An online shoe store with a stylish design and seamless shopping experience.",
                    project_date: "2022",
                    project_client: "StepUpStreet",
                    project_link: "https://stepupstreet.com",
                    image: ["/resources/img/portfolios/web/3.jpg", "/resources/img/portfolios/web/4.jpg"]
                },
                "cactuscafe": {
                    namePlate: "Cactus Cafe",
                    category: "Restaurant Website",
                    project_brief: "A cozy and vibrant cafe website with an integrated menu, online reservation system, and customer reviews.",
                    project_date: "2023",
                    project_client: "Cactus Cafe",
                    project_link: "https://cactuscafe.com",
                    image: ["/resources/img/portfolios/web/2.png", "/resources/img/portfolios/web/5.jpg"]
                },
                "worldview": {
                    namePlate: "World View",
                    category: "Travel App",
                    project_brief: "A travel application providing real-time weather updates, places to visit, and personalized recommendations.",
                    project_date: "2021",
                    project_client: "WorldView Ltd.",
                    project_link: "https://worldview.com",
                    image: ["/resources/img/portfolios/app/1.jpg", "/resources/img/portfolios/app/2.jpg"]
                },
                "irsaccountingsystem": {
                    namePlate: "IRS Accounting System",
                    category: "Financial System",
                    project_brief: "A robust accounting system designed for tax compliance and financial reporting.",
                    project_date: "2022",
                    project_client: "IRS",
                    project_link: "https://irsaccounting.com",
                    image: ["/resources/img/portfolios/card/2.jpg", "/resources/img/portfolios/card/3.jpg"]
                },
                "reauty": {
                    namePlate: "Reauty",
                    category: "Beauty E-commerce",
                    project_brief: "An elegant e-commerce platform for beauty products with virtual try-on features.",
                    project_date: "2022",
                    project_client: "Reauty Inc.",
                    project_link: "https://reauty.com",
                    image: ["/resources/img/portfolios/card/3.jpg", "/resources/img/portfolios/card/4.jpg"]
                },
                "richardtan": {
                    namePlate: "Richard Tan",
                    category: "Portfolio Website",
                    project_brief: "A minimalist and professional portfolio website for a creative designer.",
                    project_date: "2023",
                    project_client: "Richard Tan",
                    project_link: "https://richardtan.com",
                    image: ["/resources/img/portfolios/card/4.jpg", "/resources/img/portfolios/card/5.jpg"]
                },
                "kittypic": {
                    namePlate: "Kitty Pic",
                    category: "Photography Website",
                    project_brief: "A photography portfolio website showcasing adorable cat pictures in high resolution.",
                    project_date: "2023",
                    project_client: "KittyPic Studio",
                    project_link: "https://kittypic.com",
                    image: ["/resources/img/portfolios/logo/1.jpg", "/resources/img/portfolios/logo/2.jpg"]
                },
                "domine": {
                    namePlate: "Domine",
                    category: "Tech Blog",
                    project_brief: "A blog dedicated to the latest tech trends, innovations, and reviews.",
                    project_date: "2022",
                    project_client: "Domine Tech",
                    project_link: "https://dominetech.com",
                    image: ["/resources/img/portfolios/icon/4.jpg", "/resources/img/portfolios/icon/5.jpg"]
                },
                "profileworld": {
                    namePlate: "Profile World",
                    category: "Social Networking",
                    project_brief: "A unique social networking platform focused on user customization and privacy.",
                    project_date: "2023",
                    project_client: "ProfileWorld Inc.",
                    project_link: "https://profileworld.com",
                    image: ["/resources/img/portfolios/app/2.jpg", "/resources/img/portfolios/app/3.jpg"]
                }
            };

            if (projectData[formattedProjectName]) {
                tip.classList.add("view");
                portfolioView(projectData[formattedProjectName]);
            }
        });
    });
});
