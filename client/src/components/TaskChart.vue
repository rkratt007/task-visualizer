<template>
    <div id="app">
        <div id="content">
            <canvas ref="chart"></canvas>
        </div>
    </div>
</template>

<script>
    import Chart from 'chart.js';

    const CLables = ['John','Jill','Joe'],
          CCompleted = [30, 50, 10],
          CProgress = [20, 0, 50],
          CNotStarted = [11, 50 , 15],
          CMax = 110
          ;
    let myChart = ''



    export default {
        name: 'app',
        mounted() {
            this.interval = setInterval(() => {
                this.createChart();
            },10000);
            this.createChart();
        },
        destroyed() {
            clearInterval(this.interval);
        },
        methods: {
            createChart() {
                let chart = this.$refs.chart;
                let ctx = chart.getContext("2d");
                // let myChart = '';
                if(myChart == ''){
                    myChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: CLables,
                            datasets: [
                                {
                                    label: 'Completed',
                                    data: CCompleted,
                                    backgroundColor: '#03fc84'
                                },
                                {
                                    label: 'In Progress',
                                    data: CProgress,
                                    backgroundColor: '#fce303'
                                },
                                {
                                    label: 'Not Started',
                                    data: CNotStarted,
                                    backgroundColor: 'gray'
                                },
                            ]
                        },
                        options: {
                            title: {
                                display: true,
                                text: "Task Overview By User"
                            },
                            tooltips: {
                                mode: 'index',
                                intersect: true
                            },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true,
                                        suggestedMax: CMax
                                    },
                                    stacked: true
                                }],
                                xAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    },
                                    stacked: true
                                }]
                            },
                            onClick: (event) => {
                                var activePoints = myChart.getElementsAtEventForMode(event, "point", myChart.options);
                                if(activePoints.length > 0) {
                                    const firstPoint = activePoints[0];
                                    const label = myChart.data.labels[firstPoint._index];
                                    window.location.href = '/#/tasks/view/'+label;
                                }
                            }
                        }
                    });
                }else{
                    this.updateChart();
                }
            },
            updateChart() {
                console.log('updating charts every 10 second.');
                myChart.data
                myChart.data.datasets = [
                    {
                        label: 'Completed',
                        data: CCompleted,
                        backgroundColor: '#03fc84'
                    },
                    {
                        label: 'In Progress',
                        data: CProgress,
                        backgroundColor: '#fce303'
                    },
                    {
                        label: 'Not Started',
                        data: CNotStarted,
                        backgroundColor: 'gray'
                    },
                ];
                myChart.update();
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    #content {
        margin: auto;
        width: 1024px;
        background-color: #FFFFFF;
        padding: 20px;
    }
</style>