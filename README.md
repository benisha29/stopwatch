# ⏱️ Stopwatch App (React)

A basic stopwatch application developed using **React** and **Tailwind CSS**.  
This project focuses on understanding React hooks, timers, and conditional rendering.

---

## ✨ Features
- Start and Stop functionality using a ternary operator
- Reset button to restart the stopwatch
- Time tracking with millisecond precision
- Displays time in `MM : SS : MS` format
- Built using React Hooks (`useState`, `useEffect`)
- Simple and clean UI styled with Tailwind CSS

---

## 🧰 Tech Stack
- React
- JavaScript (ES6)
- Tailwind CSS

---

## 🔍 Implementation Details
- `useState` manages the stopwatch time and running state
- `useEffect` handles the timer using `setInterval`
- Time increases by **10ms** while the stopwatch is running
- Conditional rendering is used to toggle between Start and Stop buttons
- Reset button sets the timer back to zero

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
