import ProjectsSidebar from "./components/Sidebar"
import NoProjectSelected from "./components/noProjectSelected"
import NewProject from "./components/newProject"
import { useState } from "react"
function App() {
  const [projects,setProjects] = useState({
    selectedProjectId : undefined,//if we are not adding project
    allProjects:[]
  })

  const handleAddingProject = ()=>{
    setProjects(prevState => {
      return{
        ...prevState,
        selectedProjectId:null,//if we want to add project
      }
    })
  }
  let content;
  if(projects.selectedProjectId === null){
    content = <NewProject/>
  }else if(projects.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddingProject = {handleAddingProject}/>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddingProject = {handleAddingProject}/>
      {content}
    </main>

  )


}

export default App
