import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit, reset } = useForm();

    const onCancel = () =>{
        reset();
        setIsOpen(false);
    }

    const onSubmit = (data) => {

        console.log(data);
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title='modal'>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3 mb-2">

                    <label htmlFor="title">Title</label>
                    <input
                        className="w-full rounded-md"
                        type="text"
                        id="title"
                        {...register("title")} />
                </div>

                <div className="flex flex-col gap-3  mb-2">
                    <label htmlFor="Description">Description</label>
                    <textarea
                        className="w-full rounded-md"
                        id="Description"
                        {...register("Description")} />
                </div>

                <div className="flex flex-col gap-3  mb-2">
                    <label htmlFor="Deadline">Deadline</label>
                    <input
                        className="w-full rounded-md"
                        type="date"
                        id="Deadline"
                        {...register("Deadline")} />
                </div>

                <div className="flex flex-col gap-3  mb-2">
                    <label htmlFor="AssignTo">Assign to</label>
                    <select className="w-full rounded-md" id="AssignTo" {...register("AssignTo")}>
                        <option value="Arefin">Arefin</option>
                        <option value="Munna">Munna</option>
                        <option value="Asad">Asad</option>
                        <option value="MRS. Ulfat">MRS. Ulfat</option>
                    </select>
                </div>

                <div className="flex flex-col gap-3  mb-2">
                    <label htmlFor="Priority">Priority</label>
                    <select className="w-full rounded-md" id="Priority" {...register("Priority")}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>

                <div className="flex items-center justify-end gap-4 mt-5">
                    <button onClick={onCancel} type="cancel" className="btn btn-danger">Cancel</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>

            </form>

        </Modal>
    );
};

export default AddTaskModal;