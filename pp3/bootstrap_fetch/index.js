
function mostrar()
{
     let info = {
        nombre:'Santiago',
        apellido: 'Martinez',
        correos: {
                    gmail:'santilarrousse@gmail.com',
                    outlook: 'santimartinez@outlook.com'
        }      
   } 

   console.log (`
                Mi nombre es: ${info.nombre}
                Mi apellido es: ${info.apellido}
                Correo: ${info.correos.gmail}
   `);
}
function mostrar_elementos_arreglo ()
{
    let valores = [44,10,8,99]
    console.log(valores[2])
}
function mostrar_array_objetos()
{
    let arreglo_objetos = [
        {
            taller:'Programacion 1',
            anio:'5to',
            escuela:'Cet 30'
        },
        {
            taller:'Web 2',
            anio:'6to',
            escuela:'Cet 30'
        }
];
let totalidad_filas = [];
arreglo_objetos.forEach(objeto => { 

    let fila = `
        <tr>
            <td>${objeto.escuela}</td>
            <td>${objeto.taller}</td>
            <td>${objeto.anio}</td>
        </tr>
   
    `;
    totalidad_filas.push(fila);
    

       /* console.log (`
            Escuela: ${objeto.escuela}
            Taller: ${objeto.taller}
            Año: ${objeto.anio}
        `)*/
});

 document.querySelector("#tb_datos").innerHTML = totalidad_filas.join("");

}


