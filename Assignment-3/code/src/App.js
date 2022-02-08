import React from 'react';
import logo from './logo.svg';
import './App.css';


var arrow = "<"
var arrowright = ">"
const employeeDetails = {
  name: 'Alan Ford',
  employeeID: 562152,
  Email: 'alan.form@email.com',
  Appointmenton: new Date().toLocaleString(),
  phone: +98653322278,
  OrderInfo:{  
    status: 'In Progress',
    Door: 'Mark',
    Time: new Date().toLocaleTimeString() 
  },
  Person: {
    Avatar: 'https://www.w3schools.com/howto/img_avatar.png',
    Title: 'Hey This is Title',
    Description: 'djshsd mhdsuahu sjdkj jdsklk alspwapd dsjid  titiu sjh sjhd jshd jiaoa jsdsj'

  }
}

function App() {
  return (
    <div className="site-container">
      {/* Start Your code here */}
      <div className='container basic-info'>
        <div className='arrow'>
         <a href='#' className='arrowInfo'>{arrow}</a>
        </div>
        <div>
          <h3>{employeeDetails.name}</h3>
          <p>{employeeDetails.employeeID}</p>
        </div>
        <div>
          <button>Print</button>
        </div>
      </div>
   
      <div className='container'>
        <div className='customer-info'>
          <div><h3>Appointment On </h3>{employeeDetails.Appointmenton}</div>
          <div><h3>Email </h3>{employeeDetails.Email}</div>
          <div><h3>Phone </h3>{employeeDetails.phone}</div>
        </div>
      </div>
      <div className='container'>
        <div className='order-info'>
          <div>
            <h3>Status</h3>
            <p><input type='radio'></input>{employeeDetails.OrderInfo.status}</p>
          </div>
          <div >
            <h3>Door</h3>
            <p>{employeeDetails.OrderInfo.Door}</p>
          </div>
          <div>
            <h3>Time</h3>
            <p>{employeeDetails.OrderInfo.Time}</p>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='product-info'>
          <div className='arrow'>
            <input type="checkbox" className='check'></input>
          </div>
          <div>
            <img src={employeeDetails.Person.Avatar} alt="display" width='100' height='100' />
          </div>
          <div>
            <h3>{employeeDetails.Person.Title}</h3>
            <p>{employeeDetails.Person.Description}</p>
          </div>
          <div className='arrowleft'>
            <a href="#" className='arrowInfo'>{arrowright}</a>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
