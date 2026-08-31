 ## ✨ Smart User Explorer

A modern React application built for the **"Debounced Search with Dynamic User Cards & Favorites"** challenge.

Smart User Explorer fetches user data from a public mock API and provides a clean, responsive interface for searching, filtering, and managing favorite users.

 ## 🚀 Live Demo

[View Live Demo](https://smart-user-explorer.vercel.app/)

 ## 📌 Challenge

The application was built to demonstrate:

- Fetching and rendering user data from an API
- Debounced search functionality
- Dynamic user cards
- Favorite user management
- Loading and error handling
- Responsive and modern UI

## ✨ Features

### 👥 Dynamic User Cards

User information is fetched from the JSONPlaceholder API and displayed in responsive cards.

Each card shows:

- User name
- Email address
- Company name
- City
- Favorite status

### 🔎 Debounced Search

Users can search by:

- Name
- Email
- Company

The search input uses a **400ms debounce** to avoid filtering on every keystroke.

### ⭐ Favorites

Users can mark/unmark users as favorites.

Favorite data is stored in **localStorage**, so the selected favorites remain available after refreshing the page.

### 📊 Live Statistics

The dashboard displays:

- Total users
- Total favorites
- Currently displayed users

These values update dynamically based on the current search and filter state.

### 🌙 Light & Dark Mode

The application includes a theme toggle for Light and Dark Mode.

The selected theme is also saved in localStorage.

### ⚡ Loading State

A loading skeleton is displayed while user data is being fetched.

### ⚠️ Error Handling

If the API request fails, the application displays a user-friendly error screen with a **Try Again** option.

### 📱 Responsive Design

The interface adapts to:

- Desktop
- Tablet
- Mobile

## 🛠️ Tech Stack

- React
- JavaScript
- Vite
- CSS
- JSONPlaceholder REST API
- Browser LocalStorage

## 🌐 API

This project uses the JSONPlaceholder mock API:

`https://jsonplaceholder.typicode.com/users`

The application fetches the user data when the component mounts.

## 🧩 Project Structure

```text
smart-user-explorer/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── FilterButtons.jsx
│   │   ├── LoadingSkeleton.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Stats.jsx
│   │   └── UserCard.jsx
│   │
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── README.md
└── vite.config.js