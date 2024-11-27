import ProjectsSidebar from "./components/Sidebar"
import NoProjectSelected from "./components/noProjectSelected"
import NewProject from "./components/newProject"
import { useState } from "react"
function App() {
  const [projects, setProjects] = useState({
    selectedProjectId: undefined,//if we are not adding project
    allProjects: []
  })

  const handleAddingProject = () => {
    setProjects(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,//if we want to add project
      }
    })
  }
  const handleCancelProject = () => {
    setProjects(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }
  const handleNewProject = (projectData) => {
    setProjects(prev => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return {
        ...prev,
        selectedProjectId: undefined,
        allProjects: [...prev.allProjects, newProject]
      }
    })
  }

  let content;
  if (projects.selectedProjectId === null) {
    content = <NewProject onNewProject={handleNewProject} onCancel={handleCancelProject}/>
  } else if (projects.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddingProject={handleAddingProject} />
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddingProject={handleAddingProject} projects={projects.allProjects} />
      {content}
    </main>

  )


}

export default App
