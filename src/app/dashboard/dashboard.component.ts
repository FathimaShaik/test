import { Component, OnInit } from '@angular/core';
import * as chart from 'chart.js'
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  BarChart: any;
  LineChart: any;
  DoughnutChart: any;
public chart=['	Sign contract for "What are conference organizers afraid of?"',
'Lines From Great Russian Literature? Or E-mails From My Boss?',
'Flooded: One year later, assessing what was lost and what was ',
'Create 4 Invisible User Experiences you Never Knew About'];
  constructor() { }


  ngOnInit() {

    this.BarChart = new chart('barChart', {

      type: 'bar',
      // dataPointWidth: 20,
      data: {
        labels: ["R", "B", "Y", "G", "P", "O", "F", "k", "S"],
        datasets: [{
          label: 'My dataset',
          data: [12, 20, 13, 15, 2, 23, 8, 3, 11],
          backgroundColor: [
            'brown',
            'brown',
            'brown',
            'brown',
            'brown',
            'brown',
            'brown',
            'brown',
            'brown'
          ],

          borderWidth: 1
        }]
      },
      options: {
        title: {
          display: true
        },
        scales: {
          xAxes: [{
            ticks: {
              fontSize: 8,
            },
            gridLines: {
              display: false
            }
          }],
          yAxes: [{
            ticks: {
              fontSize: 8,
              beginAtZero: true
            },
            gridLines: {
              display: false
            }
          }]
        }
      }
    });
    // var array=[];
    //  array= this.linedata;
    var arr = [];
    for (var i = 0; i < 7; i++) {
      var date = Math.ceil(Math.random() * 5);
      // var randNum = Math.round(Math.random()*10000);
      arr.push(date);
    }
    console.log(arr);

    let temp = [12, 30, 3, 5, 2, 3, 8]
    this.LineChart = new chart('lineChart', {
      type: 'line',

      data: {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        "colours": [{ // default
          "fillColor": "rgba(224, 108, 112, 1)",
          "strokeColor": "rgba(207,100,103,1)",
          "pointColor": "rgba(220,220,220,1)",
          "pointStrokeColor": "#fff",
          "pointHighlightFill": "#fff",
          "pointHighlightStroke": "rgba(151,187,205,0.8)"
        }],
        datasets: [{
          label: 'Tasks',
          data: arr,
          fill: false,
          lineTension: 0.2,
          borderColor: "green",
          borderWidth: 3,
          showInLegend: true,

        }]
      },
      options: {
        title: {
          display: true
        },
        scales: {
          xAxes: [{
            ticks: {
              fontSize: 10,

            },
            gridLines: {
              color: 'black',
              lineWidth: 0.1
            }
          }],
          yAxes: [{
            ticks: {
              fontSize: 10,

              beginAtZero: true
            },
            gridLines: {
              color: 'black',
              lineWidth: 0.1
            }
          }]
        }
      }
    });
    var array = [];
    for (var i = 0; i < 4; i++) {
      var date = Math.ceil(Math.random() * 5);
      // var randNum = Math.round(Math.random()*10000);
      array.push(date);
    }
    console.log(array);
    this.DoughnutChart = new chart('doughnutChart', {
      // this.LineChart = new chart('lineChart', {
      type: 'doughnut',

      data: {
        labels: ["R", "B", "Y", "g"],

        datasets: [{
          data: array,
          backgroundColor: [
            '#ffa726',
            '#66bb6a',
            '#ef5350',
            '#26c6da'
          ],
          borderWidth: 0
        }]
      },
      options: {
        legend: {
          position: 'bottom',
        },
        innerTitle: "This ",
        title: {
          display: true,

        },

        responsive: false,
        display: true,
      }
    });

    $('#text-1').show();
    $('#btn-1').click(function () {
      $('.text').hide();
      $('#text-1').show();
      $('#btn-1').toggleClass("clicked"); //<== toggleClass
    });

    $('#btn-2').click(function () {
      $('.text').hide();
      $('#text-2').show();
      $('#btn-2').toggleClass("clicked");
    });
    $('#btn-3').click(function () {
      $('.text').hide();
      $('#text-3').show();
      $('#btn-3').toggleClass("clicked");
    });

    $(document).ready(function(){
      $("#delete").click(function(){
          $(".reded").remove();
          $(".divide").remove();
          
      });
  });
  }
  
}

