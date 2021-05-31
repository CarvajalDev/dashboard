var ctx = document.getElementById('barChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        
        datasets: [{
            label: 'This Week',
            data: [0, 3, 2, 3, 1, 5, 1],
            color: '#A3A4A7',
            backgroundColor: [
                'rgba(168, 9, 164, 1)',
            ],
            borderColor: [
                'rgba(168, 9, 164, 1)',
            ],
            borderWidth: 2,
            tension: 0.4
        },{
            label: 'Last week',
            data: [4, 2, 4, 1, 3, 1, 2],
            backgroundColor: [
                'rgba(75, 81, 210, 1)',
            ],
            borderColor: [
                'rgba(75, 81, 210, 1)',
            ],
            borderWidth: 2,
            tension: 0.4
        }],

    },
    options: {
        responsive: true,
        maintanAspectRatio:false,
        color: ['#FAFAFA'],
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});