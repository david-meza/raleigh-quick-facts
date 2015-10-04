qf.factory("chartsService", ['$http', function($http) {

  var charts = {};

  var extractPopData = function() {
    charts.population = {
      labels: ['Charlotte', 'Raleigh', 'Greensboro', 'Durham', 'Cary', 'Goldsboro'],
      data: [ [738710, parseFloat(charts.data[0]['raleigh'].replace(',','')), 269628, 229183, 136543, 36437] ],
      legend: true,
      series: ['Population'],
      options: {
        multiTooltipTemplate : function (label) {
          return label.datasetLabel + ': ' +    label.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      },
      colours: [{ fillColor:        ['#428bca', '#11c1f3', '#33cd5f', '#ffc900', '#ef473a', '#886aea'],
                  strokeColor:      ['#123456', '#01b1e3', '#13ad3f', '#cf9900', '#bf171a', '#583aca'],
                  highlightFill:    ['#226baa', '#01b1e3', '#13ad3f', '#ffaa00', '#bf171a', '#583aca'],
                  highlightStroke:  ['#012345', '#00a0d0', '#009d2f', '#cf9a00', '#af070a', '#281aaa']
      }],
    };

  }

  var extractAgesData = function() {
    var underFive = parseFloat(charts.data[3]['raleigh']);
    var under18 = parseFloat(charts.data[4]['raleigh']);
    var over65 = parseFloat(charts.data[5]['raleigh']);

    console.log(underFive);
    charts.ages = {
      labels: ['Under 5', 'Under 18', 'Over 65', '18 to 65'],
      data: [underFive, under18, over65, (100 - underFive - under18 - over65).toFixed(2)],
      legend: true,
      options: {
        multiTooltipTemplate : function (label) {
          return label.datasetLabel + ': ' + label.value.toString() + "%";
        }
      },
      colours: [{ fillColor:        ['#428bca', '#11c1f3', '#33cd5f', '#ffc900'],
                  strokeColor:      ['#123456', '#01b1e3', '#13ad3f', '#cf9900'],
                  highlightFill:    ['#226baa', '#01b1e3', '#13ad3f', '#ffaa00'],
                  highlightStroke:  ['#012345', '#00a0d0', '#009d2f', '#cf9a00']
      }],
    };

    console.log(charts.ages)

  }

  $http.get("https://data.raleighnc.gov/resource/kn7m-dtpn.json")
  .then(function (response) {
    console.log(response.data);
    charts.data = response.data;
    extractPopData();
    extractAgesData();
  })


  return {
    charts: charts,
  };

}])