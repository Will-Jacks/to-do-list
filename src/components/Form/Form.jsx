import './form.css';
import { useState } from 'react';
import { useFormContext } from "../../context/FormContext";


export class TaskData {
    constructor(taskName, taskType) {
        this.taskName = taskName;
        this.taskType = taskType;
    }
}

function Form() {
    const { setLocalStorageTasks } = useFormContext();
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('Pessoal');

    function updateInputValue(e) {
        setInputValue(e.target.value);
    }

    function updateSelectValue(e) {
        setSelectValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (inputValue.length > 0) {
            const newTask = new TaskData(inputValue, selectValue);
            setLocalStorageTasks(newTask);
            setInputValue('');
            return;
        }
        return alert('Preencha os campos corretamente!');
    }


    return (
        <section >
            <form onSubmit={handleSubmit} className='form'>
                <div className="wrapper-label-input">
                    <div className='label-input'>
                        <label htmlFor="task-name">Nome da tarefa</label>
                        <input type="text" id="task-name" onChange={updateInputValue} value={inputValue} />
                    </div>
                    <div className='label-input'>
                        <label htmlFor="task-type">Tipo da tarefa</label>
                        <select name="task-type" id="task-type" onChange={updateSelectValue}>
                            <option value="Pessoal">Pessoal</option>
                            <option value="Trabalho">Trabalho</option>
                            <option value="Estudos">Estudos</option>
                        </select>
                    </div>
                    <button type="submit" className='button'>Cadastrar tarefa</button>
                </div>


            </form>
        </section>
    )

}

export default Form;