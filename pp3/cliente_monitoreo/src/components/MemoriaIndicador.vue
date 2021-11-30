<template>
    <div class="row">
        <div class="col-6">
            <div class="card">
                <div class="card-header text-center bg-primary text-center">
                    <h5>Memoria Total</h5>
                </div>
                <div class="card-body text-center">
                    <h4>{{this.totalMemMb}}</h4>
                </div>
                <div class="card-footer">

                </div>
            </div>
        </div>
         <div class="col-6">
        <div class="card">
            <div class="card-header text-center bg-primary text-center">
                <h5>Memoria Libre</h5>
            </div>
            <div class="card-body text-center">
                <h4>{{this.freeMemMb}}</h4>
            </div>
            <div class="card-footer">

            </div>
        </div>
    </div>
    </div>
    <div class="row">
        <div class="col-6">
        <div class="card" style="margin-top:2rem">
            <div class="card-header text-center bg-primary">
                <h5>Memoria en Uso</h5>
            </div>
            <div class="card-body text-center">
                <h4>{{this.usedMemMb}} </h4>
            </div>
            <div class="card-footer">

            </div>
        </div>
    </div>
    <div class="col-6">
        <div class="card" style="margin-top:2rem">
            <div class="card-header text-center bg-primary">
                <h5>Porcentaje de Memoria Libre</h5>
            </div>
            <div class="card-body text-center">
                <h4>{{this.freeMemPercentage}}%</h4>
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
    name:'MemoriaIndicador',
    data(){
        return{
            valor_mem:null,
            descripcion_mem:'',
            totalMemMb:'',
            freeMemMb:'',
            usedMemMb:'',
            //freeMemPercentage:'',
            valor_memoria:null,
            mem_use:'',
            descripcionmem:''
        }
    },
    methods:{
        capturar()
        {
            const socket = io('http://localhost:3006')
            
            socket.on('datos-memoria', (objeto) =>{
      
                //this.descripcion_mem=objeto.descripcion
                this.totalMemMb=objeto.data.totalMemMb
                this.freeMemMb=objeto.data.freeMemMb  
                this.usedMemMb = objeto.data.usedMemMb     
                this.freeMemPercentage=objeto.data.freeMemPercentage       
            })  
        
        }

    },
    mounted(){
        this.capturar()
    }
}
</script>