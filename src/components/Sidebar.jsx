import Button from "./Button"
export default function ProjectsSidebar({ onStartAddingProject, projects, onSelectProject, selectedProjectId }) {
    return (
        <aside className=" bg-[#8174A0] py-8 px-16 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8  font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <Button onClick={onStartAddingProject}>
                    + Add Project
                </Button>
            </div>
            <ul className="mt-8">
                {projects.map(project => {

                    let cssClasses = "w-full text-left px-2 py-1 rounded-md my-1  hover:text-stone-200 hover:bg-stone-800 "
                    if (project.id == selectedProjectId) {
                        cssClasses += ' bg-[#526E48] text-stone-200'
                    } else {
                        cssClasses += '  bg-stone-600 text-stone-400'
                    }
                    return (
                        <li key={project.id}>
                            <button onClick={() => onSelectProject(project.id)} className={cssClasses}>{project.title}</button>
                        </li>)
                }
                )
                }

            </ul>
        </aside>
    )
}