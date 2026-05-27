import { useState } from 'react'
import '/src/components/css/Reminders.css'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default function Reminders({ store }) {
  const [subject, setSubject] = useState('')
  const [selectedDays, setSelectedDays] = useState([])
  const [time, setTime] = useState('')
  const { reminders, addReminder, removeReminder } = store

  function toggleDay(day) {
    setSelectedDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    )
  }

  function handleAdd() {
    if (!subject.trim() || selectedDays.length === 0) return
    addReminder(subject.trim(), selectedDays, time || 'No time set')
    setSubject('')
    setSelectedDays([])
    setTime('')
  }

  return (
    <div>
      <div className="remind-form">
        <label className="form-label">What to study</label>
        <input
          className="remind-input"
          value={subject}
          onChange={e => setSubject(e.target.value)}
          placeholder="e.g. Organic chemistry, Chapter 3..."
        />

        <label className="form-label">Study days <span className="form-hint">(tap to select)</span></label>
        <div className="days-grid">
          {DAYS.map(day => (
            <button
              key={day}
              className={`day-btn ${selectedDays.includes(day) ? 'day-selected' : ''} ${day === 'Sat' || day === 'Sun' ? 'weekend' : ''}`}
              onClick={() => toggleDay(day)}
            >
              {day}
            </button>
          ))}
        </div>

        <label className="form-label">Study time <span className="form-hint">(optional)</span></label>
        <input
          type="time"
          className="remind-input remind-time"
          value={time}
          onChange={e => setTime(e.target.value)}
        />

        <button
          className="remind-add-btn"
          onClick={handleAdd}
          disabled={!subject.trim() || selectedDays.length === 0}
        >
          🔔 Set Reminder
        </button>
      </div>

      {reminders.length === 0 ? (
        <div className="remind-empty">
          <span>🔕</span>
          <p>No reminders set yet.</p>
          <p>Fill in the form above to add one!</p>
        </div>
      ) : (
        <div className="reminder-list">
          <h3 className="remind-list-title">Your Reminders</h3>
          {reminders.map(r => (
            <div key={r.id} className="reminder-card">
              <div className="reminder-body">
                <p className="reminder-subject">{r.subject}</p>
                <div className="reminder-days">
                  {r.days.map(d => (
                    <span key={d} className={`day-tag ${d === 'Sat' || d === 'Sun' ? 'weekend-tag' : ''}`}>{d}</span>
                  ))}
                  {r.time !== 'No time set' && (
                    <span className="time-tag">🕐 {r.time}</span>
                  )}
                </div>
              </div>
              <button className="reminder-del" onClick={() => removeReminder(r.id)}>✕</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}