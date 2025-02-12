$(document).ready(() => {
    let config = document.querySelector(".mymixcont");
    let mixer = mixitup(config, {
        selectors: {
            target: ".mix",
        },
        animation: {
            easing: "ease-in-out",
            applyPerspective: true,
            duration: 750,
            reverseOut: true,
            effects: "fade rotateY(90deg) stagger(100ms)",
            staggerSequence: function (i) {
                return 2 * i - 5 * (i / 3 - (1 / 3) * (i % 3));
            },
            nudge: false,
        },
        controls: {
            live: false,
        },
    });

    // Ensure the modal does not close when clicking "Project Details"
    $(".closeButton").click((event) => {
        event.stopPropagation();
        $(".description").slideToggle(500); // Toggle project details when button is clicked
    });

    $(".exitButton").click(() => {
        $(".tip").removeClass("view");
    });

    function portfolioView(object) {
        console.log("Displaying project:", object.namePlate);

        $(".tip .nameplate h1").text(object.namePlate);
        $(".tip .nameplate span span").text(object.category);
        $(".tip .other_text p").html(object.project_brief);
        $(".tip .pro_info .Date span").text(object.project_date);
        $(".tip .pro_info .client span").text(object.project_client);
        $(".tip .pro_info .link a").attr("href", object.project_link).text(object.project_link);

        let swiper_wrapper = $(".tip .swiper-container-2 .swiper-wrapper");
        swiper_wrapper.html(""); // Clear previous slides

        // Limit slides to 2 images only
        object.image.slice(0, 2).forEach((imgSrc) => {
            let slide = `<div class="swiper-slide"><img src="${imgSrc}" alt="Project Image"></div>`;
            swiper_wrapper.append(slide);
        });

        if (swiper) {
            swiper.update(); // Ensure Swiper updates properly
        }

        // Ensure project details are HIDDEN when a project is opened
        $(".description").hide();
    }

    // Initialize Swiper.js
    var swiper = new Swiper(".swiper-container-2", {
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        effect: "cube",
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        spaceBetween: 50,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
    });

    let cards = document.querySelectorAll(".mix");
    console.log("Total Projects Found:", cards.length);

    // Ensure the .tip modal doesn't close unexpectedly
    $(".tip").click((event) => {
        event.stopPropagation();
    });

    // Define Projects
    const projects = [
        {
            title: "ARF's CRIB",
            category: "Web Development",
            description: "<b>A modern and interactive personal website</b> showcasing portfolio, services, and blog.",
            date: "2023",
            client: "Adrian Roque Fernando",
            link: "https://www.arfscrib.com",
            images: [
                "resources/img/portfolios/web/1.png",
                "resources/img/portfolios/web/2.png",
            ],
        },
        {
            title: "StepUpStreet Shoes",
            category: "E-Commerce",
            description: "An online store for <i>premium sneakers and streetwear fashion</i>. Features include product filtering, cart management, and secure checkout.",
            date: "2022",
            client: "StepUpStreet",
            link: "https://www.stepupstreet.com",
            images: [
                "resources/img/portfolios/web/3.png",
                "resources/img/portfolios/web/4.png",
            ],
        },
        {
            title: "Cactus Cafe",
            category: "Business Website",
            description: "A <b>modern coffee shop website</b> with an online menu, location details, and social media integration.",
            date: "2021",
            client: "Cactus Cafe",
            link: "https://www.cactuscafe.com",
            images: [
                "resources/img/portfolios/web/7.png",
                "resources/img/portfolios/web/6.jpg",
            ],
        },
    ];

    // Attach click event to portfolio items
    cards.forEach((card) => {
        card.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent click event from closing `.tip`

            let titleElement = card.querySelector(".title");
            if (!titleElement) {
                console.log("Error: .title not found inside .mix");
                return;
            }

            let projectTitle = titleElement.textContent.trim();
            console.log("Clicked on:", projectTitle);

            // Find the project by title
            let project = projects.find(p => p.title === projectTitle);

            if (project) {
                $(".tip").addClass("view");
                portfolioView({
                    namePlate: project.title,
                    category: project.category,
                    project_brief: project.description,
                    project_date: project.date,
                    project_client: project.client,
                    project_link: project.link,
                    image: project.images,
                });
            } else {
                console.log("Project not found:", projectTitle);
            }
        });
    });
});
