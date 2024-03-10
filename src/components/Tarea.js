export default function Tarea({ todo, onEliminar }) {
  return (
    <>
      <li
        onClick={() => onEliminar(todo)}
        style={{ cursor: "pointer" }}
        title="click para eliminar"
      >
        {todo}
      </li>
    </>
  );
}
