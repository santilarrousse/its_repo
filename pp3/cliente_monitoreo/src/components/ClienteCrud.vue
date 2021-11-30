<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-lg-5">
                <form>
                <fieldset>
                   
                    <div class="form-group">
                        <label class="form-label">Razon Social</label>
                        <input v-model="razonsocial" type="text" class="form-control" placeholder="Ingrese su Razon Social">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Numero de telefono</label>
                        <input v-model="telefono" type="number" class="form-control" placeholder="Ingrese su Numero de telefono">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Correo Electronico</label>
                        <input v-model="email" type="email" class="form-control" placeholder="Ingrese su correo electronico">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Direccion</label>
                        <input v-model="direccion" type="text" class="form-control" placeholder="Ingrese su direccion">
                    </div>
                </fieldset>
                </form>
            </div>   
            <div class="col-lg-7">
                 <form>
                    <fieldset>
                        <div class="form-group">
                            <label class="form-label"> Localidad</label>
                            <input v-model="localidad" type="text" class="form-control" placeholder="Ingrese su localidad">
                        </div>
                        <div class="form-group">
                            <label  class="form-label"> Equipo</label>
                            <input v-model="equipo" type="text" class="form-control" placeholder="Ingrese una descripcion de su Equipo">
                        </div>
                        <div class="form-group">
                            <label class="form-label"> Direccion IP</label>
                            <input v-model="ip" type="text" class="form-control" placeholder="Ingrese su direccion IP">
                        </div>
                        <div class="form-group">
                            <label class="form-label ">Sistema Operativo</label>
                            <input v-model="os" type="text" class="form-control" placeholder="Ingrese su Sistema Operativo">
                        </div>
                    </fieldset>
                 </form>
                 
            </div> 
             
                  <div v-if="estado ==0" class="mt-3">
                    <button @click="guardarCliente()" style="margin; 2px" type="button" class="btn btn-outline-info">Guardar Cliente</button>
                      
                    </div> 
                    <div v-if="estado ==1" class="mt-4">
                        <button @click="actualizarCliente()" class="btn btn-outline-success"> Actualizar Cliente</button>
                    </div>

        </div>  

                  
    </div>      
                    
                  


                 
                    <div class="row">
                        <div class="">
        <div class="row">
          <table
            class="table"
            >
            <thead>
              <tr>
                <th>ID</th>
                <th>Razon Social</th>
                <th>Telefono</th>
                <th>Direccion</th>
                <th>Localidad</th>
                <th>Correo</th>
                <th>Descripcion</th>
                <th>IP</th>
                <th>Sistema Operativo</th>
                <th>Seleccionar</th>
               
              </tr>
            </thead>
            <tbody>
              <tr v-for="cliente of lista" v-bind:key="cliente.id_cliente">
                <td>{{cliente.id}}</td>
                <td>{{cliente.razon_social}}</td>
                <td>{{cliente.telefono}}</td>
                <td>{{cliente.direccion}}</td>
                <td>{{cliente.localidad}}</td>
                <td>{{cliente.correo_electronico}}</td>
                <td>{{cliente.equipo_descripcion}}</td>
                <td>{{cliente.direccion_ip}}</td>
                <td>{{cliente.sistema_operativo}}</td>
                <td>
                    
                    
                            <button @click="eliminarCliente(cliente.id_cliente)" class="btn btn-danger btn-sm">X</button>
                            <button @click="editar(cliente)" class="btn btn-primary btn-sm ">Editar</button>
                        </td>
                
              </tr>
            </tbody>
           </table>
          </div>
         </div>
        </div>
                    

</template>

<script>
export default {
    name:'ClienteCrud',
    
    data(){

    return{ 
        id:null,
        razonsocial:'',
        telefono:'',
        email:'',
        direccion:'',
        localidad:'',
        equipo:'',
        ip:'',
        os:'',
        lista:[],
        estado:0

    }
    },
    methods:{
        vaciar(){
            this.id=null,
            this.razonsocial='',
            this.telefono='',
            this.email='',
            this.direccion='',
            this.localidad='',
            this.equipo='',
            this.ip='',
            this.os=''
        },
        seleccionarCliente(unCliente){
            this.estado = 1
            this.id=unCliente.id
            this.razonsocial=unCliente.razon_social
            this.telefono=unCliente.telefono_contacto
            this.email=unCliente.correo_electronico
            this.direccion=unCliente.direccion
            this.localidad=unCliente.localidad
            this.equipo=unCliente.equipo_descripcion
            this.ip=unCliente.direccion_ip
            this.os=unCliente.sistema_operativo
        },
        eliminarCliente(){
            this.axios
            .delete("http://localhost/cliente/id").then(result =>{
                this.lista = result.data
            })
        },
        editar(unCliente){
            this.estado=1
            this.id = unCliente.id
            this.razonsocial=unCliente.razon_social
            this.telefono=unCliente.telefono_contacto
            this.email=unCliente.correo_electronico
            this.direccion=unCliente.direccion
            this.localidad=unCliente.localidad
            this.equipo=unCliente.equipo_descripcion
            this.ip=unCliente.direccion_ip
            this.os=unCliente.sistema_operativo
        },
        actualizarCliente(){
            const ClienteModificado = {
                ip:this.ip,
                telefono_contacto:this.telefono_contacto,
                correo_electronico:this.correo_electronico,
                direccion:this.direccion,
                localidad:this.localidad,
                equipo_descripcion:this.equipo_descripcion,
                direccion_ip:this.direccion_ip,
                sistema_operativo:this.sistema_operativo
            }
            this.axios.put("http://localhost:3006/cliente/" + this.id,ClienteModificado).then(result =>{
                alert(result.data)
                this.listarClientes()
                this.vaciar()
                this.estado=1
            })
        },
        guardarCliente(){
            const unCliente = {
                razon_social:this.razonsocial,
                telefono_contacto:this.telefono,
                correo_electronico:this.email,
                direccion:this.direccion,
                localidad:this.localidad,
                equipo_descripcion:this.equipo,
                ip:this.ip,
                sistema_operativo:this.os 
            }
            
            this.axios.post("http://localhost:3006/cliente", unCliente).then(result => {

                alert(result.data)
                this.vaciar()
                this.listarClientes()
            })
        },
        listarClientes(){
            this.axios.get("http://localhost:3006/cliente").then(result =>{
                this.lista = result.data
            })
        }

    },
    mounted(){
        this.listarClientes()
    }
}

 

</script>
