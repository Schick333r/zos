import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import AppLayout from "@/layouts/AppLayout"
import { useNotes } from "@/context/NotesContext"

export default function NewNote() {
  const [title, setTitle] = useState("")
  const { addNote } = useNotes()
  const navigate = useNavigate()

  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    immediatelyRender: false,
  })

  function handleSave() {
    if (!editor) return
    addNote(title, editor.getHTML())
    navigate("/notes")
  }

  return (
    <AppLayout>
      <div className="flex flex-col gap-4 max-w-3xl">
        <div className="flex items-center justify-between">
          <input
            type="text"
            placeholder="Titel..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-2xl font-bold bg-transparent outline-none placeholder:text-muted-foreground w-full"
          />
          <button
            onClick={handleSave}
            className="ml-4 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Speichern
          </button>
        </div>

        <div className="min-h-[400px] rounded-xl border bg-white p-6 text-black">
          <EditorContent editor={editor} />
        </div>
      </div>
    </AppLayout>
  )
}
