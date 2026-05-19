import { createContext, useContext, useState } from "react"

export type Note = {
  id: string
  title: string
  content: string
}

type NotesContextType = {
  notes: Note[]
  addNote: (title: string, content: string) => void
}

const NotesContext = createContext<NotesContextType | null>(null)

export function NotesProvider({ children }: { children: React.ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([])

  function addNote(title: string, content: string) {
    setNotes((prev) => [
      ...prev,
      { id: crypto.randomUUID(), title, content },
    ])
  }

  return (
    <NotesContext.Provider value={{ notes, addNote }}>
      {children}
    </NotesContext.Provider>
  )
}

export function useNotes() {
  const ctx = useContext(NotesContext)
  if (!ctx) throw new Error("useNotes must be used within NotesProvider")
  return ctx
}
