import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';
 

class Chart extends Component{
	constructor(props){
    super(props);
    this.state={
    chartData:{
      labels: [],
	  datasets: [
	    {
	      label: 'Points',
	      lineTension: 0.1,
	      backgroundColor: 'rgba(75,192,192,0.4)',
	      borderColor: 'rgba(75,192,192,1)',
	      borderCapStyle: 'butt',
	      borderDash: [],
	      borderDashOffset: 0.0,
	      borderJoinStyle: 'miter',
	      pointBorderColor: 'rgba(75,192,192,1)',
	      pointBackgroundColor: '#fff',
	      pointBorderWidth: 1,
	      pointHoverRadius: 5,
	      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
	      pointHoverBorderColor: 'rgba(220,220,220,1)',
	      pointHoverBorderWidth: 2,
	      pointRadius: 4,
	      pointHitRadius: 10,
	      data: []
    }
  ]
    }
    }
  }

    componentDidMount() {
      axios.get('http://dev.4all.com:3050/pageViews')
        .then(res => {
          const pageView = res.data;
          let months = [];
          let view = [];
          pageView.forEach(element => {
             months.push(element.month);
             view.push(element.views);
          });
          this.setState({ 
            chartData: {
              labels: months,
              datasets:[
                 {
                 	label: 'Points',
			      lineTension: 0.1,
			      backgroundColor: 'rgba(75,192,192,0.4)',
			      borderColor: 'rgba(75,192,192,1)',
			      borderCapStyle: 'butt',
			      borderDash: [],
			      borderDashOffset: 0.0,
			      borderJoinStyle: 'miter',
			      pointBorderColor: 'rgba(75,192,192,1)',
			      pointBackgroundColor: '#fff',
			      pointBorderWidth: 1,
			      pointHoverRadius: 5,
			      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
			      pointHoverBorderColor: 'rgba(220,220,220,1)',
			      pointHoverBorderWidth: 2,
			      pointRadius: 4,
			      pointHitRadius: 10,
                    data: view
                 }
              ]
           }
           });
        })
    }


	render(){
		return(
		<div className="container ml-0 mt-3" style={{backgroundColor:'white', borderRadius:'0.5%'}}>
			<h2>Site Traffic Overview</h2>
			<Line data={this.state.chartData} />
		</div>

		)
	}
}

export default Chart;