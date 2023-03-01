import React, { useState,  } from 'react'
import './Bookingout.css';
import BgImg3 from './assets/redbg3w.png'
import { Link, useParams , Route, useLocation } from 'react-router-dom';
// import { UserContext } from './App';

function Bookingout() {
  const location = useLocation();
// console.log(location.state);
const bus = location.state.bus;

  const [sit, seSit] = useState("");
  const getseat = (id) =>{
    seSit(id);
  }
  return (
    <div className='bookingout'>
      <div className='bookedbus'>
       <ul>
        <li>{bus.busName}</li>
        <li>{bus.departureTime}</li>
        <li>{bus.arrivalTime}</li>
        <li>{bus.ticketPrice}</li>
       </ul>
      </div>
      <div>
        <img src={BgImg3} alt="" className='bus-img1'/>
      </div>
      <div className='bus'>
        <div className='single-row'>
        <div className='double-row'>
          <div className='seat' id="1" onClick={(e) => getseat(e.target.id)}>1</div>
          <div className='seat' id="2" onClick={(e) => getseat(e.target.id)}>2</div>
          <div className='seat' id="3" onClick={(e) => getseat(e.target.id)}>3</div>
          <div className='seat' id="4" onClick={(e) => getseat(e.target.id)}>4</div>
          <div className='seat' id="5" onClick={(e) => getseat(e.target.id)}>5</div>
          <div className='seat' id="6" onClick={(e) => getseat(e.target.id)}>6</div>
          <div className='seat' id="7" onClick={(e) => getseat(e.target.id)}>7</div>
          <div className='seat' id="8" onClick={(e) => getseat(e.target.id)}>8</div>
          <div className='seat' id="9" onClick={(e) => getseat(e.target.id)}>9</div>
          <div className='seat' id="10" onClick={(e) => getseat(e.target.id)}>10</div>
        </div>
        <div className='double-row'>
        <div className='seat' id="11" onClick={(e) => getseat(e.target.id)}>11</div>
          <div className='seat' id="12" onClick={(e) => getseat(e.target.id)}>12</div>
          <div className='seat' id="13" onClick={(e) => getseat(e.target.id)}>13</div>
          <div className='seat' id="14" onClick={(e) => getseat(e.target.id)}>14</div>
          <div className='seat' id="15" onClick={(e) => getseat(e.target.id)}>15</div>
          <div className='seat' id="16" onClick={(e) => getseat(e.target.id)}>16</div>
          <div className='seat' id="17" onClick={(e) => getseat(e.target.id)}>17</div>
          <div className='seat' id="18" onClick={(e) => getseat(e.target.id)}>18</div>
          <div className='seat' id="19" onClick={(e) => getseat(e.target.id)}>19</div>
          <div className='seat' id="20" onClick={(e) => getseat(e.target.id)}>20</div>
        </div>
        <div className='singled-row'>
        <div className='double-row'>
        <div className='seat' id="21" onClick={(e) => getseat(e.target.id)}>21</div>
          <div className='seat' id="22" onClick={(e) => getseat(e.target.id)}>22</div>
          <div className='seat' id="23" onClick={(e) => getseat(e.target.id)}>23</div>
          <div className='seat' id="24" onClick={(e) => getseat(e.target.id)}>24</div>
          <div className='seat' id="25" onClick={(e) => getseat(e.target.id)}>25</div>
          <div className='seat' id="26" onClick={(e) => getseat(e.target.id)}>26</div>
          <div className='seat' id="27" onClick={(e) => getseat(e.target.id)}>27</div>
          <div className='seat' id="28" onClick={(e) => getseat(e.target.id)}>28</div>
          <div className='seat' id="29" onClick={(e) => getseat(e.target.id)}>29</div>
          <div className='seat' id="30" onClick={(e) => getseat(e.target.id)}>30</div>
        </div>
        </div>
        </div>

      </div>
      <div className='btnflex'>
      <div className='showseat'>Seat:{sit}</div>
      <Link to="/ticket">
      <button className='btn-book'>BOOK TICKET</button>
      </Link>
      </div>
    </div>
  )
}

export default Bookingout