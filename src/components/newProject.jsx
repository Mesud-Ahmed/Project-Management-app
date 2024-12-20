import Input from "./input"
import Modal from "./Modal"
import { useRef } from "react"
export default function NewProject({ onNewProject,onCancel }) {
    const title = useRef()
    const description = useRef()
    const dueDate = useRef()
    const modal = useRef()
    const handleSave = () => {
        const enteredTitle = title.current.value
        const enteredDescription = description.current.value
        const enteredDueDate = dueDate.current.value
        if (enteredTitle.trim() == '' || enteredDescription.trim() == '' || enteredDueDate.trim() == '') {
            modal.current.open()
            return
        }
        onNewProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }

    return (
        <>
            <Modal ref={modal} buttonCaption='Close'>
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className='text-stone-600 mb-4'>Oops .... looks like you forgot to enter a value</p>
                <p className='text-stone-600 mb-4'>Please make sure you provided a valid value for every input field</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex  items-center justify-end gap-4 my-4">
                    <li><button onClick={onCancel} className="text-stone-700 hover:text-stone-950">Cancel</button></li>
                    <li><button
                        onClick={handleSave}
                        className="bg-stone-800 text-stone-100 px-6 py-2 rounded-md hover:text-stone-50">Save</button></li>
                </menu>
                <div>
                    <Input type='text' ref={title} label='Title' />
                    <Input ref={description} label='Description' textarea />
                    <Input type='date' ref={dueDate} label='Due Date' />
                </div>
            </div>
        </>

    )

}