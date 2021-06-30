const mispagos = {

    data(){
         return{
            nombre:'',
            apellido:'',
            dni:null,
            correo:'',
            cuota:'',
            importe:'',
            fecha_pago:'',
            lista_tareas:[]

             }
    },
    methods:{
        GuardarTarea(){
                 
                const nuevaTarea = {
                    nombre:this.nombre,
                    apellido:this.apellido,
                    dni:this.dni,
                    correo:this.correo,
                    cuota:this.cuota,
                    importe:this.importe,
                    fecha_pago:this.pago
                }

                if("tareas" in localStorage){

                    this.lista_tareas = JSON.parse(localStorage.getItem("tareas"))
                    this.lista_tareas.push(nuevaTarea)
                    localStorage.setItem("tareas",JSON.stringify(this.lista_tareas))
                }else{
                    this.lista_tareas.push(nuevaTarea)
                    localStorage.setItem("tareas",JSON.stringify(this.lista_tareas))
                }
                    this.nombre ='',
                    this.apellido = '',
                    this.dni='',
                    this.correo='',
                    this.cuota='',
                    this.importe='',
                    this.fecha_pago
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
           }

    },

    mounted(){

        this.listarTareas()

    }
}

Vue.createApp(mispagos).mount("#app")


         


    