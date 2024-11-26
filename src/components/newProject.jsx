import Input from "./input"
import { useRef } from "react"
export default function NewProject({onNewProject}) {
    const title = useRef()
    const description = useRef()
    const dueDate = useRef()
const handleSave =()=>{ 
    const enteredTitle = title.current.value
    const enteredDescription = description.current.value
    const enteredDueDate = dueDate.current.value 

    onNewProject({
        title: enteredTitle,
        description: enteredDescription,
        dueDate: enteredDueDate
    })
}

    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex  items-center justify-end gap-4 my-4">
                <li><button className="text-stone-700 hover:text-stone-950">Cancel</button></li>
                <li><button 
                onClick={handleSave}
                className="bg-stone-800 text-stone-100 px-6 py-2 rounded-md hover:text-stone-50">Save</button></li>
            </menu>
            <div>
                <Input type='text' ref={title} label='Title' />
                <Input ref={description} label='Description' textarea/>
                <Input type='date' ref={dueDate} label='Due Date' />
            </div>
        </div>
    )

}