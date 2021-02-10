import React, { Component } from 'react';
import { Card , CardGroup ,Button  } from 'react-bootstrap';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


var cardStyle = {
    backgroundColor : '#ebf0f4',
     height: '800px'
}

const options = {
    chart: {
        animation: true,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        style: {
           
        }
    },
    exporting: { enabled: false },
    credits: {
        enabled: false
    },
    title: {
        text: '<b>1200</b>',
        verticalAlign: 'middle',
        align: 'center',
        x: 0,
        y: 15,
        style: {
            color: '#0055a5',
            fontWeight: '700',
            letterSpacing: '1.5px',
            fontSize: '55px',
            fontFamily : '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
    
        }
     //   floating: true
    },
    subtitle: {
        text: 'Total Animals',
        verticalAlign: 'middle',
        align: 'center',
        x: 0,
        y: 5,
        style : {
            fontSize : '13px',
            color:'#8a95a0',
            fontWeight : '500',
            letterSpacing : '1px'

        }
    },
    legend: {
        itemStyle:{
        color:'#8a95a0',
        fontWeight: '500',
        fontSize: '13px',
        letterSpacing:'1px'
        }
    },
    plotOptions: {
        series: {
            cursor: 'pointer',
            events: {
                click: function (event) {
                    console.log('point name' , event.point.name);

    
                }
            },
            showInLegend: true
        },
        pie: {
            //allowPointSelect: true,
            // data here
            data:
               [{
                   //Calved
                   name: 'Calves',
                   color: '#6EB8EE',
                   y: 40
               },
               {
                   //Young Stock
                   name: 'Young Stock',
                   color: '#FFC300',
                   y:30
               },
               {
                   //Heifers
                   name: 'Heifers',
                   color: '#E3A945',
                   y: 10
               },
               {
                   //First Lactations
                   name: 'Lactations',
                   color: '#F0EC16',
                   y:5
               },
               {
                   //Cows
                   name: 'Cows',
                   color: '#5CEC59',
                   y: 5
               },
               {
                   //Unknown
                   name: 'Other', 
                   color: '#e60000',
                   y: 10
               }]
        }
    },
    
    series: [
    {
        name: 'Animals',
        colorByPoint: true,
        innerSize: '70%',
        dataLabels: {
            distance: 20,
            color:'#0055a5',

    
            formatter: function () {
                if (this.y > 0)
                {
                    return '<b>' + this.y;
                }
                    // + this.point.name + '(s) </b>';
            }
        },
    }]


  }
   


class FirstContainer extends Component{

    showAlert() {
        alert("I'm an alert");
      }

  render() {
      return(
    <div className="FirstContainer">

        <div class="container-fluid">

        <div class="row" >
        <div class="col-xl-4 " >
            <div class="card row1" >
                <div class="settings">
                    <a href="#">
                        <img src="settings2.svg" alt="settings" />
                    </a>
                </div>
                <div class="card-body">
                    <span class="card_title" onClick={this.showAlert}>
                        Herd Overview
                    </span>
                    <hr />
                    <HighchartsReact class="overviewpie"
                            highcharts={Highcharts}
                            options={options}
                        />
  
                </div>
            </div>

        </div>
        <div class="col-xl-8" >
            <div class="card row1" >
                <div class="settings">
                    <a href="#">
                        <img src="settings2.svg" alt="settings" />
                    </a>
                </div>
                <div class="card-body">
                    <span class="card_title">
                        Milking Stats
                    </span>
                    <hr />
                   
                </div>
            </div>

        </div>
          
    </div>
    </div>
    </div>
      )
 }
}

export default FirstContainer;
