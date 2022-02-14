import logo from './logo.svg';
import './App.css';
import './index.css';



function App(props) {
  const { employee } = props;

  return (
    <div className="container">
      {/* Start your React code here */
        <div class="mainCont">
            <img src={employee.profileImg} alt="display" />
            <h1>{employee.name}</h1>
            <h5>Location</h5><h3>{employee.location}</h3>
            <h5>bloodGroup</h5><h3>{employee.bloodGroup}</h3>
            <h5>Age</h5><h3>{employee.age}</h3>
        </div>
      }
    </div>
  )
}



export default App;
