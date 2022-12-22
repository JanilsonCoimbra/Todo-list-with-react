import { Itarefa } from '../../Types/tarefas';
import Style from '../Lista.module.scss';
interface props extends Itarefa {
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}
function Item(
    {
        tarefa,
        tempo, 
        selected, 
        complet, 
        id, 
        selecionaTarefa
    }: props){
 return (
    <li className={`${Style.item} ${selected ? Style.itemSelecionado : ''} ${complet ? Style.itemCompletado : ''}`} onClick={()=> !complet && selecionaTarefa({
        tarefa,
        tempo,
        selected,
        complet,
        id
    })}
    >
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
        {complet && <span className={Style.concluido} area-Label="tarefa completada"></span>}
    </li>
 )
}
export default Item;