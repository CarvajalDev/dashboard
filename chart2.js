var options = {
    colors: ["#4B51D2","#A809A4"],
    series: [{
    name: 'Visitors',
    data: [44, 55, 56, 61, 58]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87]
  }],
    chart: {
    type: 'bar',
    //height: 200,
     foreColor: '#A3A4A7'
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 1,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  },
  yaxis: {
    title: {
      text: ''
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();