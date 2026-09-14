# Rishabh's Interactive Portfolio

## Project Overview

This project is an interactive personal portfolio website developed as an extension of my Week 2 portfolio during the **InternNova Full Stack Web Development Internship**.

Week 3 upgrades the static portfolio into a **JavaScript-powered interactive web application** using HTML, CSS, JavaScript, DOM manipulation, Local Storage, and API integration.

The portfolio presents my profile, education, skills, projects, resume, and contact information while providing interactive features such as project search and filtering, project details modal, form validation, theme persistence, and live API data.

## Features

### Smart Navigation

* Mobile menu toggle
* Open and close navigation
* Active navigation state
* Navigation closes after selecting a link
* Close navigation when clicking outside
* Back-to-top button

### Dynamic Hero Section

* Time-based greeting generated using JavaScript
* Interactive resume CTA
* Dynamic message after interacting with the resume button

### Dynamic Skills Engine

* 8 skills stored in a JavaScript array of objects
* Skill cards generated dynamically using JavaScript
* Each skill includes:

  * Name
  * Category
  * Description
  * Proficiency level

### Project Showcase System

* 6 projects stored in a JavaScript array of objects
* Dynamic project card generation
* Search projects by name, description, technology, or category
* Category filtering
* Dynamic project count
* No page refresh required

### Project Details Modal

* Opens when a project is selected
* Displays project name, description, technologies, and project link
* Close button
* Close by clicking outside the modal
* Close using the Escape key

### Interactive Contact Form

* Client-side form validation
* Name validation
* Email validation
* Phone validation
* Subject validation
* Message validation
* Preferred contact method validation
* Inline validation messages
* Success message without unnecessary page reload

### Dark / Light Mode

* Light mode and dark mode
* Professional theme switcher
* Theme state updates dynamically
* Theme preference stored in Local Storage
* Selected theme remains after refreshing the page

### Local Storage

Local Storage is used to save the user's selected theme preference.

The saved value is retrieved when the page loads and applied automatically so the user's theme remains consistent across page refreshes.

### Live API Integration

The Projects page includes a live API-powered developer quote feature.

The implementation demonstrates:

**User Action → API Request → Loading State → API Response → Dynamic UI**

It also handles API failures and empty responses by displaying an appropriate error message.

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* DOM Manipulation
* Flexbox
* CSS Grid
* Media Queries
* Local Storage
* Fetch API
* Git
* GitHub

## JavaScript Concepts Used

* Variables using `const` and `let`
* Arrays and objects
* Functions
* Conditional statements
* Loops
* Array methods such as `filter()`, `forEach()`, and `some()`
* DOM selection and manipulation
* Event listeners
* Template literals
* Class manipulation
* Local Storage
* JSON parsing and serialization
* `fetch()`
* Promises
* `async/await`
* Error handling with `try...catch`
* Form validation
* Intersection Observer

## API Used

**DummyJSON Random Quotes API**

The API is requested using JavaScript's `fetch()` function.

The application:

1. Waits for the user to click the quote button.
2. Displays a loading message.
3. Sends a request to the API.
4. Reads the JSON response.
5. Displays the quote dynamically.
6. Handles failed requests and empty responses.

## Project Structure

```text
portfolio/
│
├── index.html
├── README.md
├── style.css
├── script.js
│
├── html_files/
│   ├── about.html
│   ├── contact.html
│   ├── education.html
│   ├── projects.html
│   ├── resume.html
│   └── skills.html
│
├── image/
│   ├── Data_Structure_certificate.jpg
│   └── profile.jpg
│
└── pdf_files/
    └── rishabh_resume.pdf
```

## How to Run

1. Clone or download the repository.
2. Open the project folder in VS Code.
3. Open `index.html` in a browser.

For the best experience, the project can also be run using the **Live Server** extension in VS Code.

## Screenshots

The following screenshots demonstrate the major Week 3 features:

* Desktop homepage
* Mobile responsive view
* Project search and filtering
* Project details modal
* Contact form validation
* Dark / Light mode
* Live API integration

## Future Improvements

* Add more real-world projects
* Connect the contact form to a backend service
* Add authentication and personalized dashboard features
* Add more API-powered features
* Improve accessibility and keyboard navigation
* Deploy the complete project with a custom domain

## Internship

Developed as part of the **InternNova Full Stack Web Development Internship – Week 3**.
