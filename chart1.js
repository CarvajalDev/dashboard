var options = {
    chart: {
      type: 'line',
      //height: 200,
      //width:500,
      foreColor: '#A3A4A7'
    },
    stroke: {
    curve: 'smooth',
  },
    colors: ["#A809A4", "#4B51D2"],
    series: [{
      name: 'This week',
      data: [60,14,90,50,32,90,100]
    }, {
      name: 'Last week',
      data: [10,60,10,90,49,130,0]
    }],
    xaxis: {
      categories: ['S','M','T','W','T','F','S']
    }
  }
  
  var chart = new ApexCharts(document.querySelector("#chart1"), options);
  
  chart.render();