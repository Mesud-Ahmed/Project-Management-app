import ProjectsSidebar from "./components/Sidebar"
import NoProjectSelected from "./components/noProjectSelected"
import NewProject from "./components/newProject"
import SelectedProject from "./components/SelectedProject"
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
  const handleSelectedProject = (id) => {
    setProjects(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    })
  }
  const handleDeleteProject = ()=>{
    setProjects(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        allProjects:projects.allProjects.filter((project) => project.id !== projects.selectedProjectId)
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
  const selectedProject = projects.allProjects.find(project => project.id == projects.selectedProjectId)
  
  let content = <SelectedProject project={ selectedProject} onDelete={handleDeleteProject}/>
  if (projects.selectedProjectId === null) {
    content = <NewProject onNewProject={handleNewProject} onCancel={handleCancelProject} />
  } else if (projects.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddingProject={handleAddingProject} />
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddingProject={handleAddingProject} projects={projects.allProjects} onSelectProject={handleSelectedProject} />
      {content}
    </main>

  )


}

export default App
