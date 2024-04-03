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
        <div className="flex flex-row items-baseline w-full">
            <input className="m-2" type="checkbox" checked={tarefa.completed} onChange={handleChange}/>
            <div className="m-2 w-full text-wrap break-words">
                {tarefa.texto}
            </div>
            <button className="m-2" onClick={() => deleteTarefa(tarefa.id)}>X</button>
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
        <div className="flex flex-col h-full border-4 border-black rounded-2xl p-2 text-lg">
            <div className="flex">
                <input className="bg-red-50 w-full m-2 p-2 rounded-lg border-4 border-black" type="text" onChange={(e) => setTexto(e.target.value)}/>
                <button className="bg-black text-white m-2 p-2 rounded-lg" onClick={() => addTarefa(texto)} >Add</button>
            </div>
            <div className="h-full w-full bg-green-50">
                <div className="flex flex-col">
                    {tarefas.map(tarefa => (
                        <TodoItem key={tarefa.id} tarefa={tarefa} deleteTarefa={deleteTarefa} toggleCompleted={toggleCompleted} />
                    ))}                    
                </div>
            </div>
            <div className="flex">
                <button onClick={() => deleteCompleted()} >Deletar tarefas completas</button>
            </div>
            
        </div>
    )
}

