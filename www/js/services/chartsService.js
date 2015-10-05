qf.factory("chartsService", ['$http', function($http) {

  var charts = {};

  var extractPopData = function() {
    charts.population = {
      labels: ['2009', '2010', '2011', '2012', '2013', '2014'],
      data: [ [704442, 738710, 755928, 774442, 792862, 809958],
              [403612, parseFloat(charts.data[0]['raleigh'].replace(',','')), 414094, 423411, 431717, 439896],
              [255124, 269628, 272637, 276372, 279782, 282586],
              [229171, 229183, 233961, 239581, 245578, 251893],
              [136637, 136543, 141787, 145776, 151103, 155227],
              [38335, 35602, 36045, 36437, 35982, 35947]
            ],
      legend: true,
      series: ['Charlotte', 'Raleigh', 'Greensboro', 'Durham', 'Cary', 'Goldsboro'],
      options: {
        multiTooltipTemplate : function (label) {
          return label.datasetLabel + ': ' +    label.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      },
      colours: [
        {
          fillColor: 'rgba(51,102,204,0.05)',
          strokeColor: 'rgba(51,102,204,1)',
          pointColor: 'rgba(51,102,204,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(51,102,204,0.8)'
        },
        {
          fillColor: 'rgba(255,153,0,0.05)',
          strokeColor: 'rgba(255,153,0,1)',
          pointColor: 'rgba(255,153,0,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(255,153,0,0.8)'
        },
        {
          fillColor: 'rgba(220,57,18,0.05)',
          strokeColor: 'rgba(220,57,18,1)',
          pointColor: 'rgba(220,57,18,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220,57,18,0.8)'
        },
        {
          fillColor: 'rgba(16,150,24,0.05)',
          strokeColor: 'rgba(16,150,24,1)',
          pointColor: 'rgba(16,150,24,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(16,150,24,1)'
        },
        {
          fillColor: 'rgba(153,0,153,0.05)',
          strokeColor: 'rgba(153,0,153,1)',
          pointColor: 'rgba(153,0,153,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(153,0,153,0.8)'
        },
        {
          fillColor: 'rgba(0,153,198,0.05)',
          strokeColor: 'rgba(0,153,198,1)',
          pointColor: 'rgba(0,153,198,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(0,153,198,1)'
        },
      ],
    };

  };

  var extractAgesData = function() {
    var underFive = parseFloat(charts.data[3]['raleigh']);
    var under18 = parseFloat(charts.data[4]['raleigh']);
    var over65 = parseFloat(charts.data[5]['raleigh']);

    charts.ages = {
      labels: ['Under 5', 'Under 18', 'Over 65', '18 to 65'],
      data: [underFive, under18, over65, (100 - underFive - under18 - over65).toFixed(2)],
      legend: true,
      type: 'Pie',
      options: {
        multiTooltipTemplate : function (label) {
          return label.datasetLabel + ': ' + label.value.toString() + "%";
        }
      },
    };

  };

  var extractGenderData = function() {
    var female = parseFloat(charts.data[6]['raleigh']);

    charts.gender = {
      labels: ['Male', 'Female'],
      data: [(100 - female).toFixed(2), female],
      legend: true,
      type: 'Doughnut',
      options: {
        multiTooltipTemplate : function (label) {
          return label.datasetLabel + ': ' + label.value.toString() + "%";
        }
      },
    };

  };

  var extractRacialData = function() {
    var white = parseFloat(charts.data[7]['raleigh']);
    var black = parseFloat(charts.data[8]['raleigh']);
    var americanIndian = parseFloat(charts.data[9]['raleigh']);
    var asian = parseFloat(charts.data[10]['raleigh']);
    var twoPlus = parseFloat(charts.data[12]['raleigh']);
    // var latino = parseFloat(charts.data[13]['raleigh']);

    charts.racial = {
      labels: ['White', 'Black', 'American Indian / Alaska Native', 'Asian', 'Two or more races', 'Other'],
      data: [white, black, americanIndian, asian, twoPlus, (100 - white - black - americanIndian - asian - twoPlus).toFixed(2)],
      legend: true,
      options: {
        multiTooltipTemplate : function (label) {
          return label.datasetLabel + ': ' + label.value.toString() + "%";
        }
      },
    };

  };

  var extractIncomeData = function() {
    var raleigh = parseFloat(charts.data[29]['raleigh'].replace('$','').replace(',',''))

    charts.income = {
      labels: ['San Francisco', 'New York', 'Chicago', 'Raleigh', 'Dallas', 'Philadelphia'],
      data: [ [85070, 52996, 48734, raleigh, 43003, 39043] ],
      legend: true,
      series: ['Median Household Income'],
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

  };

  $http.get("https://data.raleighnc.gov/resource/kn7m-dtpn.json")
  .then(function (response) {
    console.log(response.data);
    charts.data = response.data;
    extractPopData();
    extractAgesData();
    extractGenderData();
    extractRacialData();
    extractIncomeData();
  })


  return {
    charts: charts,
  };

}])