import { ExecException } from "child_process";

function hourToMinutes(tarefaId: string): number{
    try{
        const [hour = '0', minutes = '0', segundos = '0'] = tarefaId.split(":")
        const horasEmSegundos = Number(hour) * 3600;
        const minutosEmSegundos = Number(minutes) * 60;
        const time = horasEmSegundos + minutosEmSegundos + Number(segundos);
        return time;
    }catch(ex){
        console.log(ex);
        return 0
    }
    

}

export default hourToMinutes;