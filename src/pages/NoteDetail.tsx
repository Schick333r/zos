import { useParams } from "react-router-dom"
import AppLayout from "@/layouts/AppLayout"
import { useNotes } from "@/context/NotesContext"

export default function NoteDetail() {
  const { id } = useParams()
  const { notes } = useNotes()
  const note = notes.find((n) => n.id === id)

  if (!note) {
    return (
      <AppLayout>
        <p className="text-muted-foreground">Note nicht gefunden.</p>
      </AppLayout>
    )
  }

  return (
    <AppLayout>
      <div className="max-w-3xl flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{note.title}</h1>
        <div
          className="min-h-[400px] rounded-xl border bg-white p-6 text-black prose"
          dangerouslySetInnerHTML={{ __html: note.content }}
        />
      </div>
    </AppLayout>
  )
}
