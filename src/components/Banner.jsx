import { useState } from 'react'
import '/src/components/css/Banner.css'

export default function Banner({ banner, setBanner }) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(banner)

  function handleSave() {
    if (draft.trim()) {
      setBanner(draft.trim())
      setEditing(false)
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleSave()
    if (e.key === 'Escape') setEditing(false)
  }

  return (
    <div className="banner-card">
      <div className="banner-top">
        <span className="banner-label">🎯 Focus for next session</span>
        {!editing && (
          <button className="banner-edit-btn" onClick={() => { setDraft(banner); setEditing(true) }}>
            {banner ? 'Edit' : 'Set goal'}
          </button>
        )}
      </div>

      {editing ? (
        <div className="banner-input-row">
          <input
            autoFocus
            className="banner-input"
            value={draft}
            onChange={e => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="e.g. Chapter 5 — thermodynamics, past papers..."
          />
          <button className="banner-save-btn" onClick={handleSave}>Save</button>
          <button className="banner-cancel-btn" onClick={() => setEditing(false)}>✕</button>
        </div>
      ) : (
        <p className="banner-text" onClick={() => { setDraft(banner); setEditing(true) }}>
          {banner || 'Tap "Set goal" to add what you want to study next time →'}
        </p>
      )}
    </div>
  )
}