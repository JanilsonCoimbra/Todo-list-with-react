import Formulario from '../Components/Formulario/Formulario';
import Lista from '../Components/Lista/Lista';
import Style from './App.module.scss'
import Cronometro from '../Components/Cronometro/Cronometro'
import { useState } from 'react';
import { Itarefa } from '../Components/Types/tarefas';

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);
  return (
    <div className={Style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Cronometro></Cronometro>
      <Lista tarefas={tarefas}/>
    </div>
  );
}
export default App;
