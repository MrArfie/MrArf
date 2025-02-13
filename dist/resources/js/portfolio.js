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
            description: "<b>content of ARF's CRIB, the site primarily features articles and discussions on various topics, including gaming and technology. However, there is no explicit information detailing the specific programming tools or technologies utilized in its development..",
            date: "2022",
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
            date: "2023",
            client: "StepUpStreet",
            link: "https://www.stepupstreetshoe.com",
            images: [
                "resources/img/portfolios/web/4.jpg",
                "resources/img/portfolios/web/5.png",
            ],
        },
        {
            title: "Cactus Cafe",
            category: "Business Website",
            description: "A <b>modern coffee shop website</b> with an online menu, location details, and social media integration.",
            date: "2023",
            client: "Cactus Cafe",
            link: "https://www.cactuscafe.com",
            images: [
                "resources/img/portfolios/web/7.png",
                "resources/img/portfolios/web/6.jpg",
            ],
        },
        {
            title: "CMR ASSOCIATES",
            category: "Business Website",
            description: "<b>CMR Associates</b>' website serves as a professional hub for tax and accounting services, offering clients seamless access to tax preparation, compliance solutions, and financial consulting. It features a user-friendly interface, secure document management, automated tax filing tools, and client support to streamline financial processes efficiently..",
            date: "2023",
            client: "CMR ASSOCIATES",
            link: "https://www.cmrtax.com/",
            images: [
                "resources/img/portfolios/web/11.png",
                "resources/img/portfolios/web/12.png",
            ],
        },
        {
            title: "Client Mastersheet Automation",
            category: "Business System",
            description: "The <b>Client Mastersheet Automation</b> streamlines client data management by automatically updating and organizing records in a structured database. It ensures real-time tracking of client information, invoices, tax filings, and compliance statuses, reducing manual work and minimizing errors. Integrated with AI and automation tools, it enhances efficiency, improves accuracy, and provides actionable insights for better decision-making. ",
            date: "2024",
            client: "CMR ASSOCIATES",
            images: [
                "resources/img/portfolios/app/3.png",
                "resources/img/portfolios/app/5.png",
            ],
        },
        {
            title: "Video Automation",
            category: "Business System",
            description: "<b>Video Automation</b> streamlines the process of recording, editing, and managing video content using AI-driven tools. It enables automatic transcription, AI-powered summarization, and content tagging, making it easier to categorize and retrieve recordings. Ideal for meetings, webinars, and training sessions, it enhances efficiency by reducing manual editing time and improving accessibility.",
            date: "2024",
            client: "CMR ASSOCIATES",
            images: [
                "resources/img/portfolios/app/6.png",
                
            ],
        },
        {
            title: "IRS Accounting System",
            category: "Business App",
            description: "The <b>IRS Accounting System with AI</b> is an intelligent financial management platform designed to streamline tax compliance, bookkeeping, and reporting. Using AI and automation, it extracts data from financial documents, categorizes expenses, and generates tax-ready reports in real-time. It integrates seamlessly with IRS e-filing systems, ensuring accuracy and compliance with tax regulations.",
            date: "2024",
            client: "CMR ASSOCIATES",
            images: [
                "resources/img/portfolios/app/1.jpg",
                "resources/img/portfolios/app/2.jpg",
            ],
        },
        {
            title: "HEIC CONVERTER",
            category: "Business App",
            description: "The<b>HEIC Converter</b> is a powerful tool that allows users to convert HEIC (High-Efficiency Image Format) files to popular formats like JPEG, PNG, or PDF for better compatibility. It ensures high-quality image preservation, batch processing, and fast conversions while maintaining metadata.",
            date: "2024",
            client: "CMR ASSOCIATES",
            images: [
                "resources/img/portfolios/system/2.png",

            ],
        },
        {
            title: "Video Transcribe",
            category: "Business App",
            description: "The <b>Video Transcription Tool</b> is an AI-powered solution that automatically converts spoken content from videos into accurate text. It supports multiple languages, speaker identification, and time-stamped transcriptions, making it ideal for meetings, lectures, interviews, and content creation.",
            date: "2024",
            client: "CMR ASSOCIATES",
            images: [
                "resources/img/portfolios/system/3.png",
                "resources/img/portfolios/system/1.jpg",
            ],
        },
        {
            title: "JARVIS",
            category: "Personal App",
            description: "JARVIS (Just A Rather Very Intelligent System) is an AI-driven personal assistant designed to automate tasks, manage information, and enhance productivity through voice and text commands. Integrated with smart home controls, task scheduling, and real-time data retrieval, JARVIS acts as a personalized AI companion for both professional and personal use",
            date: "2021",
            client: "PERSONAL PROJECT",
            images: [
                "resources/img/portfolios/system/4.png",
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
