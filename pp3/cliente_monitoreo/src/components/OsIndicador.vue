<template>
    <div class="row">
        <div class="col-6">
            <div class="card border-infor">
                <div class="card-header  bg-info text-center">
                    <h4>Sistema Operativo</h4>
                </div>
                <div class="card-body text-center">
                    <h5>{{sistema}}</h5>
                </div>
                <div class="card-footer">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import io from 'socket.io-client'
export default {
    name:'OsIndicador',
    data(){
        return {
            sistema:null
        }
    },
    methods:{
     capturar(){
                const socket = io("http://localhost:3006")
                socket.on('sistema', (objeto) =>{
                    this.sistema = objeto.data
                })

            }

    },
    mounted(){
        this.capturar()
    }
}
</script>