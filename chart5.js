var options1 = {
    chart: {
      height: 332,
      type: "radialBar",
      foreColor: '#A3A4A7'
    },
    colors: ["#A809A4", "#4B51D2", "#FFFF5D", "#00FFE5"],
    series: [67, 84, 97, 61],
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: true,
            color: "#A3A4A7",
            label: 'Progress'
          }
        }
      }
    },
    labels: ['Andam Levine', 'Tom Fletcher', 'TBilly Joe', 'Tamisha Iman']
  };
  
  new ApexCharts(document.querySelector("#chart5"), options1).render();
  