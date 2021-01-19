import React, { Component } from 'react';
import './css/SchoolCard.css';

function SchoolCard(props) {
  return(
    <div className="col-4">
      <div className="card">
        <h5 className="card-header">{props.name}</h5>
        <div className="card-body">
          <h5 className="card-title">
            <span className="badge">2017-18</span>
            <span className="badge">2016-17</span>
            <span className="badge">Archive</span>
          </h5>
          <span className="badge badge-header">Student Data</span>
          <ul className="list-group">
            <li className="list-group-item">Enrollment Data</li>
            <li className="list-group-item">3-8 ELA Assessment Data</li>
            <li className="list-group-item">3-8 Math Assessment Data</li>
          </ul>
          <span className="badge badge-header">School Data</span>
          <ul className="list-group">
            <li className="list-group-item">White {props.demodata}</li>
            <li className="list-group-item">Black {props.demodata1}</li>
            <li className="list-group-item">Hispanic {props.demodata2}</li>
            <li className="list-group-item">Asian {props.demodata3}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SchoolCard;
