const catalogo = {

        data(){
            return{
                    titulo:'',
                    url:'',
                    lista_catalogo:[]
            }
        },

        methods:{

            guardar_articulo()
            {
                let unCatalogo ={

                    titulo:this.titulo,
                    url:this.url
                }
                this.lista_catalogo.push(unCatalogo)

            }

        },

        mounted(){



        }

}
Vue.createApp(catalogo).mount("#app")