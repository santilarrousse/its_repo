<template>
    <div class="row">
        <div class="col-4">
            <div class="card border-warning">
                <div class="card-header bg-warning text-center">
                    <h5>{{this.descripcion_drive}}</h5>
                </div>
                <div class="card-body text-center">
                    <h4>{{this.totalGb}}Gb</h4>
                </div>
                <div class="card-footer text-center">
                <h8>Capacidad total del disco</h8>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card text-white border-warning">
                <div class="card-header bg-warning text-center">
                    <h5>{{this.descripcion_drive}}</h5>
                </div>
                <div class="card-body text-center">
                    <h4>{{this.usedGb}}Gb</h4>
                </div>
                <div class="card-footer text-center">
                <h8>Uso actual del disco</h8>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card border-warning">
                <div class="card-header  bg-warning text-center">
                    <h5>{{this.descripcion_drive}}</h5>
                </div>
                <div class="card-body text-center">
                    <h4>{{this.freeGb}}Gb</h4>

                </div>
                <div class="card-footer text-center">
                    <h8>Espacio Libre en el disco</h8>

                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-6">
            <div class="card border-warning" style="margin-top: 2rem ; margin-left:8rem">
                <div class="card-header  bg-warning text-center">
                    <h5>{{this.descripcion_drive}}</h5>
                </div>
                <div class="card-body text-center">
                    <h4>{{this.usedPercentage}}%</h4>
                </div>
                <div class="card-footer text-center">
                    <h8>Porcentaje del uso del disco</h8>
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="card border-warning" style="margin-top:2rem; margin-right: 8rem">
               <div class="card-header bg-warning text-center">
                   <h5>{{this.descripcion_drive}}</h5>
                </div>     
                <div class="card-body text-center">
                    <h4>{{this.freePercentage}}%</h4>
                </div>
                <div class="card-footer">
                    <h8>Porcentaje de espacio libre en el disco</h8>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
import io from 'socket.io-client'
export default {
    name:'DriveIndicador',
    data(){
        return{
           valor_drive:null,
           descripcion_drive:'',
            totalGb:'',
            usedGb:'',
            freeGb:'',
            usedPercentage:'',
            freePercentage:''



        }
    },
    methods:{
        capturar(){
            const socket = io("http://localhost:3006")
            
            socket.on('datos-drive', (objeto) =>{
                this.valor_drive = objeto.data
                this.descripcion_drive=objeto.descripcion
                this.totalGb=objeto.data.totalGb
                this.usedGb=objeto.data.usedGb
                this.freeGb=objeto.data.freeGb
                this.usedPercentage=objeto.data.usedPercentage
                this.freePercentage=objeto.data.freePercentage
            })
          
        }

    },
    mounted()
    {
        this.capturar()
    }
}
</script>