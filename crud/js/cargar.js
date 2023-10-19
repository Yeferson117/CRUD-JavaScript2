import datos from '../data/data.json' assert { type: "json"};
export const cargarDatos=()=>{
    const baseDatos = JSON.parse(localStorage.getItem('datos'));
    if (!baseDatos){
        localStorage.setItem('datos', JSON.stringify(datos));
    }
}