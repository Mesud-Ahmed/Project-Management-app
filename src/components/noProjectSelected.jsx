import notebook from '../assets/notebook.jpg'
import Button from "./Button"
export default function NoProjectSelected({onStartAddingProject}){
    return(
        <div className="mt-24 text-center w-2/3">
            <img className='w-26 h-20 object-contain mx-auto' src={notebook} alt="an empty task list" />
            <h2 className="text-xl font-bold text-stone-500 my-4">No project selected</h2>
            <p className='text-stone-400 mb-4'>Select a project or get started with a new one</p>
            <p className='mt-8'>
                <Button onClick={onStartAddingProject}>Create new Project</Button>
            </p>
        </div>
    )
}