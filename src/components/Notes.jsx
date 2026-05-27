import { useState } from 'react'
import '/src/components/css/Notes.css'

export default function Notes({ store }) {
  const { notes, setNotes } = store
  const [saved, setSaved] = useState(false)

  function handleSave() {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div>
      <p className="notes-hint">
        📌 Use this space for formulas, key points, questions to revisit — anything you don't want to forget.
      </p>
      <textarea
        className="notes-area"
        value={notes}
        onChange={e => setNotes(e.target.value)}
        placeholder="Start typing your notes here...&#10;&#10;Tip: Notes are saved automatically when you click Save!"
      />
      <div className="notes-footer">
        <span className={`notes-saved ${saved ? 'show' : ''}`}>✅ Notes saved!</span>
        <button className="notes-save-btn" onClick={handleSave}>
          💾 Save Notes
        </button>
      </div>
    </div>
  )
}