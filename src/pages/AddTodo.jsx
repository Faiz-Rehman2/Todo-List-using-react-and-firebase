import React, { useState, useEffect } from 'react';
import { db } from "../firebase/firebase";
import { collection, addDoc, onSnapshot, doc, deleteDoc, updateDoc } from "firebase/firestore"; 

const AddTodo = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);  

  // add todo
  const addTodo = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    try {
      await addDoc(collection(db, "todos"), {
        name: input,
        completed: false,
        createdAt: new Date(),
      });
      setInput('');  
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // delete todo
  const deleteTodo = async (id) => {
    try {
      await deleteDoc(doc(db, "todos", id));
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
  };

  // edit todo
  const editTodo = async (id, currentName) => {
    const newName = window.prompt("Enter new todo value:", currentName);  // Show prompt with the current value
    if (newName && newName.trim() !== '') {
      try {
        await updateDoc(doc(db, "todos", id), {
          name: newName,
        });
      } catch (e) {
        console.error("Error updating document: ", e);
      }
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
      const todosData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTodos(todosData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className='text-center m-3 mb-2 font-bold text-2xl'>Todo List</div>
      <form onSubmit={addTodo}>
        <label htmlFor="todo" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Add to List
        </label>
        <div className="relative">
          <input
            type="text"
            id="todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add Todo"
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Todo
          </button>
        </div>
      </form>

      {/* rednder */}
      <div className="mt-4">
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className="flex justify-between items-center mb-2 p-2 border-b border-gray-300">
              <span>{todo.name}</span>
              <div>
                <button
                  onClick={() => editTodo(todo.id, todo.name)}
                  className="text-blue-600 hover:text-blue-800 ml-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-600 hover:text-red-800 ml-2"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AddTodo;
