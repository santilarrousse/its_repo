<template>

        <div class="row">
            <div class="col-6">
                <div class="card border-success" >
                    <div class="card-header  bg-success text-center">
                    <h5>{{this.descripcion_cpu_free}}</h5></div>
                    <div class="card-body text-center">
                        <h5>{{this.valor_cpu_free}}</h5>
                    </div>
                    <div class="card-footer text-center">
                        <h6>Cpu Free</h6>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="card border-success">
                    <div class="card-header  bg-success text-center">
        
                        <h5>{{this.cpu_usage}}</h5>
                    </div>
                    <div class="card-body text-center">
                        <h5>{{this.valor_cpu_usage}}</h5>
                    </div>
                    <div class="card-footer text-center"> <h6>Cpu Usage</h6></div>


                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <div class="card border-success" style="margin-top :2rem" >
                <div class="card-header bg-success text-center">
                    <h5>{{this.cpu_count}}</h5>
                </div>
                <div class="card-body text-center">
                    <h4>{{this.valor_cpu_count}}</h4>
                </div>
                <div class="card-footer text-center">
                    <h6>Cpu count</h6>
                </div>
            </div>
            </div>
            <div class="col-6">
                <div class="card border-success" style="margin-top:2rem">
                    <div class="card-header bg-success text-center">
                        <h5>{{this.modelo_cpu}}</h5>
                    </div>
                    <div class="card-body">
                        <h5>{{this.valor_modelo_cpu}}</h5>
                    </div>
                    <div class="card-footer text-center">
                        <h6>Cpu model</h6>
                    </div>
                </div>
            </div>
        </div>

        <div id="container" class="mt-3">

        </div>

</template>

<script>
import io from 'socket.io-client'
import Highcharts from 'highcharts'
import Exporting from 'highcharts/modules/exporting'
Exporting(Highcharts)
export default {
    name:'CpuIndicador',
    data(){
        return{
            valor_cpu_free:null,
            descripcion_cpu_free:'',
            valor_cpu_usage:null,
            cpu_usage:'',
            valor_cpu_count:null,
            cpu_count:'',
            valor_modelo_cpu:null,
            modelo_cpu:'',
         }
    },
    methods:{
        capturar_datos()
        {
          const socket = io("http://localhost:3006")

          socket.on('datos-cpu', (objeto) => {
                    this.valor_cpu_free= objeto.data.toFixed(2)
                    this.descripcion_cpu_free = objeto.descripcion

          })
          socket.on('datos-cpu-usage', (objeto) => {
              this.valor_cpu_usage = objeto.data.toFixed(2)
              this.cpu_usage = objeto.descripcion
          })
          socket.on('datos-cpu-count', (objeto) => {
              this.valor_cpu_count = objeto.data
              this.cpu_count = objeto.descripcion
          })
          socket.on('dato-modelo', (objeto) =>{
              this.valor_modelo_cpu=objeto.data
              this.modelo_cpu=objeto.descripcion
          })
          this.aplicar_tema()
          this.iniciar_grafico()
        },
     iniciar_grafico()
        {
            const socket = io('http://localhost:3006')
            Highcharts.chart('container', {
                chart: {
                    type: 'line',
                    animation: Highcharts.svg,
                    marginRight: 10,
                    events: {
                        load: function () {
                       
                                var series = this.series[0];
                                socket.on('datos-cpu-usage', function(num){
                                    var x = (new Date()).getTime();
                                    console.log(num.data)
                                    series.addPoint([x, num.data], true, true);
                                }); 
                        }
                    },
                    
                },
                time: {
                    useUTC: false
                },
                title: {
                    text: 'CPU en Uso'
                },
                xAxis: {
                    type: 'datetime',
                    tickPixelInterval: 150
                },
                yAxis: {
                    title: {
                        text: 'Uso CPU porcentual (%)'
                    },
                    plotLines: [{
                        value: 0,
                        width: 100,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br/>',
                    pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}%'
                },
                legend: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                series: [{
                    name: 'Uso de Cpu',
                    data: (function () {
                       
                        var data = [],
                            time = (new Date()).getTime(),
                            i;
                        for (i = -19; i <= 0; i += 1) {
                            var y = null;
                            socket.on('datos-cpu', function(num){
                                y = num.data;
                            })
                            data.push({
                                x: time + i * 1000,
                                y: y
                            });
                            
                        }
                        return data;
                    }())
                }]
            });
        },
        aplicar_tema(){
            Highcharts.theme = {
                colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
                    '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
                chart: {
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                        stops: [
                            [0, '#2a2a2b'],
                            [1, '#3e3e40']
                        ]
                    },
                    style: {
                        fontFamily: '\'Unica One\', sans-serif'
                    },
                    plotBorderColor: '#606063'
                },
                title: {
                    style: {
                        color: '#E0E0E3',
                        textTransform: 'uppercase',
                        fontSize: '20px'
                    }
                },
                subtitle: {
                    style: {
                        color: '#E0E0E3',
                        textTransform: 'uppercase'
                    }
                },
                xAxis: {
                    gridLineColor: '#707370',
                    labels: {
                        style: {
                            color: '#E0E0E3'
                        }
                    },
                    lineColor: '#707370',
                    minorGridLineColor: '#505053',
                    tickColor: '#707073',
                    title: {
                        style: {
                            color: '#A0A0A3'
                        }
                    }
                },
                yAxis: {
                    gridLineColor: '#707370',
                    labels: {
                        style: {
                            color: '#E0E0E3'
                        }
                    },
                    lineColor: '#707073',
                    minorGridLineColor: '#505053',
                    tickColor: '#707073',
                    tickWidth: 1,
                    title: {
                        style: {
                            color: '#A0A0A3'
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(25, 25, 25, 0.85)',
                    style: {
                        color: '#F0F0F0'
                    }
                },
                plotOptions: {
                    series: {
                        dataLabels: {
                            color: '#F0F0F3',
                            style: {
                                fontSize: '13px'
                            }
                        },
                        marker: {
                            lineColor: '#333'
                        }
                    },
                    boxplot: {
                        fillColor: '#505053'
                    },
                    candlestick: {
                        lineColor: 'white'
                    },
                    errorbar: {
                        color: 'white'
                    }
                },
                legend: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    itemStyle: {
                        color: '#E0E0E3'
                    },
                    itemHoverStyle: {
                        color: '#FFF'
                    },
                    itemHiddenStyle: {
                        color: '#606063'
                    },
                    title: {
                        style: {
                            color: '#C0C0C0'
                        }
                    }
                },
                credits: {
                    style: {
                        color: '#666'
                    }
                },
                labels: {
                    style: {
                        color: '#707073'
                    }
                },
                drilldown: {
                    activeAxisLabelStyle: {
                        color: '#F0F0F3'
                    },
                    activeDataLabelStyle: {
                        color: '#F0F0F3'
                    }
                },
                navigation: {
                    buttonOptions: {
                        symbolStroke: '#DDDDDD',
                        theme: {
                            fill: '#505053'
                        }
                    }
                },
                // scroll charts
                rangeSelector: {
                    buttonTheme: {
                        fill: '#505053',
                        stroke: '#000000',
                        style: {
                            color: '#CCC'
                        },
                        states: {
                            hover: {
                                fill: '#707073',
                                stroke: '#000000',
                                style: {
                                    color: 'white'
                                }
                            },
                            select: {
                                fill: '#000003',
                                stroke: '#000000',
                                style: {
                                    color: 'white'
                                }
                            }
                        }
                    },
                    inputBoxBorderColor: '#505053',
                    inputStyle: {
                        backgroundColor: '#333',
                        color: 'silver'
                    },
                    labelStyle: {
                        color: 'silver'
                    }
                },
                navigator: {
                    handles: {
                        backgroundColor: '#666',
                        borderColor: '#AAA'
                    },
                    outlineColor: '#CCC',
                    maskFill: 'rgba(255,255,255,0.1)',
                    series: {
                        color: '#7798BF',
                        lineColor: '#A6C7ED'
                    },
                    xAxis: {
                        gridLineColor: '#505053'
                    }
                },
                scrollbar: {
                    barBackgroundColor: '#808083',
                    barBorderColor: '#808083',
                    buttonArrowColor: '#CCC',
                    buttonBackgroundColor: '#606063',
                    buttonBorderColor: '#606063',
                    rifleColor: '#FFF',
                    trackBackgroundColor: '#404043',
                    trackBorderColor: '#404043'
                }
            };
            // Apply the theme
            Highcharts.setOptions(Highcharts.theme);
        }
   
        
    },
    mounted()
    {
    this.capturar_datos()
    }

    }


</script>