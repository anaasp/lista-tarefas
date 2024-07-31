import "./tarefa.css";
function Tarefa() {
  let tarefas = ["Tarefa 1", "Tarefa 2", "Tarefa 3", "Tarefa 4"];

  return (
  <div class="lista">
    <ul>
      {tarefas.map((l) => (
        <li>
            {l}
            </li>
      ))}
    </ul>
  </div>

  );
}

export default Tarefa;
