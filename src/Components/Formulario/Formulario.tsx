import React from "react";
import Button from "../Buttons/Button";
import { Itarefa } from "../Types/tarefas";
import Style from './Formulario.module.scss';

class Formulario extends React.Component<{setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>}> {
    state = {
        tarefa: "",
        tempo: "00:00:00"
    };
    adicionarTarefa(e: React.FormEvent){
        e.preventDefault()
        this.props.setTarefas(tarefas => [...tarefas, {...this.state}])
    }   
    render() {
        return (
            <form className={Style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={Style.inputContainer}>
                    <label htmlFor="tarefa">Tarefa</label>
                    <input value={this.state.tarefa} onChange={evento => this.setState({...this.state, tarefa: evento.target.value  })} type="tarefa" />
                </div>
                <div className={Style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input type="time" value={this.state.tempo} onChange={(evento)=>{this.setState({...this.setState, tempo: evento.target.value})}} name="tempo"min="00:00:00" max="01:30:00"/>
                </div>
                <Button type="submit">Adiconar</Button>
            </form>
        )
    }
}
export default Formulario;