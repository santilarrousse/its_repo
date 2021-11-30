<template>
    <div class="row">
        <div class="col-6">
        <div class="card border-danger">
            <div class="card-header bg-danger text-center">
                <h4>{{this.valor_netstat}}</h4>
                <h5>Interfaz Wi-Fi</h5>
            </div>
            <div class="card-body text-center">
                <h5>InputByte</h5>
                <h4>{{this.inputBytes}}</h4>
                <h5>Output Bytes</h5>
                <h4>{{this.outputBytes}}</h4>
            </div>
            <div class="card-footer text-center">
                
            </div>
        </div>
        </div>
        <div class="col-6">
        <div class="card border-danger">
            <div class="card-header bg-danger text-center">
                <h4>{{this.valor_netstat}}</h4>
                <h5>Interfaz Ethernet</h5>
            </div>
            <div class="card-body text-center">
                <h5>InputByte</h5>
                <h4>{{this.inputBytes2}}</h4>
                <h5>Output Bytes</h5>
                <h4>{{this.outputBytes2}}</h4>
            </div>
            <div class="card-footer text-center">
                
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import io from 'socket.io-client'
    export default {
        name:'NetstatIndicador',
        data(){
            return{
                valor_netstat:null,
                descripcion:'',
                interface:'',
                inputBytes:'',
                outputBytes:''
            }
        },
        methods:{
            capturar(){
                const socket = io("http://localhost:3006")
                socket.on('datos-netstat', (objeto) =>{
                    //this.valor_netstat = objeto.data[]
                    this.descripcion = objeto.descripcion
                    this.interface= objeto.data[2].interface
                    this.inputBytes= objeto.data[2].inputBytes
                    this.outputBytes= objeto.data[2].outputBytes
                })
                socket.on('datos-netstat' , (objeto) =>{
                    this.descripcion=objeto.descripcion
                    this.interface2=objeto.data[0].interface
                    this.inputBytes2=objeto.data[0].inputBytes
                    this.outputBytes2=objeto.data[0].inputBytes
                })

            }

        },
        mounted(){
            this.capturar()
        }
    }
</script>