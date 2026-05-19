import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { TooltipProvider } from "@/components/ui/tooltip"
import { NotesProvider } from "@/context/NotesContext"
import "./App.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NotesProvider>
      <TooltipProvider>
        <App />
      </TooltipProvider>
    </NotesProvider>
  </React.StrictMode>,
)
