import ProjectsSidebar from "./components/Sidebar"
import NoProjectSelected from "./components/noProjectSelected"
import NewProject from "./components/newProject"
function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar/>
      <NoProjectSelected/>
    </main>

  )


}

export default App
