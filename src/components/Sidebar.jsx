import Button from "./Button"
export default function ProjectsSidebar({onStartAddingProject}){
    return(
        <aside className="w-1/3 bg-stone-900 py-8 px-16 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8  font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <Button onClick={onStartAddingProject}>
                    + Add Project
                </Button>
            </div>
            <ul></ul>
        </aside>
    )
}