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
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selected: tarefa.id === tarefaSelecionada.id ? true : false,

    })))
    }
    function finalizartarefa(){
      if(selecionado){
        setSelecionado(undefined)
        setTarefas(tarefasAnteriores => tarefasAnteriores.map( tarefa => 
          {if(tarefa.id === selecionado.id){
          return {
            ...tarefa,
            selected: false,
            complet: true
          }
        }
      return tarefa}))
      }
  }
  return (
    <div className={Style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Cronometro 
      tarefaSelecionada={selecionado}
      finalizartarefa={finalizartarefa}
      ></Cronometro>
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa}/>
    </div>
  );
}
export default App;
