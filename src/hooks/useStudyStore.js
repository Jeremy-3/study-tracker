import { useState, useEffect } from 'react'

function load(key, fallback) {
  try {
    const val = localStorage.getItem(key)
    return val ? JSON.parse(val) : fallback
  } catch {
    return fallback
  }
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function useStudyStore() {
  const [entries, setEntries] = useState(() => load('study_entries', []))
  const [reminders, setReminders] = useState(() => load('study_reminders', []))
  const [notes, setNotes] = useState(() => load('study_notes', ''))
  const [banner, setBanner] = useState(() => load('study_banner', ''))

  useEffect(() => save('study_entries', entries), [entries])
  useEffect(() => save('study_reminders', reminders), [reminders])
  useEffect(() => save('study_notes', notes), [notes])
  useEffect(() => save('study_banner', banner), [banner])

  function addEntry(subject, status) {
    const now = new Date()
    setEntries(prev => [{
      id: Date.now(),
      subject,
      status,
      date: now.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      time: now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
    }, ...prev])
  }

  function removeEntry(id) {
    setEntries(prev => prev.filter(e => e.id !== id))
  }

  function updateEntryStatus(id, status) {
    setEntries(prev => prev.map(e => e.id === id ? { ...e, status } : e))
  }

  function addReminder(subject, days, time) {
    setReminders(prev => [...prev, { id: Date.now(), subject, days, time }])
  }

  function removeReminder(id) {
    setReminders(prev => prev.filter(r => r.id !== id))
  }

  return {
    entries, addEntry, removeEntry, updateEntryStatus,
    reminders, addReminder, removeReminder,
    notes, setNotes,
    banner, setBanner
  }
}