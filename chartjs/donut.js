var ctx = document.getElementById('donutChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [],
        datasets: [{
            label: '',
            data: [12, 10, 20, 15,53],
            backgroundColor: [
                'rgba(168, 9, 164, 1)',
                'rgba(75, 81, 210, 1)',
                '#FFFF5D',
                '#00FFE5',
                '#343D48',
            ],
            borderColor: [
                'rgba(168, 9, 164, 1)',
                'rgba(75, 81, 210, 1)',
                '#FFFF5D',
                '#00FFE5',
                '#343D48',
            ],
        },],

    },
    options: {
        //responsive: true,
        //maintanAspectRatio:false,
        plugins: {
            title: {
                display: true,
                text: 'Weekly',
                color: '#FAFAFA',
                font: {
                    family: 'Saira',
                    size: 14,
                    style: 'bold',
                  },
            }
        }
    }
});