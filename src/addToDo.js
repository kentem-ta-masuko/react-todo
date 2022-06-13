// import { useRef } from 'react';

// const AddToDo = ({ setTodos }) => {
//     const taskRef = useRef(null);

//     const handleAddTask = () => {
//         const value = taskRef.current.value;

//         if (!value) return;

//         const newTask = {
//             task: value,
//             isCompleted: false,
//         }

//         setTodos(prevTodos => [...prevTodos, newTask]);
//         taskRef.current.value = '';
//     }

//     return (
//         <>
//             Add Task : <input placeholder="Add New Task" ref={taskRef} />
//             <button onClick={handleAddTask}>Add</button>
//         </>
//     );
// }
// export default AddToDo;