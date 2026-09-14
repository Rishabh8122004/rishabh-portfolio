console.log("JavaScript file loaded");
/* ==================================================
   THEME TOGGLE + LOCAL STORAGE
================================================== */

const themeToggle = document.querySelector("#theme-toggle");

/* ---------- Apply Saved Theme ---------- */

if (localStorage.getItem("theme") === "dark") {

    document.documentElement.classList.add("dark-mode");
    document.body.classList.add("dark-mode");

    if (themeToggle) {
        themeToggle.setAttribute("aria-label", "Switch to light mode");
        themeToggle.setAttribute("aria-pressed", "true");
    }
}

/* ---------- Toggle Theme ---------- */

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.documentElement.classList.toggle("dark-mode");
        document.body.classList.toggle("dark-mode");

        const darkModeActive =
            document.body.classList.contains("dark-mode");

        if (darkModeActive) {

            localStorage.setItem("theme", "dark");

            themeToggle.setAttribute(
                "aria-label",
                "Switch to light mode"
            );

            themeToggle.setAttribute(
                "aria-pressed",
                "true"
            );

        } else {

            localStorage.setItem("theme", "light");

            themeToggle.setAttribute(
                "aria-label",
                "Switch to dark mode"
            );

            themeToggle.setAttribute(
                "aria-pressed",
                "false"
            );
        }
    });
}
/* ==================================================
   01. SMART NAVIGATION
================================================== */

const navigation = document.querySelector("nav");

/*BUtton for navigation menu*/
const menuButton = document.querySelector("#menu-btn");
menuButton.addEventListener("click", function () {
  navigation.classList.toggle("show");

  if (navigation.classList.contains("show")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});
const navigationLinks = navigation.querySelectorAll("a");
navigationLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navigation.classList.remove("show");
    document.body.style.overflow = "";
  });
});
// Close navigation when clicking outside the menu
document.addEventListener("click", function (event) {
  if (
    navigation.classList.contains("show") &&
    !navigation.contains(event.target) &&
    event.target !== menuButton
  ) {
    navigation.classList.remove("show");
    document.body.style.overflow = "";
  }
});
// Get the current page URL
const currentPage = window.location.pathname;
navigationLinks.forEach(function (link) {
  if (link.pathname === currentPage) {
    link.classList.add("active");
  }
});
// Back to top button
const backToTopButton = document.querySelector("#back-to-top");

if (backToTopButton) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
/* ==================================================
   02. DYNAMIC HERO
================================================== */

const greeting = document.querySelector("#greeting");

if (greeting) {
  const currentHour = new Date().getHours();

  if (currentHour < 5) {
    greeting.textContent = "🌃 Good Night";
  } else if (currentHour < 12) {
    greeting.textContent = "🌅 Good Morning";
  } else if (currentHour < 18) {
    greeting.textContent = "☀️ Good Afternoon";
  } else if (currentHour < 21) {
    greeting.textContent = "🌇 Good Evening";
  } else {
    greeting.textContent = "🌃 Good Night";
  }
}
/* hero message after clicking view resume */
const heroMessage = document.querySelector("#hero-message");
const resumeButton = document.querySelector(".home-text > a");

if (heroMessage && resumeButton) {
  resumeButton.addEventListener("click", function () {
    heroMessage.textContent = "📄 Thanks for checking out my resume!";
    heroMessage.style.display = "block";
  });
}
/* ==================================================
   03. SKILLS ENGINE
================================================== */

const skills = [
  {
    name: "C Programming",
    category: "Programming",
    description: "Strong foundation in C programming and problem solving.",
    proficiency: "Advanced",
  },

  {
    name: "C++",
    category: "Programming",
    description:
      "Primary programming language for DSA and competitive programming.",
    proficiency: "Advanced",
  },

  {
    name: "Data Structures & Algorithms",
    category: "Computer Science",
    description:
      "Experience with arrays, strings, linked lists, trees, and algorithmic problem solving.",
    proficiency: "Advanced",
    link: "../image/Data_Structure_certificate.jpg",
    linkText: "Certificate",
  },

  {
    name: "Problem Solving",
    category: "Core Skill",
    description:
      "Regularly practice programming problems and improve algorithmic thinking.",
    proficiency: "Advanced",
    link: "https://leetcode.com/u/Rxhabh_/",
    linkText: "My LeetCode Profile",
  },

  {
    name: "HTML",
    category: "Web Development",
    description: "Building structured and semantic web pages.",
    proficiency: "Intermediate",
  },

  {
    name: "CSS",
    category: "Web Development",
    description: "Creating responsive layouts using modern CSS techniques.",
    proficiency: "Intermediate",
  },

  {
    name: "JavaScript",
    category: "Web Development",
    description:
      "Learning DOM manipulation, events, APIs, and interactive web development.",
    proficiency: "Intermediate",
  },

  {
    name: "Git & GitHub",
    category: "Development Tools",
    description:
      "Managing source code and tracking project development with Git and GitHub.",
    proficiency: "Intermediate",
  },
];

const skillsList = document.querySelector("#skills-list");

if (skillsList) {
  skills.forEach(function (skill) {
    const skillItem = document.createElement("li");

    skillItem.innerHTML = `
      <h3>${skill.name}</h3>
      <p>${skill.description}</p>
      <p>Category: ${skill.category}</p>
      <p>Proficiency: ${skill.proficiency}</p>
    `;

    if (skill.link) {
      const skillLink = document.createElement("a");

      skillLink.href = skill.link;
      skillLink.textContent = skill.linkText;
      skillLink.target = "_blank";

      skillItem.appendChild(skillLink);
    }

    skillsList.appendChild(skillItem);
  });
}
/* ===== Skill Card Scroll Animation ===== */

const skillCards = document.querySelectorAll(".skills-page main ul > li");

const skillObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-skill");
      } else {
        entry.target.classList.remove("show-skill");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

skillCards.forEach(function (card) {
  skillObserver.observe(card);
});
/* ==================================================
   04. PROJECT SYSTEM
================================================== */

const projects = [
  {
    name: "Tic Tac Toe",
    description:
      "A simple console-based Tic Tac Toe game implemented in C++. It allows two players to take turns and play the classic game.",
    technologies: ["C++"],
    category: "Other",
    link: "#",
    details:
      "A two-player console game where the board is managed using a simple array-based structure. The project focuses on implementing game logic, player turns, win detection, and basic input handling in C++.",
  },

  {
    name: "Number Conversion System",
    description:
      "A console-based system for converting numbers between binary, octal, decimal, and hexadecimal.",
    technologies: ["C++"],
    category: "Other",
    link: "#",
    details:
      "A console-based conversion system that handles conversions between binary, octal, decimal, and hexadecimal number systems. The project focuses on understanding number representation, positional values, base conversion logic, and user input handling in C++.",
  },

  {
    name: "Hospital Management System",
    description:
      "A console-based hospital management system for managing patient records, appointments, and medical history. It uses a custom heap / priority queue to track the nearest future appointment.",
    technologies: ["C++", "DSA"],
    category: "Other",
    link: "#",
    details:
      "A console-based management system designed to organize patient information, appointments, and medical history. A custom heap / priority queue is used to prioritize appointments based on their scheduled time, demonstrating practical use of data structures in a real-world scenario.",
  },

  {
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built from scratch while learning HTML, CSS, and web development fundamentals.",
    technologies: ["HTML", "CSS"],
    category: "Web",
    link: "#",
    details:
      "A portfolio website developed from scratch to practice the fundamentals of web development. It uses semantic HTML for structure and CSS for responsive layouts, navigation, cards, forms, and different page sections. The project was later extended with JavaScript functionality.",
  },

  {
    name: "JavaScript Interactive Portfolio",
    description:
      "An interactive portfolio being developed using JavaScript for dynamic content, DOM manipulation, events, APIs, and local storage.",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "JavaScript",
    link: "#",
    details:
      "An enhanced version of the portfolio focused on making the website interactive using JavaScript. It includes dynamic project and skill rendering, search and filtering, navigation interactions, a project details modal, dynamic hero content, and other DOM-based interactions.",
  },

  {
    name: "DSA Problem Solving",
    description:
      "A collection of data structure and algorithm problems solved while developing problem-solving and competitive programming skills.",
    technologies: ["C++", "DSA"],
    category: "Other",
    link: "https://leetcode.com/u/Rxhabh_/",
    details:
      "A collection of algorithmic problems solved while developing strong problem-solving skills. The work covers arrays, strings, linked lists, hash maps, stacks, queues, heaps, trees, dynamic programming, searching, sorting, and other common data structure and algorithmic techniques.",
  },
];
const projectsList = document.querySelector("#projects-list");
const searchInput = document.querySelector("#project-search");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCount = document.querySelector("#project-count");

/* ===== Project Modal Elements ===== */

const projectModal = document.querySelector("#project-modal");
const modalTitle = document.querySelector("#modal-title");
const projectModalContent = document.querySelector(".project-modal-content");
const modalDescription = document.querySelector("#modal-description");
const modalTechnologies = document.querySelector("#modal-technologies");
const modalLink = document.querySelector("#modal-link");
const modalClose = document.querySelector("#modal-close");

let currentCategory = "All";

/* ===== Render Projects ===== */

function renderProjects(projectsToRender) {
  projectsList.innerHTML = "";

  projectCount.textContent = `Showing ${projectsToRender.length} of ${projects.length} projects`;

  if (projectsToRender.length === 0) {
    projectsList.innerHTML = `
      <li class="no-projects">
        <p>No projects found matching your search.</p>
      </li>
    `;
    return;
  }
  projectsToRender.forEach(function (project) {
    const projectItem = document.createElement("li");

    projectItem.innerHTML = `
      <h3>${project.name}</h3>

      <p>${project.description}</p>

      <p>
        <b>Technologies:</b>
        ${project.technologies.join(", ")}
      </p>

      <button type="button" class="view-project">
        View Project
      </button>
    `;

    const viewButton = projectItem.querySelector(".view-project");

    viewButton.addEventListener("click", function () {
      
      modalTitle.textContent = project.name;

      modalDescription.textContent = project.details;

      modalTechnologies.textContent = project.technologies.join(", ");

      modalLink.href = project.link;

      projectModal.style.display = "flex";
      projectModalContent.scrollTop = 0;
      document.body.style.overflow = "hidden";
      modalClose.focus();
    });

    projectsList.appendChild(projectItem);
  });
}
/* ===== Filter Projects ===== */

function filterProjects() {
  const searchText = searchInput.value.trim().toLowerCase();

  const filteredProjects = projects.filter(function (project) {
    const matchesCategory =
      currentCategory === "All" || project.category === currentCategory;

    const matchesSearch =
      project.name.toLowerCase().includes(searchText) ||
      project.description.toLowerCase().includes(searchText) ||
      project.details.toLowerCase().includes(searchText) ||
      project.technologies.some(function (technology) {
        return technology.toLowerCase().includes(searchText);
      }) ||
      project.category.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  renderProjects(filteredProjects);
}

/* ===== Search Event ===== */

if (searchInput && projectsList) {
  searchInput.addEventListener("input", function () {
    filterProjects();
  });

  /* ===== Filter Button Events ===== */

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      currentCategory = button.dataset.category;

      filterButtons.forEach(function (btn) {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      });

      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");

      filterProjects();
    });
  });

  /* ===== Initial Project Rendering ===== */

  renderProjects(projects);
}
/* ===== Close Project Modal ===== */

if (modalClose && projectModal) {
  modalClose.addEventListener("click", function () {
    projectModal.style.display = "none";
    document.body.style.overflow = "";
  });

  projectModal.addEventListener("click", function (event) {
    if (event.target === projectModal) {
      projectModal.style.display = "none";
      document.body.style.overflow = "";
    }
  });
}
/* ===== Escape Key ===== */

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (projectModal) {
      projectModal.style.display = "none";
    }

    if (navigation) {
      navigation.classList.remove("show");
    }

    document.body.style.overflow = "";
  }
});
/* ==================================================
   05. PROJECT MODAL
================================================== */

/* ==================================================
   06. CONTACT FORM
================================================== */

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const phoneInput = document.querySelector("#phone");
  const subjectInput = document.querySelector("#subject");
  const messageInput = document.querySelector("#message");

  const nameError = document.querySelector("#name-error");
  const emailError = document.querySelector("#email-error");
  const phoneError = document.querySelector("#phone-error");
  const subjectError = document.querySelector("#subject-error");
  const messageError = document.querySelector("#message-error");
  const contactMethodError = document.querySelector("#contact-method-error");
  const formSuccess = document.querySelector("#form-success");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";
    contactMethodError.textContent = "";
    formSuccess.textContent = "";

    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === "") {
      nameError.textContent = "Please enter your full name.";
      isValid = false;
    }

    // Email validation
    if (emailInput.value.trim() === "") {
      emailError.textContent = "Please enter your email address.";
      isValid = false;
    } else if (!emailInput.validity.valid) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    // Phone validation
    if (
      phoneInput.value.trim() !== "" &&
      !/^[0-9]{10}$/.test(phoneInput.value.trim())
    ) {
      phoneError.textContent = "Please enter a valid 10-digit phone number.";
      isValid = false;
    }

    // Subject validation
    if (subjectInput.value.trim() === "") {
      subjectError.textContent = "Please enter a subject.";
      isValid = false;
    }

    // Message validation
    if (messageInput.value.trim() === "") {
      messageError.textContent = "Please enter a message.";
      isValid = false;
    }

    // Preferred contact method validation
    const contactMethod = document.querySelector(
      'input[name="contact-method"]:checked',
    );

    if (!contactMethod) {
      contactMethodError.textContent =
        "Please select a preferred contact method.";
      isValid = false;
    }

    if (isValid) {
      formSuccess.textContent = "Your message has been submitted successfully!";
      contactForm.reset();
    }
  });
}
/* ==================================================
   07. THEME & LOCAL STORAGE
================================================== */

/* ==================================================
   08. API INTEGRATION
================================================== */
