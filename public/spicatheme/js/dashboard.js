(function($) {
  'use strict';
  $(function() {

    if ($("#audience-chart").length) {
      var AudienceChartCanvas = $("#audience-chart").get(0).getContext("2d");
      var AudienceChart = new Chart(AudienceChartCanvas, {
        type: 'bar',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              type: 'line',
              fill: false,
              data: [100, 230, 130, 140, 270, 140],
              borderColor: '#ff4c5b'
            },
            {
              label: 'Offline Sales',
              data: [100, 230, 340, 340, 260, 340],
              backgroundColor: '#6640b2'
            },
            {
              label: 'Online Sales',
              data: [130, 190, 250, 250, 190, 260],
              backgroundColor: '#1cbccd'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 20,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: true,
              gridLines: {
                display: true,
                drawBorder: false,
                color: "#f8f8f8",
                zeroLineColor: "#f8f8f8"
              },
              ticks: {
                display: true,
                min: 0,
                max: 400,
                stepSize: 100,
                fontColor: "#b1b0b0",
                fontSize: 10,
                padding: 10
              }
            }],
            xAxes: [{
              stacked: false,
              ticks: {
                beginAtZero: true,
                fontColor: "#b1b0b0",
                fontSize: 10
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              barPercentage: .9,
              categoryPercentage: .7,
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 3,
              backgroundColor: '#ff4c5b'
            }
          }
        },
      });
    }

    if ($("#balance-chart").length) {
      var areaData = {
        labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue","Wed","Thu"],
        datasets: [
          {
            data: [2600, 1400, 2200, 1200, 2300, 2400, 2700, 1200, 2800, 2600, 1250, 1900, 1800, 2800, 2800, 1200, 2500, 2600, 1800, 1200, 2000, 1800, 2700, 1600, 2800, 2000, 2100, 1200, 2000, 1200, 1200, 2500],
            borderColor: [
              '#1faf47'
            ],
            borderWidth: 3,
            fill: false,
            label: "services"
          },
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false
          }
        },
        scales: {
          xAxes: [{
            display: true,
            ticks: {
              display: false,
            },
            gridLines: {
              display: false,
              drawBorder: false,
              color: 'transparent',
              zeroLineColor: '#eeeeee'
            }
          }],
          yAxes: [{
            display: true,
            ticks: {
              display: true,
              autoSkip: false,
              maxRotation: 0,
              stepSize: 100,
              fontColor: "#000",
              fontSize: 14,
              padding: 18,
              stepSize: 1000,
              max: 3000,
              fontSize: 10,
              fontColor: "#b1b0b0",
              callback: function(value) {
                var ranges = [
                    { divider: 1e6, suffix: 'M' },
                    { divider: 1e3, suffix: 'k' }
                ];
                function formatNumber(n) {
                    for (var i = 0; i < ranges.length; i++) {
                      if (n >= ranges[i].divider) {
                          return (n / ranges[i].divider).toString() + ranges[i].suffix;
                      }
                    }
                    return n;
                }
                return formatNumber(value);
              }
            },
            gridLines: {
              drawBorder: false,
              color: "#f8f8f8",
              zeroLineColor: "#f8f8f8"
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        elements: {
          line: {
            tension: 0
          },
          point: {
            radius: 0
          }
        }
      }
      var balanceChartCanvas = $("#balance-chart").get(0).getContext("2d");
      var balanceChart = new Chart(balanceChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }

    if ($("#task-chart").length) {
      var taskChartCanvas = $("#task-chart").get(0).getContext("2d");
      var taskChart = new Chart(taskChartCanvas, {
        type: 'bar',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May","Jun", "Jul", "Aug"],
          datasets: [{
              label: 'Profit',
              data: [-3, -5, -5, 3, 4, -5, -1, 9],
              backgroundColor: '#f83e37'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: true,
              gridLines: {
                drawBorder: false,
                color: '#f1f3f9',
                zeroLineColor: '#f1f3f9'
              },
              ticks: {
                display: true,
                fontColor: "#9fa0a2",
                fontSize: 10,
                padding: 0,
                stepSize: 10,
                min: -10,
                max: 10
              }
            }],
            xAxes: [{
              display: false,
              stacked: false,
              categoryPercentage: 1,
              ticks: {
                display: false,
                beginAtZero: false,
                display: true,
                padding: 10,
                fontSize: 11
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              position: 'bottom',
              barPercentage: 0.7
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }

    if ($("#regional-chart").length) {
      var regionalChartCanvas = $("#regional-chart").get(0).getContext("2d");
      var regionalChart = new Chart(regionalChartCanvas, {
        type: 'horizontalBar',
        data: {
          labels: ["12", "8", "4", "0"],
          datasets: [
            {
              label: 'Income',
              data: [400, 360, 360, 360],
              backgroundColor: '#1cbccd'
            },
            {
              label: 'Expenses',
              data: [320, 190, 180, 140],
              backgroundColor: '#ffbf36'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: -7,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: true,
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                display: true,
                min: 0,
                max: 400,
                stepSize: 100,
                fontColor: "#b1b0b0",
                fontSize: 10,
                padding: 10
              },
              barPercentage: 1,
              categoryPercentage: .6,
            }],
            xAxes: [{
              display: true,
              stacked: false,
              ticks: {
                display: false,
                beginAtZero: true,
                fontColor: "#b1b0b0",
                fontSize: 10
              },
              gridLines: {
                display: true,
                drawBorder: false,
                lineWidth: 1,
                color: "#f5f5f5",
                zeroLineColor: "#f5f5f5"
              }
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 3,
              backgroundColor: '#ff4c5b'
            }
          },
          legendCallback : function(chart) {
            var text = [];
              text.push('<div class="item mr-4 d-flex align-items-center">');
                text.push('<div class="item-box mr-2" style=" background-color: ' + chart.data.datasets[0].backgroundColor + ' "></div><p class="text-black mb-0"> ' + chart.data.datasets[0].label + '</p>');
              text.push('</div>');
              text.push('<div class="item d-flex align-items-center">');
                text.push('<div class="item-box mr-2" style=" background-color: ' + chart.data.datasets[1].backgroundColor + '"></div><p class="text-black mb-0"> ' + chart.data.datasets[1].label + ' </p>');
              text.push('</div>');
            return text.join('');
          }
        },
      });
      document.querySelector('#regional-chart-legend').innerHTML = regionalChart.generateLegend();
    }

    if ($("#activity-chart").length) {
      var activityChartCanvas = $("#activity-chart").get(0).getContext("2d");
      var activityChart = new Chart(activityChartCanvas, {
        type: 'bar',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
          datasets: [{
              label: 'Profit',
              data: [320, 300, 340, 320, 315, 270, 290, 310, 340, 335, 300, 320, 300, 340, 320, 315, 270, 290, 310, 340, 335, 300, 320, 300, 340, 320, 315, 270, 290, 310, 340, 335, 300, 320, 300, 340, 320, 315, 270, 290, 310, 340, 335, 300],
              backgroundColor: '#ffbf36'
            },
            {
              label: 'Target',
              data: [540, 500, 600, 540, 535, 470, 490, 510, 540, 535, 500, 540, 500, 450, 570, 535, 470, 490, 510, 540, 535, 500, 540, 500, 470, 500, 535, 470, 490, 510, 540, 535, 500, 540, 500, 490, 590, 505, 470, 490, 510, 540, 535, 500],
              backgroundColor: '#6640b2'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: false,
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                display: false,
                min: 0,
                max: 600,
                stepSize: 100,
                fontColor: "#fff"
              }
            }],
            xAxes: [{
              display: false,
              stacked: true,
              ticks: {
                beginAtZero: true,
                fontColor: "#fff"
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              barPercentage: .8,
              categoryPercentage: .9,
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }

    if ($("#status-chart").length) {
      var areaData = {
        labels: ["IA", "RI", "NY", "CO", "MI", "FL", "IL", "PA", "LA", "NJ", "CA", "TX", "LA", "PQ", "RF", "JG",     "IA", "RI", "NY", "CO", "MI", "FL", "IL", "PA", "LA", "NJ", "CA", "TX", "LA", "PQ", "RF", "JG",     "IA", "RI", "NY", "CO", "MI", "FL", "IL", "PA", "LA", "NJ", "CA", "TX", "LA", "PQ", "RF", "JG",     "IA", "RI", "NY", "CO", "MI", "FL", "IL", "PA", "LA", "NJ", "CA", "TX", "LA", "PQ", "RF", "JG",     "IA", "RI", "NY", "CO", "MI", "FL", "IL", "PA", "LA", "NJ", "CA", "TX", "LA", "PQ", "RF", "JG",     "IA", "RI", "NY", "CO", "MI", "FL", "IL", "PA", "LA", "NJ", "CA", "TX", "LA", "PQ", "RF", "JG",     "IA", "RI", "NY", "CO", "MI", "FL", "IL", "PA", "LA", "NJ"],
        datasets: [{
            data: [30,40,34,48,35,43,40,48,38,39,35,45,32,33,28,22,24,23,36,28,31,22,32,27,30,25,36,30,38,34,30,27,30,26,26,18,23,31,18,19,17,19,17,17,14,16,15,17,10,15,9,14,13,20,18,15,12,16,17,14,20,10,19,12,12,16,11,17,15,17,9,8,12,15,10,15,16,20,18,20,18,28,28,33,23,38,20,28,23,24,17,14,21,15,24,11,13,13,19,13,15,18,10,20,22,28],
            backgroundColor: [
              '#00cccb'
            ],
            borderColor: "#00cccb",
            borderWidth: 0,
            fill: 'origin',
            label: "purchases"
          },
          {
            data: [60,70,64,78,65,73,70,78,68,69,65,75,62,63,58,52,54,53,66,58,61,52,62,57,60,55,66,60,68,64,60,57,60,56,56,48,53,61,48,49,47,49,47,47,34,36,35,37,40,35,39,44,43,50,48,45,42,46,37,44,50,40,39,42,32,36,41,47,45,47,39,38,42,45,40,45,46,50,48,50,48,58,58,63,53,68,50,58,53,54,47,44,51,45,54,41,43,43,49,43,45,48,40,50,52,58],
            backgroundColor: [
              '#d8d8d8'
            ],
            borderColor: '#d8d8d8',
            borderWidth: 1,
            fill: 'origin',
            label: "services"
          },
          {
            data: [90, 100, 94, 108, 95, 103, 100, 108, 98 ,99, 95, 105, 92, 93, 88, 82, 84, 83, 96, 88, 91, 82, 92, 87, 90, 85, 96, 90, 98, 94, 90, 87, 90, 86, 86, 78, 83, 91, 78, 79, 77, 79, 77, 77, 64, 66, 65, 67, 70, 65, 69, 74, 73, 80, 78, 75, 72, 76, 67, 74, 80, 70, 69, 72, 62, 66, 71, 77, 75, 77, 69, 68, 72, 75, 70, 75, 76, 80, 78, 80, 78, 88, 88, 93, 83, 98, 80, 88, 83, 84, 77, 74, 81, 75, 84, 71, 73, 73, 79, 73, 75, 78, 70, 80, 82, 88],
            backgroundColor: [
              '#6640b2'
            ],
            borderColor: '#6640b2',
            borderWidth: 1,
            fill: 'origin',
            label: "services"
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false
          }
        },
        scales: {
          xAxes: [{
            display: false,
            ticks: {
              display: false
            },
            gridLines: {
              display: false,
              drawBorder: false,
              color: 'transparent',
              zeroLineColor: '#eeeeee'
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              display: false,
              autoSkip: false,
              maxRotation: 0,
              stepSize: 10,
              min: 0,
              max: 110
            },
            gridLines: {
              drawBorder: false
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        elements: {
          line: {
            tension: 0
          },
          point: {
            radius: 0
          }
        }
      }
      var statusChartCanvas = $("#status-chart").get(0).getContext("2d");
      var statusChart = new Chart(statusChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }
    
    
  });
})(jQuery);