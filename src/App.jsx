import { useState } from 'react'
import { useStudyStore } from './hooks/useStudyStore'
import Banner from './components/Banner'
import StudyLog from './components/StudyLog'
import Reminders from './components/Reminders'
import Notes from './components/Notes'
import './App.css'

const TABS = [
  { id: 'log', label: '📖 Study Log' },
  { id: 'reminders', label: '🔔 Reminders' },
  { id: 'notes', label: '📝 Notes' },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('log')
  const store = useStudyStore()

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <div className="header-inner">
          <h1 className="app-title">📚 Study Tracker</h1>
          <p className="app-sub">Stay on top of everything you're learning</p>
        </div>
      </header>

      <main className="app-main">
        <Banner banner={store.banner} setBanner={store.setBanner} />

        <nav className="tab-nav">
          {TABS.map(t => (
            <button
              key={t.id}
              className={`tab-btn ${activeTab === t.id ? 'active' : ''}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </nav>

        <div className="tab-content">
          {activeTab === 'log' && <StudyLog store={store} />}
          {activeTab === 'reminders' && <Reminders store={store} />}
          {activeTab === 'notes' && <Notes store={store} />}
        </div>
      </main>
    </div>
  )
}