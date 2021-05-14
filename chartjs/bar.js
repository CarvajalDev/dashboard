var ctx = document.getElementById('barChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        
        datasets: [{
            label: '',
            data: [0, 3, 2, 3, 1, 5, 1],
            backgroundColor: [

            ],
            borderColor: [
                'rgba(168, 9, 164, 1)',
            ],
            borderWidth: 2,
            tension: 0.4
        },{
            label: '',
            data: [4, 2, 4, 1, 3, 1, 2],
            backgroundColor: [
            ],
            borderColor: [
                'rgba(75, 81, 210, 1)',
            ],
            borderWidth: 2,
            tension: 0.4
        }],

    },
    options: {
        //responsive: true,
        //maintanAspectRatio:false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});