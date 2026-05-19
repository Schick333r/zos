import { Link } from "react-router-dom"
import {
  Inbox,
  FolderKanban,
  CheckSquare,
  ChevronDown,
  LayoutDashboard,
  Settings,
  Plus,
} from "lucide-react"
import { useNotes } from "@/context/NotesContext"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const projects = ["Website Redesign", "Tauri App", "Customer Portal"]
const tasks = ["Backlog", "In Progress", "Done"]

export function AppSidebar() {
  const { notes } = useNotes()

  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div className="flex size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <LayoutDashboard className="size-4" />
              </div>

              <div className="flex flex-col">
                <span className="font-semibold">My Dashboard</span>
                <span className="text-xs text-sidebar-foreground/70">
                  Workspace
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <div className="flex justify-end">
            <Link
              to="/notes/new"
              className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground">
              Create
              <Plus className="size-3" />
            </Link>
          </div>
        </SidebarGroup>
        <SidebarGroup>
            <SidebarGroupLabel className="p-0">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/inbox">
                    <Inbox />
                    <span>Inbox</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* NOTES */}
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <div className="flex items-center gap-1">
                    <SidebarMenuButton asChild className="flex-1">
                      <Link to="/notes">
                        <FolderKanban />
                        <span>Notes</span>
                      </Link>
                    </SidebarMenuButton>
                    <CollapsibleTrigger asChild>
                      <button className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-sidebar-accent">
                        <ChevronDown className="size-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </button>
                    </CollapsibleTrigger>
                  </div>
                </SidebarMenuItem>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {notes.map((note) => (
                      <SidebarMenuSubItem key={note.id}>
                        <SidebarMenuSubButton asChild>
                          <Link to={`/notes/${note.id}`}>
                            <span>{note.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </Collapsible>

              {/* PROJECTS */}
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <FolderKanban />
                      <span>Projects</span>
                      <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {projects.map((project) => (
                        <SidebarMenuSubItem key={project}>
                          <SidebarMenuSubButton>
                            <span>{project}</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              {/* TASKS */}
              <Collapsible className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <CheckSquare />
                      <span>Tasks</span>
                      <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {tasks.map((task) => (
                        <SidebarMenuSubItem key={task}>
                          <SidebarMenuSubButton>
                            <span>{task}</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Settings />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
