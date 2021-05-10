const calcular_resistencia = () => {
    const r1 = document.querySelector("#inp3").value;
    const r2 = document.querySelector("#inp2").value;
    const rr = r1 / r2;

    document.querySelector("#resultado").value = rr;   
}
const btn_resistencia = document.querySelector("#bt_resistencia");
btn_resistencia.addEventListener("click",calcular_resistencia)


const calcular_intensidad = () => {
    const i1 = document.querySelector("#inp3").value;
    const i2 = document.querySelector("#inp1").value;
    const ii = i1 / i2;

    document.querySelector("#resultado").value = ii;   
}
const btn_intensidad = document.querySelector("#bt_intensidad");
btn_intensidad.addEventListener("click", calcular_intensidad)


const calcular_voltaje = () => {
    const v1 = document.querySelector("#inp1").value
    const v2 = document.querySelector("#inp2").value
    const vv = v1 * v2;
    
    document.querySelector("#resultado").value = vv;   
}
const btn_voltaje = document.querySelector("#bt__voltaje");
btn_voltaje.addEventListener("click" ,calcular_voltaje)

