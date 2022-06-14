import { useState, useRef } from 'react';

const initialState = [...Array(20000)].map((_, index) => {
        return {
            task: `Task ${index} です`,
            isCompleted: false,
        }
    });

const ToDoList = () => {
    const [todos, setTodos] = useState(initialState);
    const taskRef = useRef(null);

    const handleAddTask = () => {
        const value = taskRef.current.value;

        if (!value) return;

        const newTask = {
            task: value,
            isCompleted: false,
        }

        setTodos(prevTodos => [...prevTodos, newTask]);
        taskRef.current.value = '';
    }

    const handleRemoveTask = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    const handleUpdateTask = (index) => {
        const newTodos = todos.map((todo, todoIndex) => {
            if (todoIndex === index) {
                todo.isCompleted = !todo.isCompleted
            }
            return todo;
        });
        setTodos(newTodos);
    }

    return (
        <>
            <h1>ToDo List</h1>
            Add Task : <input placeholder="Add New Task" ref={taskRef} />
            <button onClick={handleAddTask}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}
                        style={{ textDecorationLine: todo.isCompleted ? 'line-through' : 'none' }}>
                        <input
                            type="checkbox"
                            checked={todo.isCompleted}
                            onChange={() => handleUpdateTask(index)}
                        />
                        {todo.task}&nbsp;
                        <button onClick={() => handleRemoveTask(index)}>
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
export default ToDoList;