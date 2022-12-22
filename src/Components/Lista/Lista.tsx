import React, { useState } from "react";
import Style from './Lista.module.scss';
import Item from './item/Item'
import { Itarefa } from "../Types/tarefas";

interface props {
    tarefas: Itarefa[]
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}

function Lista({tarefas, selecionaTarefa}:props){
    
    return (
        <aside className={Style.listaTarefas}>
            <ul>
            <h2>Estudos do dia</h2>
                {tarefas.map((item, index) => (
                    <Item 
                    selecionaTarefa={selecionaTarefa}
                    key={item.id}{...item}></Item>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;