import Button from "../Buttons/Button";
import Relogio from "./Relogio/Relogio";
import Style from './Cronometro.module.scss'
import { Itarefa } from "../Types/tarefas";
import { useEffect, useState } from "react";
import hourToMinutes from "../../Commons/hourToMinutes";

interface Props{
    tarefaSelecionada: Itarefa | undefined
    finalizartarefa: () => void
}
function Cronometro({tarefaSelecionada, finalizartarefa}:Props){
    const [tarefa, setTarefa] = useState<Itarefa>()
    const [time, setTime] = useState<number>(0)

    useEffect(()=>{
        if(tarefaSelecionada?.tempo){
            setTarefa(tarefaSelecionada)
            setTime(hourToMinutes(tarefaSelecionada.tempo))
        }
    },[tarefaSelecionada])

    function regressiva(contador: number = 0){
        setTimeout(()=>{
            if(contador > 0){
                setTime(contador - 1);
                return regressiva(contador - 1);
            }
            finalizartarefa();
        }, 1000)
    }
    return(
        <div className={Style.cronometro}>
            <span>{tarefa?.tempo}</span>
            <p className={Style.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={Style.relogioWrapper}>
                <Relogio time={time}></Relogio>
            </div>
            <Button onClick={()=> regressiva(time)}>Começar!</Button>
        </div>
    )
}
export default Cronometro;