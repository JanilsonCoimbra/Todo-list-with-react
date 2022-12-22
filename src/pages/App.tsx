import Formulario from '../Components/Formulario/Formulario';
import Lista from '../Components/Lista/Lista';
import Style from './App.module.scss'
import Cronometro from '../Components/Cronometro/Cronometro'
import { useState } from 'react';
import { Itarefa } from '../Components/Types/tarefas';

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);
  const [selecionado, setSelecionado] = useState<Itarefa>();

  function selecionaTarefa( tarefaSelecionada: Itarefa){
    setSelecionado(tarefaSelecionada);
    console.log(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selected: tarefa.id === tarefaSelecionada.id ? true : false,

    })))
  }
  return (
    <div className={Style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Cronometro></Cronometro>
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa}/>
    </div>
  );
}
export default App;
