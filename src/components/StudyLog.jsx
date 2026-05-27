import { useState } from 'react'
import '/src/components/css/StudyLog.css'

const STATUS_CONFIG = {
  done:     { label: 'Done ✓',         color: 'green',  emoji: '✅' },
  progress: { label: 'In Progress',    color: 'blue',   emoji: '🔄' },
  revision: { label: 'Needs Revision', color: 'amber',  emoji: '⚠️' },
}

export default function StudyLog({ store }) {
  const [subject, setSubject] = useState('')
  const [status, setStatus] = useState('done')
  const { entries, addEntry, removeEntry, updateEntryStatus } = store

  function handleAdd() {
    if (!subject.trim()) return
    addEntry(subject.trim(), status)
    setSubject('')
  }

  function handleKey(e) {
    if (e.key === 'Enter') handleAdd()
  }

  const done = entries.filter(e => e.status === 'done').length
  const pct = entries.length ? Math.round((done / entries.length) * 100) : 0

  return (
    <div>
      <div className="log-add-box">
        <input
          className="log-input"
          value={subject}
          onChange={e => setSubject(e.target.value)}
          onKeyDown={handleKey}
          placeholder="What did you study today?"
        />
        <select
          className="log-select"
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          {Object.entries(STATUS_CONFIG).map(([k, v]) => (
            <option key={k} value={k}>{v.label}</option>
          ))}
        </select>
        <button className="log-add-btn" onClick={handleAdd}>+ Add</button>
      </div>

      {entries.length > 0 && (
        <div className="progress-wrap">
          <div className="progress-header">
            <span className="progress-txt">Overall Progress</span>
            <span className="progress-pct">{pct}% done</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <p className="progress-sub">{done} of {entries.length} topics marked as done</p>
        </div>
      )}

      {entries.length === 0 ? (
        <div className="log-empty">
          <span className="log-empty-icon">📖</span>
          <p>No sessions logged yet.</p>
          <p>Add your first study session above!</p>
        </div>
      ) : (
        <div className="entry-list">
          {entries.map(entry => {
            const cfg = STATUS_CONFIG[entry.status]
            return (
              <div key={entry.id} className={`entry-card entry-${cfg.color}`}>
                <span className="entry-emoji">{cfg.emoji}</span>
                <div className="entry-body">
                  <p className="entry-subject">{entry.subject}</p>
                  <p className="entry-meta">{entry.date} at {entry.time}</p>
                </div>
                <select
                  className="entry-status-select"
                  value={entry.status}
                  onChange={e => updateEntryStatus(entry.id, e.target.value)}
                >
                  {Object.entries(STATUS_CONFIG).map(([k, v]) => (
                    <option key={k} value={k}>{v.label}</option>
                  ))}
                </select>
                <button
                  className="entry-del"
                  onClick={() => removeEntry(entry.id)}
                  title="Remove"
                >✕</button>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}