import formatInstant from '../../../Commons/hourToMinutes';
import { Itarefa } from '../../Types/tarefas';
import Style from './Relogio.module.scss'

interface Props{
    time: number | undefined
}
function Relogio({time = 0} : Props){

    const minutos = Math.floor(time / 60);
    const segundos = time % 60

    const [minutosDezena, minutosUnid] = String(minutos).padStart(2,"0");
    const [segundosDezena, segundosUnid] = String(segundos).padStart(2,"0");

    return(
        <>
        <span className={Style.relogioNumero}>{minutosDezena}</span>
        <span className={Style.relogioNumero}>{minutosUnid}</span>
        <span className={Style.relogioDivisao}>:</span>
        <span className={Style.relogioNumero}>{segundosDezena}</span>
        <span className={Style.relogioNumero}>{segundosUnid}</span>
        </>
    )
}


export default Relogio;