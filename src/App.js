import React from 'react';
import Navbar from './components/Navbar.js';
// Be sure to uncomment these components and the data before you use them!
import SchoolCard from './components/SchoolCard.js';
import data from './nycSchoolEnrollmentData.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <div className="row">
            <SchoolCard 
            name={data[0].ENTITY_NAME}
            school={data[0]}
            demodata= {data[0].NUM_WHITE}
            demodata1= {data[0].NUM_BLACK}
            demodata2= {data[0].NUM_HISP}
            demodata3= {data[0].NUM_ASIAN}
            />
            <SchoolCard 
            name ={data[1].ENTITY_NAME}
            school={data[1]}
            demodata= {data[1].NUM_WHITE}
            demodata1= {data[1].NUM_BLACK}
            demodata2= {data[1].NUM_HISP}
            demodata3= {data[1].NUM_ASIAN}
            />
            <SchoolCard 
            name ={data[2].ENTITY_NAME}
            school={data[2]}
            demodata= {data[2].NUM_WHITE}
            demodata1= {data[2].NUM_BLACK}
            demodata2= {data[2].NUM_HISP}
            demodata3= {data[2].NUM_ASIAN}
            />
            <SchoolCard 
            name ={data[3].ENTITY_NAME}
            school={data[3]}
            demodata= {data[3].NUM_WHITE}
            demodata1= {data[3].NUM_BLACK}
            demodata2= {data[3].NUM_HISP}
            demodata3= {data[3].NUM_ASIAN}
            />
            <SchoolCard 
            name ={data[4].ENTITY_NAME}
            school={data[4]}
            demodata= {data[4].NUM_WHITE}
            demodata1= {data[4].NUM_BLACK}
            demodata2= {data[4].NUM_HISP}
            demodata3= {data[4].NUM_ASIAN}
            />
            <SchoolCard 
            name ={data[5].ENTITY_NAME}
            school={data[5]}
            demodata= {data[5].NUM_WHITE}
            demodata1= {data[5].NUM_BLACK}
            demodata2= {data[5].NUM_HISP}
            demodata3= {data[5].NUM_ASIAN}
            />
        </div>
      </div>
    </div>
  );
}

export default App;
