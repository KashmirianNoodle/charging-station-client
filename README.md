# ⚡ Charging Station Frontend (Vue.js)

This is the frontend for the Charging Station Management System. It allows users to log in, view charging stations on a map, and perform full CRUD operations with a user-friendly interface.

## 🎯 Features

- Vue.js Single Page App
- Login form (JWT-based auth)
- Charger listing with filters
- Add/Edit/Delete chargers
- Map View (Google Maps or OpenStreetMap)
- Styled with custom CSS

## 📦 Tech Stack

- Vue 3 + Vite
- Axios for API calls
- Vue Router
- Google Maps / OpenStreetMap
- Custom CSS (clean, responsive)

## 📂 Project Structure

```
frontend/
├── public/
├── src/
│   ├── components/
│   ├── views/
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── .env
├── vite.config.js
└── README.md
```

## 🛠 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/charging-station-app.git
cd charging-station-app/frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root of the frontend:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Update if backend is deployed (e.g. Render URL).

### 4. Run the App

```bash
npm run dev
```

Visit `http://localhost:5173`

## 🌍 Deployment

You can deploy this frontend to:

- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)

Make sure to update the API URL in `.env` accordingly.

## 📸 Screens

- 🔐 Login Page
- 📄 Chargers List Page (with filters)
- 🗺️ Map View
- ➕ Add/Edit Form

## 👤 Author

Made with 💻 and ⚡ for the Full-Stack Node + Vue Assignment.