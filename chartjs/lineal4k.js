var ctx = document.getElementById('grandelinealChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        
        datasets: [{
            label: 'This Week',
            data: [0, 3, 2, 3, 1, 5, 1],
            backgroundColor: [
                '#A809A4',
            ],
            borderColor: [
                'rgba(168, 9, 164, 1)',
            ],
            borderWidth: 8,
            tension: 0.4
        },{
            label: 'Last week',
            data: [4, 2, 4, 1, 3, 1, 2],
            backgroundColor: [
                '#4145A8'
            ],
            borderColor: [
                '#4145A8',
            ],
            borderWidth: 8,
            tension: 0.4
        }],

    },

    options: {
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 32
                    }
                }
            }
        },
        responsive: true,
        maintanAspectRatio:false,
        //devicePixelRatio: 9,
        color: ['#FAFAFA'],
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 32
                    }
                }
            },
            y: {
                ticks: {
                    font: {
                        size: 32
                    }
                }
            },
        }
        /*
        scales: {
            y: {
                beginAtZero: true,
            }
        },*/
        
    },
}

);

