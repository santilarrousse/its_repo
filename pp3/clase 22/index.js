const mispropiedades = {

    data(){
        return {
                descripcion:'',
                tiempo:'',
                lista_tareas:[],
                indice:null

        }
    },  

    methods:{
            guardar_tarea(){
                const nuevaTarea = {
                    descripcion:this.descripcion,
                    tiempo:this.tiempo
                }

                if("tareas" in localStorage){

                    this.lista_tareas = JSON.parse(localStorage.getItem("tareas"))
                    this.lista_tareas.push(nuevaTarea)
                    localStorage.setItem("tareas",JSON.stringify(this.lista_tareas))
                }else{
                    this.lista_tareas.push(nuevaTarea)
                    localStorage.setItem("tareas",JSON.stringify(this.lista_tareas))
                }
                this.descripcion ='',
                this.tiempo = ''
            },

            listarTareas(){
                if("tareas" in localStorage)
                {
                    this.lista_tareas = JSON.parse(localStorage.getItem("tareas"))
                }else{
                    this.lista_tareas = []
                }

            },

            eliminarTarea(index){
                this.lista_tareas.splice(index,1)
                localStorage.setItem("tareas",JSON.stringify(this.lista_tareas))

           },

           eliminar(){
            localStorage.removeItem("item")
            this.listarTareas
           },
//editar tarea
           llenarFormulario(index)
           {
            this.descripcion = this.lista_tareas[index].descripcion
            this.tiempo = this.lista_tareas[index].tiempo

            this.indice = index
           }

    },
          ActualizarTarea(index)
          {
            this.lista_tareas[this.indice].descripcion = this.descripcion
            this.lista_tareas[this.indice].tiempo = this.tiempo

            localStorage.setItem("tareas",JSON.stringify(this.lista_tareas))


            this.descripcion = '', this.tiempo = ''
            this.indice = null
            
        },

    mounted(){

        this.listarTareas()

    }
}

Vue.createApp(mispropiedades).mount("#app")