import React, { useState } from "react";
import Style from './Lista.module.scss';
import Item from './item/Item'
import { Itarefa } from "../Types/tarefas";



function Lista({tarefas}:{ tarefas: Itarefa[]}){
    
    return (
        <aside className={Style.listaTarefas}>
            <ul>
            <h2>Estudos do dia</h2>
                {tarefas.map((item, index) => (
                    <Item key={index}{...item}></Item>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;