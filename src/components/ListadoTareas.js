import Tarea from "./Tarea";

export default function ListadoTareas({ tareas, onEliminar  }){

    return (
        <>
        {tareas.length ? <hr /> : null}
            <ul>
                {tareas.map((todo) => (
                    <Tarea key={todo} todo= {todo} onEliminar={onEliminar}/>
                ))}
            </ul>
        </>
    );

}