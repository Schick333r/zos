import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

export function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hallo Z.OS 👋</p>",
    immediatelyRender: false,
  })

  if (!editor) {
    return null
  }

  return (
    <div className="min-h-[400px] rounded-xl border bg-white p-6 text-black">
      <EditorContent editor={editor} />
    </div>
  )
}