import Button from "../Buttons/Button";
import Relogio from "./Relogio/Relogio";
import Style from './Cronometro.module.scss'

function Cronometro(){
    return(
        <div className={Style.cronometro}>
            <p className={Style.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={Style.relogioWrapper}>
                <Relogio></Relogio>
            </div>
            <Button>Começar!</Button>
        </div>
    )
}
export default Cronometro;