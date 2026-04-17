# Service Booking Platform

## Description
A React-based web application that allows users to book services such as cleaning, tutoring, and plumbing. The application provides an interactive interface where users can select a service, enter their name, choose a date, and confirm their booking through a modal form.

The system prevents duplicate bookings and allows users to manage their bookings efficiently.

---

## Features
- View a list of available services  
- Book a service using name and date  
- Modal-based booking form (no page reload)  
- Keyboard-friendly interaction (Enter/Escape navigation)  
- Prevent duplicate bookings (same name, service, and date)  
- Display all bookings dynamically  
- Cancel existing bookings  
- User feedback messages for booking status  

---

## Concepts Used
- Props-based data flow  
- Callback functions for child-to-parent communication  
- Conditional rendering (form/modal display)  
- State management using React Hooks (`useState`)  
- useRef and useEffect for input focus handling  

---

## Tech Stack
- React (Vite)  
- JavaScript 
- HTML & CSS  

---

## Project Structure

src/
components/
ServiceList.jsx
ServiceCard.jsx
BookingForm.jsx
BookingList.jsx
App.jsx
App.css


---

## How It Works
1. User selects a service from the list  
2. A modal booking form appears  
3. User enters name and selects date  
4. Booking is validated and added to the list  
5. Duplicate bookings are prevented  
6. User can cancel any existing booking  

---

## Additional Improvements
- Modal-based UI for better user experience  
- Keyboard navigation for faster interaction  
- Improved styling for clean and modern interface  
- Input focus management for usability  

---


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Author
Fowzan Khan
