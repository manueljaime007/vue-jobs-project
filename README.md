# Vue Jobs

A full-stack-like job board built with Vue 3, allowing employers to post Vue.js openings and developers to browse and apply. Built as a hands-on project to explore the Vue 3 Composition API, client-side routing, and REST API integration.

---

## Tech Stack

- **Vue 3** — Composition API with `<script setup>`
- **TypeScript** — typed props, reactive state, and interfaces
- **Tailwind CSS v4** — utility-first styling
- **Vue Router 5** — client-side navigation
- **Axios** — HTTP requests
- **JSON Server** — simulated REST API
- **Lucide Vue** — icon library
- **Vue Toastification** — toast notifications

---

## Features

- Browse all job listings with type badges and salary info
- View full job details with company information
- Post new job listings via a validated form
- Edit or delete existing listings
- Responsive layout for mobile and desktop
- Loading states with spinner feedback
- Toast notifications for user actions

---

## Getting Started

### Prerequisites

- Node.js `^20.19.0` or `>=22.12.0`
- npm or pnpm

### Installation

```bash
git clone https://github.com/your-username/vue-jobs.git
cd vue-jobs
npm install
```

### Running the project

The project requires two processes running simultaneously: the mock API and the dev server.

**Start the JSON Server (mock API):**
```bash
npm run server
```
Runs on `http://localhost:8004`

**Start the development server:**
```bash
npm run dev
```
Runs on `http://localhost:9004`

---

## Project Structure

```
src/
├── assets/
├── components/
│   └── ui/          # Reusable UI components (Navbar, Card, BackButton...)
├── data/
│   └── jobsData.json  # Mock database for JSON Server
├── router/
├── shared/
│   └── config/      # API base URL config
├── types/
│   └── job.ts       # Job and Company TypeScript interfaces
└── views/           # Page-level components
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run server` | Start JSON Server on port 8004 |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run oxlint and ESLint with auto-fix |
| `npm run format` | Format source files with Prettier |

---

## License

MIT