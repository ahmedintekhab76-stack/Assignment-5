# 🚀 Dev Stack

**Dev Stack** is a React web app that helps developers explore frontend, backend,
database, and tooling technologies — then build a personal "stack" by picking
the tools they'd actually use on their next project.

Compare technologies side by side, save your favorites to **Your Stack**, and
build a shortlist you can revisit anytime.

---

## ✨ Overview

The app opens with a hero section that introduces the idea, then scrolls into
a grid of technology cards — React, Node.js, PostgreSQL, Docker, and more.
Each card shows its category, difficulty level, and rating. Clicking
**Add to Stack** saves it to a live **Your Stack** panel, where it can be
removed one at a time or all at once. The whole interface is built around a
single shared orange → pink → violet gradient, and it's fully responsive
from mobile to desktop.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **React.js** | Component-based UI |
| **Tailwind CSS** | Utility-first styling |
| **JavaScript (ES6+)** | App logic |
| **React-Toastify** | Alert notifications |
| **JSON** | Local technology data source |
| **Vite** | Dev server & build tool |

## 🌟 Features

### 1. Add / Remove Your Stack
Pick any number of technologies into a personal **Your Stack** list, remove
one at a time with the `✕` button, or clear everything at once with
**Remove All**. Every action — including trying to add the same technology
twice — triggers a toast notification.

### 2. Fully Responsive Layout
A sticky navbar that collapses into a clean three-part mobile layout
(hamburger → logo → auth buttons), and a technology grid that reflows from
1 column on mobile, to 2 on tablet, to 3 on desktop.

### 3. Data-Driven UI with Loading State
All technologies are loaded from a local JSON file at runtime — not
hardcoded into the component — with a loading spinner shown while the
fetch is in flight.

## 📦 Getting Started

Clone the project and run it locally:

\`\`\`bash
git clone https://github.com/ahmedintekhab76-stack/Assignment-5.git
cd Assignment-5
npm install
npm run dev
\`\`\`

Then open the local URL printed in your terminal (usually `http://localhost:5173`).

## 📁 Project Structure

\`\`\`
devstack/
├── public/
│   └── data/
│       └── technologies.json   # Technology data source
├── src/
│   ├── assets/                 # Images & icons
│   ├── components/             # Navbar, Hero, TechnologyCard, StackSidebar, Footer
│   ├── hooks/
│   │   └── useTechnologies.js  # Fetches JSON data with loading/error state
│   ├── App.jsx                 # Main app logic & state
│   └── index.css               # Global styles + gradient theme
└── README.md
\`\`\`

---

## 🧠 React Questions

**1. What is JSX, and why is it used in React?**

JSX is a syntax extension for JavaScript that lets us write HTML-like markup
directly inside our JavaScript/React code, for example `<div>Hello</div>`.
Under the hood it gets compiled into regular `React.createElement()` calls.
We use it because it's much easier to read and write UI structure this way,
instead of building it with plain JavaScript function calls.

**2. What is the difference between props and state?**

Props are data passed **into** a component from its parent — the component
receiving them cannot change them, they're read-only. State is data that a
component manages **itself**, using `useState`, and it can change over time
(for example, when the user clicks a button). In this project, `technology`
passed into `TechnologyCard` is a prop, while `stack` inside `App` is state.

**3. What does the `useState` hook do, and where did you use it in this project?**

`useState` lets a functional component hold and update its own data between
renders. We used it in `App.jsx` for the `stack` array (the list of added
technologies) and in `Navbar.jsx` for `isMobileMenuOpen` (whether the mobile
menu is open or closed). Every time `setStack` or `setIsMobileMenuOpen` is
called, React re-renders the component with the new value.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**

`useEffect` lets us run side effects — code that reaches outside of React's
normal render flow, like fetching data — after a component renders. We
needed it in `useTechnologies.js` because fetching the JSON file is exactly
that kind of side effect: it should happen once when the app first loads,
not on every single re-render, so we put the `fetch()` call inside
`useEffect` with an empty dependency array (`[]`).

**5. Why does every item in a `.map()` list need a unique `key` prop?**

React uses the `key` to tell list items apart between renders, so it knows
which items were added, removed, or reordered, instead of re-rendering the
whole list from scratch. Without a stable, unique key, React can mix up
which DOM element belongs to which data item, causing bugs and wasted
re-renders. We used each technology's `id` field (e.g. `"react"`) as the
key when mapping over the technology list.

**6. What is conditional rendering? Show one place you used it.**

Conditional rendering means showing different UI depending on some
condition, instead of always rendering the same thing. We used it in
`StackSidebar.jsx`:

\`\`\`jsx
{count === 0 ? (
  <div className="...">Your stack is empty.</div>
) : (
  <div className="...">{/* list of stack items */}</div>
)}
\`\`\`

If nothing has been added to the stack yet, it shows the empty message;
otherwise it shows the actual list.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

A parent passes data down to a child through **props** — for example, `App`
passes `technology`, `isAdded`, and `onAdd` into `<TechnologyCard />`. For a
child to send data back up, the parent passes down a **function as a prop**
(like `onAdd`), and the child calls that function with whatever data it
wants to send (`onAdd(technology)`). This is often called "lifting state
up," because the actual state (the `stack` array) lives in the parent, and
both the child that adds items and the child that displays them share it
through that one source of truth.

---

<p align="center">Built with ❤️ using React & Tailwind CSS</p>