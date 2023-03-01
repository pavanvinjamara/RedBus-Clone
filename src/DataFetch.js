import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './DataFetch.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faArrowRightArrowLeft
} from '@fortawesome/free-solid-svg-icons'
// import { useStateValue } from './StateProvider';
// import { Link } from 'react-router-dom';
// import Booking from './Booking'
import { useNavigate } from 'react-router-dom';

function DataFetch() {
  const [buses, setBuses] = useState([])
  const [source, setSource] = useState("")
  const [destination, setDestination] = useState("")
  const [getData, setGetData] = useState("")
  const [tbhead,setTbHead] = useState("");
  const navigate = useNavigate();
  // const [state, dispatch] = useStateValue();
  // const [getbus, SetGetBus] = useState();

  const handleClick = () =>{
    setGetData(source, destination)
  }
  const getHeader= () =>{
    setTbHead(
      <tr className="tablerow">
        <th><h1>SORT BY</h1></th>
        <th>Departure</th>
        <th>Arrival</th>
        <th>Price</th>
      </tr>
    )
  }

  useEffect(()=>{
    axios.get(`https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${source}&destination=${destination}`).then(res =>{
      console.log(res)
      setBuses(res.data)
    })
    .catch(err =>{
      console.log(err)
      
    })
  },[getData])

  

  var goForBook = (busName) =>{
    //dispatch the item into the data layer
    console.log(buses[busName].arrivalTime);
    // console.log(busName);
    // console.log(buses);

    // axios.get(`https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses`).t

    // buses.busName
    
    navigate('/booking', { state: { bus: buses[busName] }}
    );

    
    //  SetGetBus(
    //   <Booking bus={buses[busName]}/>
    //  )
  }
  return (
    <div>
      <div className='form'>
        <form>
          <div></div>
          <input type='text' value={source} placeholder="Source" onChange={e => setSource(e.target.value)} required/>
          <span className="arrow-mark">
          <FontAwesomeIcon icon={faArrowRightArrowLeft} width="20px" color="white" className="icon"/>
          </span>
          <input type='text' value={destination} placeholder="Destination"  onChange={e => setDestination(e.target.value)} required/>
          <input type='date' className="date" required/>
          <button className="search-btn" type="button" onClick={() => {
            getHeader();
            handleClick();
          }}>SEARCH BUSES</button>
        </form>
      </div>
      <table className='list'>
     <h1>{buses.busName}</h1>
        <thead>{tbhead}</thead>
        {
          buses.map( (buses, index) =>(
            <tr className="tablerow">
              <td ><h1>{buses.busName}</h1></td>
              <td >{buses.departureTime}</td>
            <td >{buses.arrivalTime}</td>
            <td >{buses.ticketPrice}</td>
            {/* <Link to={`/booking/${buses.busName}`}> */}
            <td> <button id={index} onClick={(e) => goForBook(e.target.id)}> GO TO BOOKINGS</button></td>
          {/* </Link> */}
          
            {/* <div>{getbus}</div> */}
            </tr>
            
          ))
        }
        
      </table>
    
    </div>
  )
}

export default DataFetch