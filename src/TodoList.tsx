import { useState } from "react";

interface Tarefa {
    id: number;
    texto: string;
    completed: boolean;
}

function TodoItem({tarefa, deleteTarefa, toggleCompleted}) {
    function handleChange() {
        toggleCompleted(tarefa.id);
    }

    return (
        <div className="todo-item">
            <input type="checkbox" checked={tarefa.completed} onChange={handleChange}/>
            <p>{tarefa.texto}</p>
            <button onClick={() => deleteTarefa(tarefa.id)}>X</button>
        </div>
    );
}

export default function TodoList() {
    const [tarefas, setTarefas] = useState([
        {id: 1, texto: "teste1", completed: true},
        {id: 2, texto: "teste2", completed: false}
    ]);
    const [texto, setTexto] = useState('');

    function addTarefa(texto: string) {
        const novaTarefa = {
            id: Date.now(),
            texto: texto,
            completed: false
        };
        setTarefas([...tarefas, novaTarefa]);
        setTexto('')
    }

    function deleteTarefa(id: number) {
        setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
    }

    function toggleCompleted(id: number) {
        setTarefas(tarefas.map(task => {
            if (task.id === id) {
                return {...task, completed: !task.completed};
            } else {return task;}
        }));
    }

    function deleteCompleted() {
        setTarefas(tarefas.filter(tarefa => tarefa.completed !== true));
    }

    return (
        <div className="todo-list">
            <input type="text" onChange={(e) => setTexto(e.target.value)}/>
            <button onClick={() => addTarefa(texto)} >Adicionar tarefa</button>
            <button onClick={() => deleteCompleted()} >Deletar tarefas completas</button>
            {tarefas.map(tarefa => (
                <TodoItem key={tarefa.id} tarefa={tarefa} deleteTarefa={deleteTarefa} toggleCompleted={toggleCompleted} />
            ))}
        </div>
    )
}

