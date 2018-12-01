import React, { Component } from 'react';
import '../App.css';

class Icons_menu extends Component{

    constructor(props){
    super(props);
    this.state={
      items:[]
    }
  }

    componentDidMount(){
      fetch('http://dev.4all.com:3050/widgets')
      .then(res => res.json())
      .then(json => {
        this.setState({
          items:json
        })
      });

    }


  render() {
    var {items} = this.state;
       return (
    <div className="Menu-component">
    <h1>Dashboard</h1>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2 col-12 p-0 mr-4 bg-white b-radius d-flex mb-3 inline-block">
          <div className="inline-block text-center b-radius bg-blue p-2 pr-4 pl-4">
            <i className="fas fa-shopping-bag"></i>
            </div>
            <div className="menu-block">
              <span className="ml-2 mid-f d-block">{items.newOrders}</span>
              <span className="ml-2 small-f">New Orders</span>
            </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2 col-12 p-0 mr-4 bg-white b-radius d-flex mb-3">
          <div className="inline-block text-center b-radius bg-orange p-2 pr-4 pl-4">
            <i className="far fa-comment"></i>
          </div>
          <div>
              <span className="ml-2 mid-f d-block">{items.comments}</span>
              <span className="ml-2 small-f">Comments</span>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2 col-12 p-0 mr-4 bg-white b-radius d-flex mb-3">
          <div className="inline-block text-center b-radius p-2 pr-4 pl-4 bg-green">
            <i className="far fa-user"></i>
          </div>
          <div>
              <span className="ml-2 mid-f d-block">{items.newUsers}</span>
              <span className="ml-2 small-f">New Users</span>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2 col-12 p-0 bg-white b-radius d-flex">
          <div className="inline-block text-center b-radius p-2 p-fixed bg-red">
            <i className="fas fa-table"></i>
          </div>
          <div>
              <span className="ml-2 mid-f d-block">{items.pageViews}</span>
              <span className="ml-2 small-f">Page Views</span>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Icons_menu;