'use client'

import ListadoError from '@/components/ListadoError';
import ListadoTareas from '@/components/ListadoTareas';
import React from 'react';

export default function Ejercicio() {
    const [nuevoTodo, setNuevoTodo] = React.useState('');
    const [todos, setTodos] = React.useState([]);
    const [error, setError] = React.useState(null);
    
    const agregarTodo = () => {
        const todoARegistrar = nuevoTodo.trim();
        if (!todoARegistrar) {
        setError('Debe ingresar un todo valido');
        return;
        }
    
        if (
        todos.find((todo) => todo.toUpperCase() === todoARegistrar.toUpperCase())
        ) {
        setError('El todo ya está registrado');
        return;
        }
    
        setTodos([...todos, todoARegistrar]);
        setNuevoTodo('');
        setError(null);
    };
    
    const agregarConEnter = (ev) => {
        if (ev.key !== 'Enter') {
        return;
        }
        agregarTodo();
    };
    
    const eliminarTodo = (todoAEliminar) => {
        setTodos(todos.filter((todo) => todo !== todoAEliminar));
    };

    return (
        <main>
            <h1>Todo App!</h1>
            <input 
                value={nuevoTodo} 
                onChange={(ev) => setNuevoTodo(ev.target.value)} 
                onKeyDown={agregarConEnter}
            />
            <button onClick={agregarTodo}>Agregar</button>
            <ListadoError error={error}/>
            
            <ListadoTareas tareas = {todos} onEliminar={eliminarTodo} />
        </main>
    )
}