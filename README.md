# Dev Stack

Dev Stack is a React web application that helps developers explore frontend,
backend, database, and tooling technologies, and build a personal technology
stack by selecting the tools they would use on their next project.

## Description

The application opens with a hero section introducing the concept, followed
by a grid of technology cards covering options such as React, Node.js,
PostgreSQL, and Docker. Each card displays the technology's category,
difficulty level, and rating. Selecting **Add to Stack** saves the
technology to a live "Your Stack" panel, where individual items can be
removed or the entire stack can be cleared at once. The interface is built
around a single shared gradient theme and is fully responsive across mobile,
tablet, and desktop screens.

## Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Component-based user interface |
| Tailwind CSS | Utility-first styling |
| JavaScript (ES6+) | Application logic |
| React-Toastify | Alert notifications |
| JSON | Local technology data source |
| Vite | Development server and build tool |

## Features

**1. Add and Remove Technologies from Your Stack**
Technologies can be added to a personal "Your Stack" list, removed
individually, or cleared all at once using the Remove All button. Every
action, including an attempt to add the same technology twice, triggers a
toast notification.

**2. Fully Responsive Layout**
The navbar is sticky and collapses into a three-part mobile layout
(hamburger menu, logo, and authentication buttons). The technology grid
adapts from a single column on mobile to two columns on tablet and three
columns on desktop.

**3. Data-Driven Interface with Loading State**
All technology data is loaded from a local JSON file at runtime rather than
being hardcoded into the components, and a loading indicator is shown while
the data is being fetched.

## Getting Started

Clone the repository and run the project locally:

\`\`\`bash
git clone https://github.com/ahmedintekhab76-stack/Assignment-5.git
cd Assignment-5
npm install
npm run dev
\`\`\`

Then open the local URL printed in the terminal (typically `http://localhost:5173`).

## Project Structure

\`\`\`
devstack/
├── public/
│   └── data/
│       └── technologies.json   Technology data source
├── src/
│   ├── assets/                 Images and icons
│   ├── components/             Navbar, Hero, TechnologyCard, StackSidebar, Footer
│   ├── hooks/
│   │   └── useTechnologies.js  Fetches JSON data with loading and error state
│   ├── App.jsx                 Main application logic and state
│   └── index.css                Global styles and gradient theme
└── README.md
\`\`\`

---

## React Questions

**1. What is JSX, and why is it used in React?**

JSX is a syntax extension for JavaScript that allows HTML-like markup to be
written directly inside JavaScript code, for example `<div>Hello</div>`.
Under the hood, it compiles into regular `React.createElement()` calls. It
is used because it makes UI structure far easier to read and write than
building it through plain JavaScript function calls.

**2. What is the difference between props and state?**

Props are data passed into a component from its parent; the component
receiving them cannot modify them, as they are read-only. State is data
that a component manages internally using `useState`, and it can change
over time, for example in response to user interaction. In this project,
the `technology` object passed into `TechnologyCard` is a prop, while the
`stack` array inside `App` is state.

**3. What does the `useState` hook do, and where was it used in this project?**

`useState` allows a functional component to hold and update its own data
between renders. It was used in `App.jsx` for the `stack` array (the list
of added technologies) and in `Navbar.jsx` for `isMobileMenuOpen` (whether
the mobile menu is open). Each time `setStack` or `setIsMobileMenuOpen` is
called, React re-renders the component with the updated value.

**4. What does the `useEffect` hook do, and why was it needed to load the JSON data?**

`useEffect` allows side effects, such as data fetching, to run after a
component renders. It was needed in `useTechnologies.js` because fetching
the JSON file is exactly that kind of side effect: it should happen once
when the application first loads, not on every render, so the `fetch()`
call was placed inside `useEffect` with an empty dependency array (`[]`).

**5. Why does every item in a `.map()` list need a unique `key` prop?**

React uses the `key` to distinguish list items between renders, allowing it
to correctly identify which items were added, removed, or reordered rather
than re-rendering the entire list from scratch. Without a stable, unique
key, React can misattribute DOM elements to the wrong data item, leading to
bugs and unnecessary re-renders. Each technology's `id` field (for example,
`"react"`) was used as the key when mapping over the technology list.

**6. What is conditional rendering? Show one place it was used.**

Conditional rendering means displaying different UI depending on a
condition, rather than always rendering the same output. It was used in
`StackSidebar.jsx`:

\`\`\`jsx
{count === 0 ? (
  <div className="...">Your stack is empty.</div>
) : (
  <div className="...">{/* list of stack items */}</div>
)}
\`\`\`

If no technologies have been added to the stack, an empty-state message is
shown; otherwise, the list of selected items is displayed.

**7. How is data passed from a parent component to a child, and how does a child send data back to the parent?**

A parent passes data down to a child through props. For example, `App`
passes `technology`, `isAdded`, and `onAdd` into `<TechnologyCard />`. For a
child to send data back up, the parent passes down a function as a prop
(such as `onAdd`), and the child calls that function with the relevant data
(`onAdd(technology)`). This pattern is commonly known as "lifting state
up," since the actual state (the `stack` array) lives in the parent, and
both the component that adds items and the component that displays them
share it through a single source of truth.