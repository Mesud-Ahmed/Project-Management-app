import ProjectsSidebar from "./components/Sidebar"
import NoProjectSelected from "./components/noProjectSelected"
import NewProject from "./components/newProject"
import SelectedProject from "./components/SelectedProject"
import { useState } from "react"
function App() {
  const [projects, setProjects] = useState({
    selectedProjectId: undefined,//if we are not adding project
    allProjects: [],
    tasks: [],
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
    console.log(id)
    setProjects(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      }
      
    })
  }
  const handleAddTask = (text) => {
    setProjects(prev => {
      const newTask = {
        text: text,
        projectId: prev.selectedProjectId,
        id: Math.random()
      }
      console.log("New Task Added:", newTask);
      return {
        ...prev,
        tasks: [newTask, ...prev.tasks]
      }
    })
  }
  const handleDeleteProject = () => {
    setProjects(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        allProjects: projects.allProjects.filter((project) => project.id !== projects.selectedProjectId)
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
  const handleDeleteTask = (id) => {
    setProjects(prevState => {
      return {
        ...prevState,

        tasks: projects.tasks.filter((task) => task.id !== id),
      }
    })
  }
  const selectedProject = projects.allProjects.find((project) => project.id == projects.selectedProjectId)
  const filteredTasks = projects.tasks.filter(task => task.projectId === projects.selectedProjectId);
  let content = (<SelectedProject
    onAddTask={handleAddTask}
    onDeleteTask={handleDeleteTask}
    project={selectedProject}
    onDelete={handleDeleteProject}
    tasks={filteredTasks}
    selectedProjectId={projects.selectedProjectId}
  />)
  if (projects.selectedProjectId === null) {
    content = <NewProject onNewProject={handleNewProject} onCancel={handleCancelProject} />
  } else if (projects.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddingProject={handleAddingProject} />
  }
  return (
    <main className="h-screen  flex gap-8 bg-[#D4EBF8]">
      <ProjectsSidebar onStartAddingProject={handleAddingProject} projects={projects.allProjects} onSelectProject={handleSelectedProject} selectedProjectId={projects.selectedProjectId} />
      {content}
    </main>

  )


}

export default App
