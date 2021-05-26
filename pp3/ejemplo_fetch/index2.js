const obtener_valores = async () => {

    const respuesta = await fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
 
    const datos = await respuesta.json()  
                    
         let total_filas = [];
         datos.forEach(element => { 
           
          let fila = 
          ` 
    
            
             <tr>
            <th>${element.casa.nombre}</th>
            <th><span class="badge bg-info text-dark">$${element.casa.compra}</span></th>
            <th><span class="badge bg-warning text-dark">$${element.casa.venta}</span></th>
            </tr>
            
   
         `;              
        
           total_filas.push(fila)
 
     });
 
     document.querySelector("#body_data").innerHTML = total_filas.join("")
 
}
 const boton = document.querySelector("#btn_precio")
 boton.addEventListener("click",obtener_valores)