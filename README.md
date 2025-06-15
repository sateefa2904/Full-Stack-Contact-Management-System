# 📇 AI-First CRM Contact Book

A full-stack, fast-deployable CRM prototype built with **React**, **TypeScript**, **FastAPI**, and **PostgreSQL**, designed to streamline contact management workflows like Apollo and Smartlead. Built for speed, scale, and SaaS realism.

![contact-book-demo](https://via.placeholder.com/800x400?text=Demo+Coming+Soon) <!-- Replace with real GIF or screenshot -->

## 🚀 Features

* ⚡️ **Shipped MVP in 5 days** — Full end-to-end functionality with clean UI and persistent backend
* 🔁 **Add, view, and delete contacts** with real-time UI updates
* 🔌 **RESTful API layer** using FastAPI, Pydantic, and SQLAlchemy
* 📬 Simulated **outbound email** and **webhook modules** (ready for real integrations)
* 📈 **Stress-tested** to support 10k+ contact entries
* 🎨 Responsive design with TailwindCSS

## 🛠️ Tech Stack

| Frontend           | Backend            | Database     | Dev Tools             |
| ------------------ | ------------------ | ------------ | --------------------- |
| React + TypeScript | FastAPI + Pydantic | PostgreSQL   | Vite, GitHub, VS Code |
| TailwindCSS        | SQLAlchemy         | SQLite (dev) | CORS, JSON API, REST  |

## 🧠 Project Highlights

* Built RESTful endpoints to **add, retrieve, and delete** contact records with validation
* Modeled `Contact` schemas using **Pydantic** and SQLAlchemy ORM
* Implemented full **frontend-backend integration**, including API error handling and optimistic UI rendering
* Created a **scalable architecture** mimicking Apollo/Smartlead flows for future integration
* Addressed real-world challenges: **CORS issues**, **async database sync**, and cross-stack debugging

## 📂 Folder Structure

```
📁 backend
├── main.py
├── models/
│   └── contact.py
├── schemas/
│   └── contact.py
└── database.py

📁 frontend
├── App.tsx
├── components/
│   └── ContactForm.tsx
│   └── ContactList.tsx
└── services/
    └── api.ts
```

## 🧪 Getting Started Locally

```bash
# Clone the repo
git clone https://github.com/sateefa2904/contact-book.git
cd contact-book

# Start the backend (Python FastAPI)
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

# Start the frontend (React + Vite)
cd ../frontend
npm install
npm run dev
```

## 📌 To-Do & Next Steps

* [ ] Add authentication (JWT or OAuth)
* [ ] Enable contact search/filtering
* [ ] Integrate real outbound email APIs (e.g., Smartlead)
* [ ] Deploy on Render/Vercel for live demo
* [ ] Add animations and UI polish

## 🤝 Collaborator

**Soli O. Ateefa**
Software Engineer Intern @ UTSW | Honors CS + Legal Studies | [LinkedIn](https://www.linkedin.com/in/solia) | [Portfolio](https://sateefa2904.github.io/soli-portfolio/)
