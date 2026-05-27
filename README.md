# 📚 Study Tracker

A simple, beginner-friendly study tracker built for students who want to
stay organised, build better study habits, and actually know what they've
covered — and what still needs work.

---

## Features

- 📖 **Study Log** — log topics with a status (Done, In Progress, Needs Revision)
  and watch your overall progress bar grow
- 🔔 **Reminders** — set which days and times you plan to study specific subjects
- 📝 **Notes** — a freeform scratchpad for formulas, key points, and anything
  you don't want to forget
- 🎯 **Next Session Banner** — leave yourself a note of what to focus on next time
- 💾 Everything saves automatically to your browser — nothing lost on refresh or close

---

## Tech Stack

| Layer | Tool |
|-------|------|
| Frontend framework | React 19 |
| Build tool | Vite 8 |
| Storage | localStorage (browser) |
| Hosting | Vercel |

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Jeremy-3/study-tracker.git
cd study-tracker
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production

```bash
npm run build
```

---

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**
3. Import your GitHub repo
4. Vercel auto-detects Vite — no settings to change
5. Click **Deploy** — your app is live in under a minute

Every time you push to `main`, Vercel redeploys automatically.

---

## Project Structure

    study-tracker/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── README.md
    └── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    ├── hooks/
    │   └── useStudyStore.js  # All localStorage read/write logic
    └── components/
    ├── Banner.jsx            # "Focus next session" goal banner
    ├── Banner.css
    ├── StudyLog.jsx          # Log study sessions + progress bar
    ├── StudyLog.css
    ├── Reminders.jsx         # Day/time study reminders
    ├── Reminders.css
    ├── Notes.jsx             # Freeform notes scratchpad
    └── Notes.css


---

## Roadmap

This project is being built in phases. Here's where things are headed:

### ✅ Phase 1 — Core Tracker (current)
- Study log with status tracking
- Progress bar
- Day/time reminders
- Notes scratchpad
- Next session banner
- All data persisted in localStorage

### 🚧 Phase 2 — Student Productivity (in progress)
- **Pomodoro Timer** — 25 min study / 5 min break cycles with sound alerts
- **Streak Counter** — tracks how many days in a row you've studied 🔥
- **Subject Categories** — group and filter log entries by subject
- **Exam Countdown** — add exam dates and see a live "X days to go" ticker

### 🔮 Phase 3 — AI Study Assistant
- "What should I revise today?" — AI suggestion based on your log
- Quiz generator — test yourself on your own notes
- Study plan generator — given your exam date and topics, build a plan
- Powered by the Anthropic API (Claude)
- API key protected via a Vercel serverless function (no separate backend needed)

### 🌍 Phase 4 — Multi-device & Sharing (if going public)
- User accounts via Firebase Auth
- Data syncs across devices
- Shareable progress links for accountability partners
- Optional: teacher/parent view to monitor a student's progress

---

## Contributing

This is a personal project for now, but feel free to fork it and make it your own.

---

