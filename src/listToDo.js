// const ListToDo = ({todos, setTodos}) => {
//     const handleRemoveTask = (index) => {
//         const newTodos = [...todos];
//         newTodos.splice(index, 1);
//         setTodos(newTodos);
//     }

//     const handleUpdateTask = (index) => {
//         const newTodos = todos.map((todo, todoIndex) => {
//             if (todoIndex === index) {
//                 todo.isCompleted = !todo.isCompleted
//             }
//             return todo;
//         });
//         setTodos(newTodos);
//     }

//     return (
//         <ul>
//             {todos.map((todo, index) => (
//                 <li
//                     key={index}
//                     style={{ textDecorationLine: todo.isCompleted ? 'line-through' : 'none' }}
//                 >
//                     <input
//                         type="checkbox"
//                         checked={todo.isCompleted}
//                         onChange={() => handleUpdateTask(index)}
//                     />
//                     {todo.task}&nbsp;
//                     <span
//                         onClick={() => handleRemoveTask(index)}
//                         style={{ cursor: 'pointer' }}
//                     >
//                         X
//                     </span>
//                 </li>
//             ))}
//         </ul>
//     );
// }
// export default ListToDo;